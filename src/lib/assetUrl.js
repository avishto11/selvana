// Public-folder assets are referenced as plain root-relative strings in our
// data files, so Vite never rewrites them for the configured `base` path.
// Deployed under a subpath (e.g. GitHub Pages project sites at /selvana/),
// an unprefixed "/images/..." string resolves to the wrong origin-relative
// URL. Route every such path through this helper instead.
const BASE = import.meta.env.BASE_URL;

export function assetUrl(path) {
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${BASE}${clean}`;
}
