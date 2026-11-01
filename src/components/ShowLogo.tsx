import { branding } from "../data/branding";

export function ShowLogo({
  className = "",
  decorative = false,
}: {
  className?: string;
  decorative?: boolean;
}) {
  return (
    <img
      className={`show-logo ${className}`}
      src={branding.logo.navigation.src}
      width={branding.logo.navigation.width}
      height={branding.logo.navigation.height}
      alt={decorative ? "" : branding.logo.alt}
      decoding="async"
      fetchPriority="high"
    />
  );
}
