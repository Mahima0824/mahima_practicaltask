"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export const ServicesSection: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const serviceCards = [
    {
      title: "Wide Range of Cab Options",
      description: "Choose from hatchbacks, sedans, SUVs, Innova, Ertiga, and tempo travellers for city rides, family vacations, business trips, airport pickups, and long-distance outstation travel. AAVORide offers clean, comfortable, and budget-friendly vehicles for every journey.",
      image: "/assets/images/cab-range.png",
      icon: (
        <svg viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-primary">
          <path id="Icon_8" d="M3,14v1c0,0.28 -0.0958,0.52 -0.2875,0.71c-0.1917,0.19 -0.4292,0.29 -0.7125,0.29h-1c-0.2833,0 -0.5208,-0.1 -0.7125,-0.29c-0.1917,-0.19 -0.2875,-0.43 -0.2875,-0.71v-8l2.1,-6c0.1,-0.3 0.2792,-0.54 0.5375,-0.72c0.2583,-0.19 0.5458,-0.28 0.8625,-0.28h11c0.3167,0 0.6042,0.09 0.8625,0.28c0.2583,0.18 0.4375,0.42 0.5375,0.72l2.1,6v8c0,0.28 -0.0958,0.52 -0.2875,0.71c-0.1917,0.19 -0.4292,0.29 -0.7125,0.29h-1c-0.2833,0 -0.5208,-0.1 -0.7125,-0.29c-0.1917,-0.19 -0.2875,-0.43 -0.2875,-0.71v-1zM2.8,5h12.4l-1.05,-3h-10.3zM4.5,11c0.4167,0 0.7708,-0.15 1.0625,-0.44c0.2917,-0.29 0.4375,-0.64 0.4375,-1.06c0,-0.42 -0.1458,-0.77 -0.4375,-1.06c-0.2917,-0.29 -0.6458,-0.44 -1.0625,-0.44c-0.4167,0 -0.7708,0.15 -1.0625,0.44c-0.2917,0.29 -0.4375,0.64 -0.4375,1.06c0,0.42 0.1458,0.77 0.4375,1.06c0.2917,0.29 0.6458,0.44 1.0625,0.44zM13.5,11c0.4167,0 0.7708,-0.15 1.0625,-0.44c0.2917,-0.29 0.4375,-0.64 0.4375,-1.06c0,-0.42 -0.1458,-0.77 -0.4375,-1.06c-0.2917,-0.29 -0.6458,-0.44 -1.0625,-0.44c-0.4167,0 -0.7708,0.15 -1.0625,0.44c-0.2917,0.29 -0.4375,0.64 -0.4375,1.06c0,0.42 0.1458,0.77 0.4375,1.06c0.2917,0.29 0.6458,0.44 1.0625,0.44z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      title: "Trusted & Budget-Friendly",
      description: "AAVORide makes cab booking simple with affordable fares, professional drivers, easy online booking, and 24/7 customer support. Whether you need a local taxi service or outstation cab booking, enjoy a smooth and stress-free ride experience.",
      image: "/assets/images/trusted-cab.png",
      icon: (
        <svg viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-primary">
          <path id="Icon_9" d="M6.95,13.55l5.65,-5.65l-1.425,-1.43l-4.225,4.23l-2.1,-2.1l-1.425,1.42zM8,20c-2.3167,-0.58 -4.2292,-1.91 -5.7375,-3.99c-1.5083,-2.07 -2.2625,-4.38 -2.2625,-6.91v-6.1l8,-3l8,3v6.1c0,2.53 -0.7542,4.84 -2.2625,6.91c-1.5083,2.08 -3.4208,3.41 -5.7375,3.99z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      title: "Popular Routes & Travel",
      description: "Book affordable taxi services for popular travel routes including Delhi to Jaipur, Delhi to Dehradun, Mumbai to Pune, Ahmedabad to Udaipur, Chandigarh to Manali, Rishikesh trips, Agra tours, and many more destinations.",
      image: "/assets/images/popular-routes.png",
      icon: (
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-primary">
          <path id="Icon_10" d="M5.5,14.5l7,-2l2,-7l-7,2zM10,11.5c-0.4167,0 -0.7708,-0.15 -1.0625,-0.44c-0.2917,-0.29 -0.4375,-0.64 -0.4375,-1.06c0,-0.42 0.1458,-0.77 0.4375,-1.06c0.2917,-0.29 0.6458,-0.44 1.0625,-0.44c0.4167,0 0.7708,0.15 1.0625,0.44c0.2917,0.29 0.4375,0.64 0.4375,1.06c0,0.42 -0.1458,0.77 -0.4375,1.06c-0.2917,0.29 -0.6458,0.44 -1.0625,0.44zM10,20c-1.3833,0 -2.6833,-0.26 -3.9,-0.79c-1.2167,-0.52 -2.275,-1.23 -3.175,-2.13c-0.9,-0.9 -1.6125,-1.96 -2.1375,-3.18c-0.525,-1.22 -0.7875,-2.52 -0.7875,-3.9c0,-1.38 0.2625,-2.68 0.7875,-3.9c0.525,-1.22 1.2375,-2.28 2.1375,-3.18c0.9,-0.89 1.9583,-1.61 3.175,-2.13c1.2167,-0.53 2.5167,-0.79 3.9,-0.79c1.3833,0 2.6833,0.26 3.9,0.79c1.2167,0.52 2.275,1.24 3.175,2.13c0.9,0.9 1.6125,1.96 2.1375,3.18c0.525,1.22 0.7875,2.52 0.7875,3.9c0,1.38 -0.2625,2.68 -0.7875,3.9c-0.525,1.22 -1.2375,2.28 -2.1375,3.18c-0.9,0.9 -1.9583,1.61 -3.175,2.13c-1.2167,0.53 -2.5167,0.79 -3.9,0.79z" fill="currentColor"/>
        </svg>
      ),
    },
  ];

  // Cards fan in from bottom with alternating Y offsets
  const cardVariants = [
    { initial: { opacity: 0, y: 60, rotate: -3 }, delay: 0.2 },
    { initial: { opacity: 0, y: 80 }, delay: 0.34 },
    { initial: { opacity: 0, y: 60, rotate: 3 }, delay: 0.48 },
  ];

  return (
    <section ref={ref} id="services" className="relative w-full py-16 md:py-24 md:pb-46.5 bg-white overflow-hidden">
      <div className="md:w-142.5 w-78 h-78 md:h-142.5 bg-brand-primary md:bg-brand-primary/20 z-0 blur-[163px] absolute -left-70 md:left-auto md:-right-20 top-40 md:top-auto md:-bottom-20" />

      <div className="max-w-7xl relative z-10 mx-auto px-4 md:px-12">

        {/* Header — split: heading from left, para from right */}
        <div className="flex flex-col gap-6 text-left max-w-5xl mb-12 md:mb-16">
          <motion.h2
            className="text-[32px] md:text-5xl font-bold text-foreground leading-10 tracking-[0.32px]"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
          >
            Affordable Cab Booking & Outstation Taxi{" "}
            <span className="text-brand-primary block sm:inline">Services Across India</span>
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-muted-gray leading-7.5 font-normal max-w-3xl"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.18 }}
          >
            AAVORide provides reliable and affordable cab booking services for local rides, outstation travel, airport transfers, corporate trips, and holiday journeys across India. Travel comfortably with verified drivers, transparent pricing, and multiple vehicle options designed for every travel need.
          </motion.p>
        </div>

        {/* Cards — fan up with stagger + slight rotation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCards.map((card, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-5 p-5 rounded-2xl relative z-10 border border-card-border bg-white shadow-xs hover:shadow-md hover:scale-[1.01] transition-all duration-300"
              initial={cardVariants[index].initial}
              animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: cardVariants[index].delay }}
            >
              <div className="relative w-full h-55 overflow-hidden rounded-xl">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-primary/10 shrink-0">
                  {card.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground">{card.title}</h3>
              </div>
              <p className="text-sm md:text-base text-muted-gray leading-relaxed font-normal">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
