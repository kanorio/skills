#!/usr/bin/env node
// Turns a page that references local files (fonts/, images/, illustrations/) into one self-contained HTML file.
// Every local file referenced from src=, href= (stylesheets, icons, preloads), CSS url() or a quoted path in a script
// ("images/photo.webp" in a data object) is embedded as a data URI. A path assembled in JavaScript
// (`images/${id}.webp`) cannot be resolved here: write each path out in full instead, and this script names any it finds.
// It only reads local files and writes the output file: no network, no dependencies.
//
// Usage: node scripts/inline.mjs <source.html> <output.html>
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const TYPES = {
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".css": "text/css",
};

function isLocal(ref) {
  return ref && !ref.includes("${") && !/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(ref);
}

// Quoted paths into the asset folders, wherever they appear (scripts, data attributes)
const QUOTED_ASSET = /(["'`])((?:\.\/)?(?:fonts|images|illustrations)\/[^"'`\s${}<>]+\.(?:woff2?|svg|webp|avif|png|jpe?g|gif|ico))\1/gi;
// A path into the asset folders that JavaScript assembles from a variable
const BUILT_ASSET = /(?:^|["'`(\s=])((?:\.\/)?(?:fonts|images|illustrations)\/[^"'`\s<>]*\$\{[^"'`\s<>]*)/g;

// Applies a replacement outside HTML comments only (a comment may show an example tag that is not a real reference)
function outsideComments(html, replace) {
  return html
    .split(/(<!--[\s\S]*?-->)/)
    .map((part) => (part.startsWith("<!--") ? part : replace(part)))
    .join("");
}

export function inlinePage(html, baseDir) {
  const cache = new Map();
  const missing = new Set();
  const dataUri = (ref) => {
    const clean = ref.split(/[?#]/)[0];
    const file = path.resolve(baseDir, clean);
    if (cache.has(file)) return cache.get(file);
    const type = TYPES[path.extname(file).toLowerCase()];
    if (!type || !existsSync(file)) {
      missing.add(ref);
      return null;
    }
    const uri = `data:${type};base64,${readFileSync(file).toString("base64")}`;
    cache.set(file, uri);
    return uri;
  };
  let out = outsideComments(html, (part) => part.replace(/url\(\s*(["']?)([^"')]+)\1\s*\)/g, (whole, quote, ref) => {
    if (!isLocal(ref)) return whole;
    const uri = dataUri(ref);
    return uri ? `url("${uri}")` : whole;
  }));
  out = outsideComments(out, (part) => part.replace(/(<(?:img|source|script|link|video|audio)\b[^>]*?\s(?:src|href)\s*=\s*)(["'])([^"']+)\2/gi, (whole, before, quote, ref) => {
    if (!isLocal(ref) || /\.html?(?:[?#]|$)/i.test(ref)) return whole;
    const uri = dataUri(ref);
    return uri ? `${before}${quote}${uri}${quote}` : whole;
  }));
  out = outsideComments(out, (part) => part.replace(QUOTED_ASSET, (whole, quote, ref) => {
    const uri = dataUri(ref);
    return uri ? `${quote}${uri}${quote}` : whole;
  }));
  const built = [...new Set([...out.replace(/<!--[\s\S]*?-->/g, "").matchAll(BUILT_ASSET)].map((match) => match[1]))];
  return { html: out, missing: [...missing], built };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const [source, output] = process.argv.slice(2);
  if (!source || !output) {
    console.error("Usage: node scripts/inline.mjs <source.html> <output.html>");
    process.exit(2);
  }
  const { html, missing, built } = inlinePage(readFileSync(source, "utf8"), path.dirname(path.resolve(source)));
  if (missing.length) console.error(`Could not embed (file not found): ${missing.join(", ")}`);
  if (built.length) {
    console.error(`Could not embed paths assembled in JavaScript: ${built.join(", ")}`);
    console.error('Write each path out in full (for example img: "images/photo.webp" in the data), then run this again.');
  }
  if (missing.length || built.length) process.exit(1);
  writeFileSync(output, html);
  console.log(`Wrote ${output} (${(Buffer.byteLength(html) / 1024).toFixed(0)} KB)`);
}
