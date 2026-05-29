"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { MissionSection } from "@/components/sections/MissionSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { Footer } from "@/components/layout/Footer";
import { PageLoader } from "@/components/ui/PageLoader";

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <>
      {isLoading && <PageLoader onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <div className="flex flex-col min-h-screen bg-white">
          {/* Universal Navigation */}
          <Navbar />

          {/* Main Sections */}
          <main className="flex-1">
            <HeroSection />
            <PhilosophySection />
            <MissionSection />
            <VisionSection />
            <ServicesSection />
          </main>

          {/* Footer System */}
          <Footer />
        </div>
      )}
    </>
  );
}
