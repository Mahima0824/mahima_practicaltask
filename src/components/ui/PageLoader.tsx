"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PageLoaderProps = {
  onComplete?: () => void;
};

export const PageLoader = ({ onComplete }: PageLoaderProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-white gap-6"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          {/* Logo */}
          <motion.span
            className="text-3xl font-extrabold tracking-[-0.03em] text-brand-primary select-none"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            AAVORide
          </motion.span>

          {/* Circle SVG Loader */}
          <motion.div
            className="loader-wrap"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "backOut", delay: 0.2 }}
          >
            <svg viewBox="0 0 80 80" width="52" height="52">
              <circle
                r="32"
                cy="40"
                cx="40"
                fill="none"
                stroke="#ff3e1d"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray="150 50 150 50"
                strokeDashoffset="75"
                style={{
                  animation: "loaderCircle 1.6s cubic-bezier(0.785,0.135,0.15,0.86) infinite",
                }}
              />
            </svg>

            {/* Dot */}
            <span
              className="loader-dot"
              style={{
                animation: "loaderDotCircle 1.6s cubic-bezier(0.785,0.135,0.15,0.86) infinite",
              }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-xs font-semibold text-muted-gray tracking-[0.18em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.4 }}
          >
            Your ride awaits
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
