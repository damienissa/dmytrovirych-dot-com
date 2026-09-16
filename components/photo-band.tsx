import Image from "next/image";

/**
 * A full-bleed photographic break between sections. The photographs carry the
 * atmosphere on this site, so each one gets the full width and a generous
 * height; the scrims keep any overlaid text legible and let the band settle
 * back into the dark ground at its edges.
 *
 * To add more breaks as photography comes in, drop the file into
 * public/images/ and render another <PhotoBand /> between sections.
 */
export function PhotoBand({
  src,
  alt,
  position = "center",
  label,
  quote,
  priority = false,
  className = "h-[62vh] lg:h-[78vh]",
}: {
  src: string;
  alt: string;
  position?: string;
  label?: string;
  quote?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        priority={priority}
        className="object-cover"
        style={{ objectPosition: position }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(18,19,17,.85),rgba(18,19,17,.12)_38%,rgba(18,19,17,.12)_62%,rgba(18,19,17,.88))]"
      />
      {(label || quote) && (
        <div className="absolute inset-x-0 bottom-0 pb-12 lg:pb-16">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-14">
            {label && <span className="label">{label}</span>}
            {quote && (
              <p className="mt-4 max-w-[24ch] text-[clamp(1.3rem,2.6vw,1.875rem)] font-light leading-[1.34] tracking-[-0.028em]">
                {quote}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
