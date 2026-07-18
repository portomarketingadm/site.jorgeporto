type CoverVideoProps = {
  src: string;
  poster: string;
  className?: string;
  objectPosition?: string;
};

export function CoverVideo({
  src,
  poster,
  className,
  objectPosition,
}: CoverVideoProps) {
  return (
    <video
      className={className}
      style={{ objectPosition }}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
