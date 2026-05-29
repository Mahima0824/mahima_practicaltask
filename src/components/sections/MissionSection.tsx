"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export const MissionSection: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const missionItems = [
    {
      title: "Lowest Price",
      description: "Enjoy affordable rides with reliable service and uncompromised comfort on every journey.",
      icon: (
        <svg viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-brand-primary">
          <path d="M13,9c-0.8333,0 -1.5417,-0.29 -2.125,-0.88c-0.5833,-0.58 -0.875,-1.29 -0.875,-2.12c0,-0.83 0.2917,-1.54 0.875,-2.12c0.5833,-0.59 1.2917,-0.88 2.125,-0.88c0.8333,0 1.5417,0.29 2.125,0.88c0.5833,0.58 0.875,1.29 0.875,2.12c0,0.83 -0.2917,1.54 -0.875,2.12c-0.5833,0.59 -1.2917,0.88 -2.125,0.88zM6,12c-0.55,0 -1.0208,-0.2 -1.4125,-0.59c-0.3917,-0.39 -0.5875,-0.86 -0.5875,-1.41v-8c0,-0.55 0.1958,-1.02 0.5875,-1.41c0.3917,-0.39 0.8625,-0.59 1.4125,-0.59h14c0.55,0 1.0208,0.2 1.4125,0.59c0.3917,0.39 0.5875,0.86 0.5875,1.41v8c0,0.55 -0.1958,1.02 -0.5875,1.41c-0.3917,0.39 -0.8625,0.59 -1.4125,0.59zM8,10h10c0,-0.55 0.1958,-1.02 0.5875,-1.41c0.3917,-0.39 0.8625,-0.59 1.4125,-0.59v-4c-0.55,0 -1.0208,-0.2 -1.4125,-0.59c-0.3917,-0.39 -0.5875,-0.86 -0.5875,-1.41h-10c0,0.55 -0.1958,1.02 -0.5875,1.41c-0.3917,0.39 -0.8625,0.59 -1.4125,0.59v4c0.55,0 1.0208,0.2 1.4125,0.59c0.3917,0.39 0.5875,0.86 0.5875,1.41zM19,16h-17c-0.55,0 -1.0208,-0.2 -1.4125,-0.59c-0.3917,-0.39 -0.5875,-0.86 -0.5875,-1.41v-11h2v11h17zM6,10v-8z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      title: "Smarter Mobility for Everyone",
      description: "We make everyday transportation accessible, affordable, and efficient for commuters, travelers, and businesses alike.",
      icon: (
        <svg viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[19.2px] h-6 text-brand-primary">
          <path d="M6.95,13.55l5.65,-5.65l-1.425,-1.425l-4.225,4.225l-2.1,-2.1l-1.425,1.425zM8,20c-2.317,-0.583 -4.229,-1.912 -5.738,-3.987c-1.508,-2.075 -2.262,-4.38 -2.262,-6.913v-6.1l8,-3l8,3v6.1c0,2.533 -0.754,4.838 -2.263,6.913c-1.508,2.075 -3.42,3.404 -5.737,3.987zM8,17.9c1.733,-0.55 3.167,-1.65 4.3,-3.3c1.133,-1.65 1.7,-3.483 1.7,-5.5v-4.725l-6,-2.25l-6,2.25v4.725c0,2.017 0.567,3.85 1.7,5.5c1.133,1.65 2.567,2.75 4.3,3.3z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      title: "Safe Long-Distance Travel",
      description: "We are committed to delivering safe, dependable, and customer-focused transportation experiences every day.",
      icon: (
        <svg viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16.8px] h-6 text-brand-primary">
          <path d="M7,20c-1.7667,0 -3.2083,-0.28 -4.325,-0.84c-1.1167,-0.56 -1.675,-1.28 -1.675,-2.16c0,-0.4 0.1208,-0.77 0.3625,-1.11c0.2417,-0.34 0.5792,-0.64 1.0125,-0.89l1.575,1.48c-0.15,0.06 -0.3125,0.14 -0.4875,0.22c-0.175,0.08 -0.3125,0.18 -0.4125,0.3c0.2167,0.27 0.7167,0.5 1.5,0.7c0.7833,0.2 1.6,0.3 2.45,0.3c0.85,0 1.6708,-0.1 2.4625,-0.3c0.7917,-0.2 1.2958,-0.43 1.5125,-0.7c-0.1167,-0.13 -0.2667,-0.24 -0.45,-0.33c-0.1833,-0.08 -0.3583,-0.15 -0.525,-0.22l1.55,-1.5c0.4667,0.27 0.825,0.57 1.075,0.91c0.25,0.34 0.375,0.72 0.375,1.14c0,0.88 -0.5583,1.6 -1.675,2.16c-1.1167,0.56 -2.5583,0.84 -4.325,0.84zM7.025,14.5c1.65,-1.22 2.8917,-2.44 3.725,-3.66c0.8333,-1.23 1.25,-2.46 1.25,-3.69c0,-1.7 -0.5417,-2.98 -1.625,-3.85c-1.0833,-0.87 -2.2083,-1.3 -3.375,-1.3c-1.1667,0 -2.2917,0.43 -3.375,1.3c-1.0833,0.87 -1.625,2.15 -1.625,3.85c0,1.12 0.4083,2.28 1.225,3.49c0.8167,1.21 2.0833,2.49 3.8,3.86zM7,17c-2.35,-1.73 -4.1042,-3.42 -5.2625,-5.05c-1.1583,-1.63 -1.7375,-3.23 -1.7375,-4.8c0,-1.18 0.2125,-2.22 0.6375,-3.11c0.425,-0.89 0.9708,-1.64 1.6375,-2.24c0.6667,-0.6 1.4167,-1.05 2.25,-1.35c0.8333,-0.3 1.6583,-0.45 2.475,-0.45c0.8167,0 1.6417,0.15 2.475,0.45c0.8333,0.3 1.5833,0.75 2.25,1.35c0.6667,0.6 1.2125,1.35 1.6375,2.24c0.425,0.89 0.6375,1.93 0.6375,3.11c0,1.57 -0.5792,3.17 -1.7375,4.8c-1.1583,1.63 -2.9125,3.32 -5.2625,5.05zM7,9c0.55,0 1.0208,-0.2 1.4125,-0.59c0.3917,-0.39 0.5875,-0.86 0.5875,-1.41c0,-0.55 -0.1958,-1.02 -0.5875,-1.41c-0.3917,-0.39 -0.8625,-0.59 -1.4125,-0.59c-0.55,0 -1.0208,0.2 -1.4125,0.59c-0.3917,0.39 -0.5875,0.86 -0.5875,1.41c0,0.55 0.1958,1.02 0.5875,1.41c0.3917,0.39 0.8625,0.59 1.4125,0.59z" fill="currentColor"/>
        </svg>
      ),
    },
  ];

  return (
    <section ref={ref} className="relative w-full py-24 md:py-30 bg-white overflow-hidden">
      <div className="md:w-142.5 w-78 h-78 md:h-142.5 bg-brand-primary md:bg-brand-primary/20 blur-[163px] absolute top-30 md:-top-10 -left-70 md:left-auto md:-right-30" />

      <div className="max-w-7xl relative z-10 mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* Left: Mockup — slide in from left with slight tilt */}
        <motion.div
          className="w-full md:w-1/2 order-2 md:order-1 flex justify-center"
          initial={{ opacity: 0, x: -60, rotate: -4 }}
          animate={inView ? { opacity: 1, x: 0, rotate: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <div className="relative max-w-sm sm:max-w-md md:max-w-full">
            <Image
              src="/assets/images/phone-taxi-mockup.png"
              alt="AAVORide App Mockup with Cab"
              width={540}
              height={580}
              className="object-contain drop-shadow-2xl hover:scale-102 transition-transform duration-300"
              priority
            />
          </div>
        </motion.div>

        {/* Right: Text content */}
        <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col gap-6 text-left">

          {/* Label + heading — fade up */}
          <motion.div
            className="flex flex-col gap-4 md:gap-2"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <span className="text-xs font-bold text-brand-primary tracking-[0.15em] uppercase">THE PURPOSE</span>
            <h2 className="text-[32px] md:text-5xl font-bold text-foreground leading-10 tracking-[0.32px]">Our Mission</h2>
          </motion.div>

          {/* Paragraph */}
          <motion.p
            className="text-sm md:text-lg text-muted-gray leading-7 font-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.28 }}
          >
            At AAVO, our mission is to make travel simpler, smarter, and more reliable for everyone. We aim to deliver seamless mobility experiences through trusted service, modern technology, and customer-focused transportation solutions designed for comfort, safety, and convenience.
          </motion.p>

          {/* Mission items — stagger from right */}
          <div className="mt-4 flex flex-col gap-6">
            {missionItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-4 items-start"
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.38 + index * 0.13 }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary/10 shrink-0 mt-1">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg md:text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm md:text-base text-muted-gray leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
