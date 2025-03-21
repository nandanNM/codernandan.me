import AboutSection from "./AboutSection";
import SocialSection from "./SocialSection";
import SkillsSection from "./SkillsSection";
import GitHubSection from "./GitHubSection";
import ProjectsSection from "./ProjectsSection";
import { BlurFade } from "./magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;
export default function BodySection() {
  return (
    <section className="max-w-5xl px-6 py-4 lg:mt-6 xl:mt-8">
      <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
        <AboutSection />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 3} inView>
        <SocialSection />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4} inView>
        <SkillsSection />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 5} inView>
        <GitHubSection />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 6} inView>
        <ProjectsSection />
      </BlurFade>

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-2"></section>
    </section>
  );
}
