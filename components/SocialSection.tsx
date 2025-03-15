import React from "react";
import { Card } from "./ui/card";
import computerAvater from "@/public/gifs/computerAvater.gif";
import Image from "next/image";

export default function SocialSection() {
  return (
    <section className="mb-4 pr-4">
      <div className="mb-2">
        <strong className="ml-3">👇 Find me here 🌍</strong>
      </div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 md:grid-rows-3">
        <Card className="max-h-[331px] max-w-[331px] rounded-3xl border-inherit md:row-span-3">
          <div className="relative h-full w-full overflow-hidden p-4">
            <Image
              src={computerAvater}
              alt="Nandan Manna"
              className="h-full w-full object-contain"
            />
            <div className="absolute bottom-2 left-4 rounded-[10px] bg-white px-2 py-1.5 text-[14px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06)]">
              <p className="text-sm">Get Easlos templates below</p>
            </div>
          </div>
        </Card>
        <Card className="w-full rounded-xl border-inherit bg-[#ffb133]">
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-4">
            <p className="font-bold text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos odio
              eligendi
            </p>
          </div>
        </Card>
        <Card className="w-full rounded-xl border-inherit bg-[#ffb133]">
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-4">
            <p className="font-bold text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos odio
              eligendi
            </p>
          </div>
        </Card>
        <Card className="w-full rounded-xl border-inherit bg-[#ffb133]">
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-4">
            <p className="font-bold text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos odio
              eligendi
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
