import HeroImage from "./HeroImage";
import { RoughNotation } from "react-rough-notation";
import { BlurFade } from "./magicui/blur-fade";
const BLUR_FADE_DELAY = 0.04;
export default function HeroSection() {
  return (
    <main className="flex grow flex-col items-center gap-6 pl-0 sm:items-start sm:px-14 md:pl-30 lg:mx-auto">
      <div className="mt-16">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <HeroImage />
        </BlurFade>
      </div>
      <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
        <h1 className="font-caveat text-4xl font-bold xl:text-5xl">
          <RoughNotation
            type="underline"
            strokeWidth={2}
            color="#df8c4a"
            animationDelay={2000}
            show
          >
            Nandan Manna
          </RoughNotation>
        </h1>
      </BlurFade>
      <ol className="list-inside text-center text-sm sm:text-left">
        <BlurFade delay={BLUR_FADE_DELAY * 3} inView>
          <li className="mb-2">
            👋 Say hello!
            <RoughNotation
              type="highlight"
              // color="#df8c4a"
              color="#f1e39a"
              animationDelay={2000}
              show
            >
              Software
            </RoughNotation>
            at <br className="block md:hidden" />
            IRIS Software
          </li>
          <li className="mb-2">Truly love working on Web</li>
        </BlurFade>
      </ol>
    </main>
  );
}
