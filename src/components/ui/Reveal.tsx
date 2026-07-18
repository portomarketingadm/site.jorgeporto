"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export type RevealDirection = "up" | "left" | "right" | "scale" | "clip";

const EASE = [0.16, 1, 0.3, 1] as const;

const DIRECTION_VARIANTS: Record<RevealDirection, Variants> = {
  up: {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -56 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 56 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1 },
  },
  clip: {
    hidden: { opacity: 0, clipPath: "inset(100% 0 0 0)" },
    visible: { opacity: 1, clipPath: "inset(0% 0 0 0)" },
  },
};

type RevealProps = {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "div" | "section";
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className,
  as = "div",
}: RevealProps) {
  const MotionTag = as === "section" ? motion.section : motion.div;

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={DIRECTION_VARIANTS[direction]}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
};

export function RevealGroup({
  children,
  className,
  stagger = 0.12,
  delayChildren = 0,
}: RevealGroupProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: stagger, delayChildren }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type RevealItemProps = {
  children: ReactNode;
  direction?: RevealDirection;
  duration?: number;
  className?: string;
};

export function RevealItem({
  children,
  direction = "up",
  duration = 0.7,
  className,
}: RevealItemProps) {
  return (
    <motion.div
      variants={DIRECTION_VARIANTS[direction]}
      transition={{ duration, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
