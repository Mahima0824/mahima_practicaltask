"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export const VisionSection: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative w-full py-16 md:py-30 bg-white overflow-hidden">
      <div className="md:w-142.5 w-78 h-78 md:h-142.5 bg-brand-primary md:bg-brand-primary/20 blur-[163px] absolute top-30 md:top-0 -right-70 md:right-auto md:-left-30" />

      <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* Left: Text — fade up stagger */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-left">

          <motion.div
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          >
            <span className="text-xs font-bold text-brand-primary tracking-[0.15em] uppercase">THE FUTURE</span>
            <h2 className="text-[32px] md:text-[48px] font-bold tracking-[-1.6px] text-foreground leading-10 md:leading-14.5">
              Our Vision
            </h2>
          </motion.div>

          <motion.p
            className="text-sm md:text-lg text-muted-gray leading-7 font-normal"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
          >
            Becoming India's most trusted travel platform by setting new standards in comfort, convenience, and seamless mobility.
          </motion.p>

          {/* Glassmorphic card — scale + fade from below */}
          <motion.div
            className="mt-4 p-6 sm:p-8 rounded-[30px] border border-black/5 bg-white/70 backdrop-blur-md shadow-xs flex flex-col gap-4"
            initial={{ opacity: 0, scale: 0.93, y: 28 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.34 }}
          >
            <div className="flex gap-4 items-center">
              <svg viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-8 text-brand-primary shrink-0">
                <path id="Icon_7" d="M3,13c-0.8333,0 -1.5417,-0.29 -2.125,-0.88c-0.5833,-0.58 -0.875,-1.29 -0.875,-2.12c0,-0.83 0.2917,-1.54 0.875,-2.12c0.5833,-0.59 1.2917,-0.88 2.125,-0.88v-2c0,-0.55 0.1958,-1.02 0.5875,-1.41c0.3917,-0.39 0.8625,-0.59 1.4125,-0.59h3c0,-0.83 0.2917,-1.54 0.875,-2.12c0.5833,-0.59 1.2917,-0.88 2.125,-0.88c0.8333,0 1.5417,0.29 2.125,0.88c0.5833,0.58 0.875,1.29 0.875,2.12h3c0.55,0 1.0208,0.2 1.4125,0.59c0.3917,0.39 0.5875,0.86 0.5875,1.41v2c0.8333,0 1.5417,0.29 2.125,0.88c0.5833,0.58 0.875,1.29 0.875,2.12c0,0.83 -0.2917,1.54 -0.875,2.12c-0.5833,0.59 -1.2917,0.88 -2.125,0.88v4c0,0.55 -0.1958,1.02 -0.5875,1.41c-0.3917,0.39 -0.8625,0.59 -1.4125,0.59h-12c-0.55,0 -1.0208,-0.2 -1.4125,-0.59c-0.3917,-0.39 -0.5875,-0.86 -0.5875,-1.41zM8,11c0.4167,0 0.7708,-0.15 1.0625,-0.44c0.2917,-0.29 0.4375,-0.64 0.4375,-1.06c0,-0.42 -0.1458,-0.77 -0.4375,-1.06c-0.2917,-0.29 -0.6458,-0.44 -1.0625,-0.44c-0.4167,0 -0.7708,0.15 -1.0625,0.44c-0.2917,0.29 -0.4375,0.64 -0.4375,1.06c0,0.42 0.1458,0.77 0.4375,1.06c0.2917,0.29 0.6458,0.44 1.0625,0.44zM14,11c0.4167,0 0.7708,-0.15 1.0625,-0.44c0.2917,-0.29 0.4375,-0.64 0.4375,-1.06c0,-0.42 -0.1458,-0.77 -0.4375,-1.06c-0.2917,-0.29 -0.6458,-0.44 -1.0625,-0.44c-0.4167,0 -0.7708,0.15 -1.0625,0.44c-0.2917,0.29 -0.4375,0.64 -0.4375,1.06c0,0.42 0.1458,0.77 0.4375,1.06c0.2917,0.29 0.6458,0.44 1.0625,0.44zM7,15h8v-2h-8zM5,17h12v-12h-12z" fill="currentColor"/>
              </svg>
              <h3 className="text-lg md:text-xl font-bold text-foreground">
                Connecting People by Smarter Mobility
              </h3>
            </div>
            <p className="text-sm md:text-base text-muted-gray leading-relaxed">
              At AAVORide, we make travel simple, safe, and accessible for everyone. Delivering reliable rides with comfort, convenience, and trust in every journey.
            </p>
          </motion.div>
        </div>

        {/* Right: Map image — slide in from right + slight scale */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
        >
          <div className="relative w-full max-w-125">
            <Image
              src="/assets/images/india-map-connection.jpg"
              alt="Digital map of India showing network connections"
              width={500}
              height={400}
              style={{ width: "100%", height: "auto" }}
              className="rounded-[30px] shadow-[0px_25px_50px_rgba(0,0,0,0.15)] hover:scale-[1.01] transition-transform duration-300"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
