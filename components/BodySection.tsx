import React from "react";
import AboutSection from "./AboutSection";

export default function BodySection() {
  return (
    <section className="px-6 py-4 lg:mt-8 xl:mt-10">
      <AboutSection />
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        {/* <SocialSection />
        <GallerySection /> */}
      </section>
    </section>
  );
}
