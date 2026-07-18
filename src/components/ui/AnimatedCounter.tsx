"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
};

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.8,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  // A generous, expanding margin (not a shrinking one) so the trigger
  // zone is far larger than the viewport itself — a fast mobile scroll
  // flick can't jump clean over it and leave the counter stuck at 0.
  const isInView = useInView(ref, { once: true, margin: "200px 0px" });
  const [display, setDisplay] = useState(() =>
    formatNumber(0, decimals)
  );

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        setDisplay(formatNumber(latest, decimals));
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

function formatNumber(value: number, decimals: number) {
  if (decimals > 0) {
    return value.toLocaleString("pt-BR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }
  return Math.round(value).toLocaleString("pt-BR");
}
