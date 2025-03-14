import Image from "next/image";
import nandanImage from "@/public/images/nandan.webp";

export default function HeroImage() {
  return (
    <div className="group relative w-[120px] cursor-pointer xl:w-[184px]">
      <div
        style={{
          opacity: 0,
          transform: "translateY(20px) rotateZ(-10deg)",
          animation:
            "fadeInSlideRotate 1.2s cubic-bezier(0.42, 0, 0.25, 1) forwards",
        }}
        className="relative aspect-[1/1] overflow-hidden rounded-[9999px]"
      >
        <Image
          className="absolute top-0 left-0 h-full w-full object-cover"
          src={nandanImage}
          alt="Nandan Manna"
          width={250}
          height={250}
          priority
        />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0 rounded-[inherit] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]"></div>
      </div>
    </div>
  );
}
