/**
 * Resolves static asset paths with basePath when deployed under a sub-path
 * (e.g. GitHub Pages at /portfolio) while remaining clean for root deploys (e.g. Vercel).
 */
export function getAssetPath(src: string): string {
  if (!src) return "";
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:")) {
    return src;
  }
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const cleanPath = src.startsWith("/") ? src : `/${src}`;
  return `${basePath}${cleanPath}`;
}
