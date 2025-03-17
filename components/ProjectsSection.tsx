import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import Image1 from "@/public/images/image1.png";
import Avater from "@/public/images/nandan.webp";
export default function ProjectsSection() {
  return (
    <div className="mb-4 flex flex-1 flex-col items-start pr-4">
      <div className="mb-2">
        <strong className="ml-3">Projects 🛠 ↓ </strong>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="max:h-[380px] max:w-[380px] flex rounded-3xl p-5">
          <div className="flex flex-col items-start">
            <div className="flex max-h-full w-full max-w-full shrink-1 grow-1 basis-0 flex-col items-start">
              <div className="relative aspect-square h-10 w-10 min-w-10 overflow-hidden rounded-[10px] shadow-lg">
                <Image
                  className="block h-full w-full rounded-[inherit] object-cover align-middle"
                  src={Avater}
                  alt="Nandan Manna"
                ></Image>
                <div className="shadow-[inset 0 0 0 1px rgba(0,0,0,.06)] pointer-events-none absolute inset-0 rounded-[inherit]" />
                <div className="shadow-[inset 0 0 0 1px rgba(0,0,0,.06)] pointer-events-none absolute inset-0 rounded-[inherit]" />
              </div>
              <div className="mt-3 flex w-full flex-col">
                <div className="-webkit-line-clamp-2 -webkit-box-orient-vertical mt-0 line-clamp-1 overflow-hidden">
                  <p>Nandan Manna</p>
                </div>
                <div className="-webkit-line-clamp-1 -webkit-box-orient-vertical mt-1 line-clamp-3 text-sm leading-4">
                  <p>
                    nandan lorem Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Harum, unde quam! Eveniet, atque modi!
                    Sapiente qui nemo excepturi aliquid temporibus, culpa totam
                    numquam minus, voluptates aspernatur cumque in iusto nam.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative mt-2 flex aspect-[1.91] min-h-0 w-full flex-col rounded-[10px]">
              <Image
                className="h-full w-full rounded-[inherit] object-cover align-middle"
                src={Image1}
                alt="Nandan Manna"
              ></Image>
              <div className="shadow-[inset 0 0 0 1px rgba(0,0,0,.06)] pointer-events-none absolute inset-0 rounded-[inherit]" />
            </div>
          </div>
        </Card>
        <Card className="max:h-[380px] max:w-[380px] flex rounded-3xl p-5">
          <div className="flex flex-col items-start">
            <div className="flex max-h-full w-full max-w-full shrink-1 grow-1 basis-0 flex-col items-start">
              <div className="relative aspect-square h-10 w-10 min-w-10 overflow-hidden rounded-[10px] shadow-lg">
                <Image
                  className="block h-full w-full rounded-[inherit] object-cover align-middle"
                  src={Avater}
                  alt="Nandan Manna"
                ></Image>
                <div className="shadow-[inset 0 0 0 1px rgba(0,0,0,.06)] pointer-events-none absolute inset-0 rounded-[inherit]" />
                <div className="shadow-[inset 0 0 0 1px rgba(0,0,0,.06)] pointer-events-none absolute inset-0 rounded-[inherit]" />
              </div>
              <div className="mt-3 flex w-full flex-col">
                <div className="-webkit-line-clamp-2 -webkit-box-orient-vertical mt-0 line-clamp-1 overflow-hidden">
                  <p>Nandan Manna</p>
                </div>
                <div className="-webkit-line-clamp-1 -webkit-box-orient-vertical mt-1 line-clamp-3 text-sm leading-4">
                  <p>
                    nandan lorem Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Harum, unde quam! Eveniet, atque modi!
                    Sapiente qui nemo excepturi aliquid temporibus, culpa totam
                    numquam minus, voluptates aspernatur cumque in iusto nam.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative mt-2 flex aspect-[1.91] min-h-0 w-full flex-col rounded-[10px]">
              <Image
                className="h-full w-full rounded-[inherit] object-cover align-middle"
                src={Image1}
                alt="Nandan Manna"
              ></Image>
              <div className="shadow-[inset 0 0 0 1px rgba(0,0,0,.06)] pointer-events-none absolute inset-0 rounded-[inherit]" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
