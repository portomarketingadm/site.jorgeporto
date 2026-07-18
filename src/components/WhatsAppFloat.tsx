"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CONTACT } from "@/lib/constants";

export function WhatsAppFloat() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.06], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.06], [0.7, 1]);

  return (
    <motion.a
      href={CONTACT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ opacity, scale }}
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-transform hover:scale-105 md:bottom-8 md:right-8"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </motion.a>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 4C9.373 4 4 9.373 4 16c0 2.32.657 4.49 1.797 6.334L4 28l5.83-1.77A11.93 11.93 0 0 0 16 28c6.627 0 12-5.373 12-12S22.627 4 16 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M11.6 11.2c.28-.62.55-.63.8-.64.2-.01.44-.01.64 0 .2.01.5-.08.78.6.29.7 1 2.4 1.08 2.58.08.18.14.4.02.64-.11.24-.17.38-.34.58-.17.2-.36.45-.51.6-.17.17-.35.35-.15.7.2.35.9 1.5 1.95 2.42 1.34 1.19 2.47 1.56 2.83 1.74.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.35.48-.29.8-.17.32.11 2.05.97 2.4 1.14.36.18.6.27.68.42.09.15.09.85-.2 1.67-.29.82-1.7 1.6-2.37 1.7-.6.1-1.36.15-2.2-.14-.5-.17-1.15-.39-1.98-.76-3.49-1.51-5.77-5.06-5.95-5.3-.17-.24-1.42-1.89-1.42-3.61 0-1.71.9-2.56 1.22-2.91Z"
        fill="currentColor"
      />
    </svg>
  );
}
