"use client";
import BodySection from "@/components/BodySection";
import HeroSection from "@/components/HeroSection";
import { useEffect, useRef } from "react";

const Home = () => {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const bodySectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroSection = heroSectionRef.current;
    const bodySection = bodySectionRef.current;

    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const syncScroll = (e: WheelEvent) => {
      e.preventDefault();
      if (bodySection) {
        bodySection.scrollTop += e.deltaY;
      }
    };

    const handleMediaChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        heroSection?.addEventListener("wheel", syncScroll, { passive: false });
      } else {
        heroSection?.removeEventListener("wheel", syncScroll);
      }
    };

    if (mediaQuery.matches) {
      heroSection?.addEventListener("wheel", syncScroll, { passive: false });
    }

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      heroSection?.removeEventListener("wheel", syncScroll);
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <div className="font-recoleta flex w-full max-w-[1728px] flex-col lg:flex-row">
      <div
        ref={heroSectionRef}
        className="lg:sticky lg:top-0 lg:h-screen lg:flex-none"
        style={{
          opacity: 1,
          transform: "translate(0px, 0px)",
          transition:
            "opacity 1s cubic-bezier(0.42, 0, 0.25, 1), transform 1s cubic-bezier(0.2, 1.18, 0.47, 1)",
        }}
      >
        <HeroSection />
      </div>
      <div ref={bodySectionRef} className="grow overflow-auto lg:h-screen">
        <BodySection />
      </div>
    </div>
  );
};

export default Home;
