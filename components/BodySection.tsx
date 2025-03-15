import React from "react";
import AboutSection from "./AboutSection";
import SocialSection from "./SocialSection";
import SkillsSection from "./SkillsSection";
import GitHubSection from "./GitHubSection";

export default function BodySection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-4 lg:mt-6 xl:mt-8">
      <div className="m-0 justify-center px-1 text-[1.125rem] leading-[1.75rem] font-[600]">
        <p className="tracking-normal">
          ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––-------
        </p>
      </div>
      <AboutSection />
      <SocialSection />
      <SkillsSection />
      <GitHubSection />
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        {/* <SocialSection />
        <GallerySection /> */}
      </section>
    </section>
  );
}
