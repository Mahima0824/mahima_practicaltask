"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const Footer: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.55, ease: "easeOut" as const, delay },
  });

  return (
    <footer ref={ref} className="relative w-full bg-footer-bg text-foreground overflow-hidden pt-15.5 pb-44 md:pb-32.5 border-t border-brand-primary/10">
      {/* Massive Background Watermark */}
      <div className="absolute left-1/2 -bottom-15 -translate-x-1/2 select-none pointer-events-none text-brand-primary/4 text-[150px] sm:text-[200px] md:text-[280px] font-black tracking-tight z-0 hidden md:block">
        AAVORide
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        {/* Brand Section */}
        <motion.div className="md:col-span-5 flex flex-col gap-6" {...fadeUp(0.1)}>
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl md:text-4xl font-black text-brand-primary tracking-tight">AAVORide</h2>
            <p className="text-xs text-foreground/60 font-semibold tracking-wide uppercase">
              Powered by AAVORide Premium Mobility.
            </p>
          </div>
          <p className="text-sm text-muted-gray leading-6.5 tracking-normal font-normal max-w-md">
            Book affordable cabs with transparent pricing, verified drivers, and smooth rides across India. From quick city trips to long-distance journeys, AAVORide makes every ride stress-free and budget-friendly.
          </p>
          {/* Social Links */}
          <div className="flex items-center gap-3 mt-2">
            {[
              {
                name: "Instagram",
                url: "#",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-brand-primary">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                )
              },
              {
                name: "X",
                url: "#",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-brand-primary">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                )
              },
              {
                name: "LinkedIn",
                url: "#",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-brand-primary">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                )
              },
              {
                name: "Facebook",
                url: "#",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-brand-primary">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-4h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                )
              },
              {
                name: "YouTube",
                url: "#",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-brand-primary">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                )
              }
            ].map((social, i) => (
              <motion.a
                key={social.name}
                href={social.url}
                aria-label={social.name}
                className="w-11 h-11 rounded-full border border-brand-primary/20 bg-white/70 backdrop-blur-xs flex items-center justify-center shadow-xs hover:border-brand-primary/40 hover:scale-105 active:scale-95 transition-all duration-200"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.35, ease: "easeOut", delay: 0.3 + i * 0.07 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div className="md:col-span-3 flex flex-col gap-6" {...fadeUp(0.2)}>
          <h3 className="text-lg font-bold text-foreground">Quick Links</h3>
          <ul className="flex flex-col gap-3">
            {["Home", "Our Services", "Become a Partner", "Blog", "FAQ"].map((link, i) => (
              <motion.li
                key={link}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 + i * 0.07 }}
              >
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="relative inline-block text-base text-muted-gray hover:text-brand-primary transition-colors duration-300 font-medium pb-0.5
                    after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                    after:h-0.5 after:w-0 after:rounded-full after:bg-brand-primary
                    after:transition-all after:duration-500 hover:after:w-full"
                >
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Us */}
        <motion.div className="md:col-span-4 flex flex-col gap-6" {...fadeUp(0.3)}>
          <h3 className="text-lg font-bold text-foreground">Contact Us</h3>
          <div className="flex flex-col gap-4">
            {/* Email Support */}
            <motion.div
              className="flex items-center gap-5 bg-white p-5 rounded-4xl border border-slate-100/50 shadow-[0_4px_24px_rgba(0,0,0,0.01)]"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-icon-bg shrink-0">
                <svg viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-4 text-brand-primary">
                  <path id="Icon_11" d="M2,16c-0.55,0 -1.0208,-0.2 -1.4125,-0.59c-0.3917,-0.39 -0.5875,-0.86 -0.5875,-1.41v-12c0,-0.55 0.1958,-1.02 0.5875,-1.41c0.3917,-0.39 0.8625,-0.59 1.4125,-0.59h16c0.55,0 1.0208,0.2 1.4125,0.59c0.3917,0.39 0.5875,0.86 0.5875,1.41v12c0,0.55 -0.1958,1.02 -0.5875,1.41c-0.3917,0.39 -0.8625,0.59 -1.4125,0.59zM10,9l8,-5v-2l-8,5l-8,-5v2z" fill="currentColor"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-contact-gray tracking-wider uppercase leading-none mb-1">EMAIL SUPPORT</span>
                <a href="mailto:support@aavoride.in" className="text-base font-bold text-foreground hover:text-brand-primary leading-tight">
                  support@aavoride.in
                </a>
              </div>
            </motion.div>

            {/* Headquarter */}
            <motion.div
              className="flex items-center gap-5 bg-white p-5 rounded-4xl border border-slate-100/50 shadow-[0_4px_24px_rgba(0,0,0,0.01)]"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.52 }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-icon-bg shrink-0">
                <svg viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-5 text-brand-primary">
                  <path id="Icon_12" d="M8,10c0.55,0 1.0208,-0.2 1.4125,-0.59c0.3917,-0.39 0.5875,-0.86 0.5875,-1.41c0,-0.55 -0.1958,-1.02 -0.5875,-1.41c-0.3917,-0.39 -0.5875,-0.59 -1.4125,-0.59c-0.55,0 -1.0208,0.2 -1.4125,0.59c-0.3917,0.39 -0.5875,0.86 -0.5875,1.41c0,0.55 0.1958,1.02 0.5875,1.41c0.3917,0.39 0.8625,0.59 1.4125,0.59zM8,20c-2.6833,-2.28 -4.6875,-4.4 -6.0125,-6.36c-1.325,-1.96 -1.9875,-3.77 -1.9875,-5.44c0,-2.5 0.8042,-4.49 2.4125,-5.98c1.6083,-1.48 3.4708,-2.22 5.5875,-2.22c2.1167,0 3.9792,0.74 5.5875,2.22c1.6083,1.49 2.4125,3.48 2.4125,5.98c0,1.67 -0.6625,3.48 -1.9875,5.44c-1.325,1.96 -3.3292,4.08 -6.0125,6.36z" fill="currentColor"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-contact-gray tracking-wider uppercase leading-none mb-1">HEADQUARTER</span>
                <span className="text-base font-bold text-foreground leading-tight">Ahmedabad, India</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Copyright and Links */}
      <motion.div
        className="relative z-10 border-t border-brand-primary/10 pt-8 max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
      >
        <div className="flex items-center gap-6 order-1 md:order-3">
          {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
            <a key={item} href="#" className="text-sm text-muted-gray hover:text-brand-primary transition-colors font-medium">
              {item}
            </a>
          ))}
        </div>

        <p className="text-sm text-muted-gray text-left order-2 md:order-1">
          © 2026 AAVORide Premium Mobility. All rights reserved. Driven by Excellence.
        </p>

        <div className="flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-slate-200/80 shadow-xs text-xs font-bold text-foreground uppercase order-3 md:order-2">
          <span className="w-2 h-2 rounded-full bg-brand-primary inline-block" />
          AAVORide
        </div>
      </motion.div>
    </footer>
  );
};
