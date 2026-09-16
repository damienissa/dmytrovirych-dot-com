/**
 * The mark: an isometric cube in three faces.
 *
 * Geometry is re-centred from the supplied artwork (which sat 2 units low in
 * its 100-unit box) so it reads true at favicon sizes. The top face uses the
 * site's sand token, so the mark and the palette are the same colour by
 * construction rather than by coincidence.
 *
 * The static favicon assets in app/ carry the same paths — change one, change
 * both.
 */
const FACE = {
  top: "#C9A87C",
  left: "#F2F1EC",
  right: "#6D7064",
};

const TOP = "M50 6 L88 28 L50 50 L12 28 Z";
const LEFT = "M12 28 L50 50 V94 L12 72 Z";
const RIGHT = "M88 28 V72 L50 94 V50 Z";

export function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d={TOP} fill={FACE.top} />
      <path d={LEFT} fill={FACE.left} />
      <path d={RIGHT} fill={FACE.right} />
    </svg>
  );
}

/** Mark plus wordmark, for the nav and the footer. */
export function Logo({
  className = "",
  markClassName = "h-7 w-7",
  wordClassName = "text-[16.5px] font-medium tracking-[-0.02em]",
}: {
  className?: string;
  markClassName?: string;
  wordClassName?: string;
}) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className={markClassName} />
      <span className={wordClassName}>Dmytro Virych</span>
    </span>
  );
}
