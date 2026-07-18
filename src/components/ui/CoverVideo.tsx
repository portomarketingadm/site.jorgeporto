"use client";

import { useEffect, useRef, useState } from "react";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      style={{ objectPosition }}
      autoPlay={shouldLoad}
      muted
      loop
      playsInline
      preload={shouldLoad ? "auto" : "none"}
      poster={poster}
    >
      {shouldLoad && <source src={src} type="video/mp4" />}
    </video>
  );
}
