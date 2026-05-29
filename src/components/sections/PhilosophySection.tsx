"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PhilosophyBadge } from "../ui/PhilosophyBadge";

export const PhilosophySection: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative w-full bg-footer-bg py-16 md:py-30">
      <div className="max-w-208 mx-auto gap-8 px-4 md:px-12 flex flex-col items-center text-center">

        {/* Badge — zoom in */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: "backOut" }}
        >
          <PhilosophyBadge text="Our Philosophy" />
        </motion.div>

        {/* Title — slide up with slight rotation */}
        <motion.h2
          className="text-[32px] md:text-[48px] font-bold tracking-[-1.6px] text-foreground leading-10 md:leading-14.5"
          initial={{ opacity: 0, y: 40, rotateX: 12 }}
          animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.12 }}
          style={{ transformOrigin: "top center" }}
        >
          Driven By Trust & Simplicity
        </motion.h2>

        {/* Description — fade in from bottom */}
        <motion.p
          className="text-sm md:text-lg text-muted-gray leading-7 font-normal"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.26 }}
        >
          AAVORide is redefining the way people travel by providing trusted drivers, transparent pricing, and seamless ride experiences. We believe safe, comfortable, and reliable transportation should be accessible to everyone—making every journey simple, affordable, and stress-free.
        </motion.p>

        {/* Divider line — width expand */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.4 }}
          style={{ transformOrigin: "center" }}
        >
          <span className="w-20 h-1 bg-brand-primary rounded-full block" />
        </motion.div>

      </div>
    </section>
  );
};
