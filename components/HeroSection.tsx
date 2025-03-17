import HeroImage from "./HeroImage";
import { RoughNotation } from "react-rough-notation";
export default function HeroSection() {
  return (
    <main className="flex grow flex-col items-center gap-6 pl-0 sm:items-start sm:px-14 md:pl-30 lg:mx-auto">
      <div className="mt-16">
        <HeroImage />
      </div>
      <h1 className="font-caveat text-4xl font-bold xl:text-5xl">
        <RoughNotation
          type="underline"
          strokeWidth={2}
          // color="#df8c4a"
          color="#df8c4a"
          animationDelay={150}
          show
        >
          Nandan Manna
        </RoughNotation>
      </h1>
      <ol className="list-inside text-center text-sm sm:text-left">
        <li className="mb-2">
          👋 Say hello!
          <RoughNotation
            type="highlight"
            // color="#df8c4a"
            color="#2196f3"
            animationDelay={150}
            show
          >
            Software
          </RoughNotation>
          at <br className="block md:hidden" />
          IRIS Software
        </li>
        <li className="mb-2">Truly love working on Web</li>
      </ol>
    </main>
  );
}
