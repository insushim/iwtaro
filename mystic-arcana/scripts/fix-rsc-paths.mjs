/**
 * Fix RSC payload paths for Cloudflare Pages.
 * Next.js 16 generates RSC files in subdirectories like:
 *   reading/__next.reading/__PAGE__.txt
 * But the browser requests them as:
 *   reading/__next.reading.__PAGE__.txt (dots instead of slashes)
 *
 * This script copies files to the dot-separated paths.
 */
import { readdirSync, statSync, copyFileSync, existsSync } from "fs";
import { join, basename, dirname } from "path";

const outDir = join(import.meta.dirname, "..", "out");

function processDir(dir) {
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      // Check if this is a __next.* directory containing __PAGE__.txt
      if (entry.startsWith("__next.")) {
        const pageTxt = join(fullPath, "__PAGE__.txt");
        if (existsSync(pageTxt)) {
          const dotName = `${entry}.__PAGE__.txt`;
          const dotPath = join(dir, dotName);
          copyFileSync(pageTxt, dotPath);
          console.log(`Copied: ${pageTxt.replace(outDir, "")} → ${dotPath.replace(outDir, "")}`);
        }
      }
      processDir(fullPath);
    }
  }
}

processDir(outDir);
console.log("RSC path fix complete.");
