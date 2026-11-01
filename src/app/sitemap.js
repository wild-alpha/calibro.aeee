
import fs from "node:fs";
import path from "node:path";

const SITE_URL = "https://calibro.ae";
const APP_DIR = path.join(process.cwd(), "src", "app");

const PAGE_PATTERN = /^page\.(js|jsx|ts|tsx|mdx)$/;

function discoverPages(directory, segments = []) {
  if (!fs.existsSync(directory)) return [];

  const entries = fs.readdirSync(directory, {
    withFileTypes: true,
  });

  const urls = [];

  // Detect an actual Next.js page
  if (
    entries.some(
      (entry) =>
        entry.isFile() && PAGE_PATTERN.test(entry.name)
    )
  ) {
    urls.push(
      segments.length ? `/${segments.join("/")}` : "/"
    );
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const folder = entry.name;

    // Skip non-public and dynamic route folders
    if (
      folder === "api" ||
      folder.startsWith("_") ||
      folder.startsWith("@") ||
      folder.startsWith(".") ||
      folder.includes("[") ||
      folder.includes("]")
    ) {
      continue;
    }

    // Skip intercepted routes
    if (/^\((?:\.{1,3})\)/.test(folder)) {
      continue;
    }

    // Route groups don't contribute to the URL
    const isRouteGroup =
      folder.startsWith("(") && folder.endsWith(")");

    const nextSegments = isRouteGroup
      ? segments
      : [...segments, folder];

    urls.push(
      ...discoverPages(
        path.join(directory, folder),
        nextSegments
      )
    );
  }

  return urls;
}

export default function sitemap() {
  const pages = [...new Set(discoverPages(APP_DIR))];

  return pages.sort().map((route) => ({
    url: `${SITE_URL}${route === "/" ? "" : route}`,
  }));
}
