import Image, { type ImageProps } from "next/image";
import { getAssetPath } from "@/lib/assets";

/**
 * Enhanced Image component that automatically resolves asset URLs
 * with appropriate basePath on GitHub Pages subpath deployments.
 */
export function PortfolioImage({ src, alt, ...props }: ImageProps) {
  const resolvedSrc = typeof src === "string" ? getAssetPath(src) : src;
  return <Image src={resolvedSrc} alt={alt} {...props} />;
}

export { getAssetPath };
