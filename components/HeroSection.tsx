import HeroImage from "./HeroImage";

export default function HeroSection() {
  return (
    <main className="flex max-w-[428px] grow flex-col items-center gap-6 pl-0 sm:items-start sm:px-14 md:pl-20">
      <div className="mt-16">
        <HeroImage />
      </div>
      <h1 className="font-caveat text-4xl font-bold xl:text-5xl">
        Nandan Manna
      </h1>
      <ol className="list-inside text-center text-sm sm:text-left">
        <li className="mb-2">
          I work on all things
          {/* <RoughNotation
            type="highlight"
            color="#df8c4a"
            animationDelay={150}
            show
          >
            Software
          </RoughNotation>{" "} */}
          at <br className="block md:hidden" />
          IRIS Software
        </li>
        <li className="mb-2">Truly love working on Web</li>
      </ol>
    </main>
  );
}
