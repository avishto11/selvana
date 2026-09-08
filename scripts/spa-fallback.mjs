import { copyFileSync } from "node:fs";
import { join } from "node:path";

// GitHub Pages only serves static files, so deep links (e.g. /cottages/pine-cedar)
// 404 on refresh. Serving index.html as 404.html lets the client-side router
// take over and resolve the real route.
const dist = join(import.meta.dirname, "..", "dist");
copyFileSync(join(dist, "index.html"), join(dist, "404.html"));
console.log("Copied dist/index.html -> dist/404.html for SPA routing on GitHub Pages");
