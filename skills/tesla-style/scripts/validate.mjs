#!/usr/bin/env node
// Quality gate for pages built with a Kanorio style skill.
// It only reads files: no network, no writes, no dependencies.
//
// Usage:
//   node scripts/validate.mjs <page.html>             a finished single-file page (strictest)
//   node scripts/validate.mjs --deployed <page.html>  a page deployed with files beside it (allows network calls such as a real form endpoint)
//   node scripts/validate.mjs --template <page.html>  the skill's own template (sample brand names are expected there)
//
// Prints "ok" and exits 0, or lists every problem and exits 1.
import { readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const MAX_BYTES = 8 * 1024 * 1024;

const REMOTE_RESOURCE = [
  [/<script\b[^>]*\bsrc\s*=\s*["']?(?:https?:)?\/\//i, "a <script> loads from another host"],
  [/<link\b[^>]*\bhref\s*=\s*["']?(?:https?:)?\/\//i, "a <link> loads from another host"],
  [/<(?:img|source|video|audio|track|iframe|embed)\b[^>]*\bsrc\s*=\s*["']?(?:https?:)?\/\//i, "media loads from another host"],
  [/\bsrcset\s*=\s*["'][^"']*(?:https?:)?\/\//i, "a srcset loads from another host"],
  [/url\(\s*["']?(?:https?:)?\/\//i, "CSS url() loads from another host"],
  [/@import\s+(?:url\()?\s*["']?(?:https?:)?\/\//i, "CSS @import loads from another host"],
];
const NETWORK_CALL = [
  [/\bfetch\s*\(/, "fetch() call"],
  [/\bXMLHttpRequest\b/, "XMLHttpRequest"],
  [/\bnew\s+WebSocket\b/, "WebSocket"],
  [/\bnavigator\.sendBeacon\b/, "navigator.sendBeacon"],
  [/\bEventSource\b/, "EventSource"],
];
const SANDBOX_HOSTILE = [
  [/\b(?:window\.)?(?:alert|confirm|prompt)\s*\(/, "alert/confirm/prompt"],
  [/\bwindow\.open\s*\(/, "window.open"],
  [/\b(?:window\.)?top\.location\b/, "top-level navigation"],
];

/** File names and paths in the checklist ("illustrations/mark.svg") name files to redraw; a deployed site may keep the same file names. */
const FILE_REFERENCE = /\/|\.(?:svg|png|jpe?g|webp|avif|gif|ico|woff2?|ttf|otf|html?|css|m?js|json|md|txt)$/i;

/** The sample identity a finished page must not keep: inline code spans under "## Replace checklist" in SKILL.md, except file names and paths */
export function sampleStrings(skillMd) {
  const section = skillMd.split(/^## /m).find((part) => part.startsWith("Replace checklist"));
  if (!section) return [];
  return [...new Set([...section.matchAll(/`([^`\n]{3,})`/g)].map((m) => m[1]).filter((text) => !FILE_REFERENCE.test(text)))];
}

function stripScriptsAndStyles(html) {
  return html.replace(/<script\b[\s\S]*?<\/script>/gi, "").replace(/<style\b[\s\S]*?<\/style>/gi, "");
}

export function validatePage(html, { mode = "final", samples = [] } = {}) {
  const problems = [];
  for (const [pattern, label] of REMOTE_RESOURCE) if (pattern.test(html)) problems.push(`Remote resource: ${label}. Embed or bundle it.`);
  if (mode !== "deployed") {
    for (const [pattern, label] of NETWORK_CALL) if (pattern.test(html)) problems.push(`Network call: ${label}. A single-file page makes no network requests.`);
  }
  for (const [pattern, label] of SANDBOX_HOSTILE) if (pattern.test(html)) problems.push(`Sandbox-hostile API: ${label}.`);

  if (!/<html\b[^>]*\blang\s*=\s*["'][^"']+["']/i.test(html)) problems.push("<html> has no lang attribute.");
  if (!/<title>[^<]+<\/title>/i.test(html)) problems.push("No <title>.");
  if (!/<meta\b[^>]*name\s*=\s*["']description["']/i.test(html)) problems.push('No <meta name="description">.');
  if (!/<meta\b[^>]*name\s*=\s*["']color-scheme["']/i.test(html)) problems.push('No <meta name="color-scheme">.');
  if (!/prefers-reduced-motion/.test(html)) problems.push("No prefers-reduced-motion rule.");
  if (!/:focus-visible/.test(html)) problems.push("No :focus-visible style.");
  // Light-first styles add a dark theme and dark-first styles add a light one; either way both must exist
  if (!/prefers-color-scheme|data-theme|light-dark\(/.test(html)) problems.push("No second theme (prefers-color-scheme, data-theme or light-dark()).");

  const markup = stripScriptsAndStyles(html);
  if (/\bhref\s*=\s*["']#["']/i.test(markup)) problems.push('A link uses href="#". Point it at a section, a route or a real page.');
  const h1 = (markup.match(/<h1\b/gi) ?? []).length;
  if (h1 === 0) problems.push("No <h1>.");
  for (const img of markup.match(/<img\b[^>]*>/gi) ?? []) {
    if (!/\balt\s*=/i.test(img)) problems.push(`Image without alt: ${img.slice(0, 80)}`);
    if (!/\bwidth\s*=/i.test(img) || !/\bheight\s*=/i.test(img)) problems.push(`Image without width and height: ${img.slice(0, 80)}`);
  }
  const text = markup.replace(/<[^>]+>/g, " ");
  // © ® ™ are "pictographic" in Unicode but belong in footers and legal text
  const emoji = text.replace(/[\u00a9\u00ae\u2122]/g, "").match(/\p{Extended_Pictographic}/u);
  if (emoji) problems.push(`Emoji or pictograph in the page text ("${emoji[0]}"). Use inline SVG icons.`);

  if (mode !== "template") {
    for (const sample of samples) if (html.includes(sample)) problems.push(`Sample content is still on the page: "${sample}". Replace it with the user's own.`);
  }
  return problems;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const mode = args.includes("--template") ? "template" : args.includes("--deployed") ? "deployed" : "final";
  const file = args.find((arg) => !arg.startsWith("--"));
  if (!file) {
    console.error("Usage: node scripts/validate.mjs [--deployed | --template] <page.html>");
    process.exit(2);
  }
  const problems = [];
  if (statSync(file).size > MAX_BYTES) problems.push(`The page is larger than ${MAX_BYTES / 1024 / 1024} MB.`);
  let samples = [];
  try {
    samples = sampleStrings(readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), "../SKILL.md"), "utf8"));
  } catch {
    samples = [];
  }
  problems.push(...validatePage(readFileSync(file, "utf8"), { mode, samples }));
  if (problems.length === 0) {
    console.log("ok");
  } else {
    for (const problem of problems) console.log(`- ${problem}`);
    process.exit(1);
  }
}
