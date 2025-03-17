import React from "react";
import { Card } from "./ui/card";
import computerAvater from "@/public/images/computerAvater.webp";
import Image from "next/image";
import { Button } from "./ui/button";
import twitterLogo from "@/public/svg/linkedin.svg";
import { cn } from "@/lib/utils";
import fimage from "@/public/images/tt.jpg";
export default function SocialSection() {
  return (
    <section className="mb-4 pr-4">
      <div className="mb-2">
        <strong className="ml-3">👇 Find me here 🌍</strong>
      </div>
      <div className="grid grow grid-cols-1 gap-4 sm:grid-cols-3">
        <SocialCard className="bg-[#f1f6fa]" />
        <SocialCard className="" />

        <Card className="min:h-[159.5px] min:w-[159.5px] rounded-3xl border-inherit md:row-span-2">
          <div className="relative h-full w-full overflow-hidden p-4">
            <Image
              src={computerAvater}
              alt="Nandan Manna"
              className="h-full w-full object-contain"
            />
            <div className="absolute bottom-2 left-4 line-clamp-1 w-fit rounded-[10px] bg-white px-2 py-1.5 shadow-md">
              <p className="text-[12px] lg:text-sm">Get Easlos templates</p>
            </div>
          </div>
        </Card>

        <Card className="min:h-[159.5px] min:w-[159.5px] overflow-hidden rounded-3xl border-inherit">
          <div className="relative h-full w-full">
            <Image
              src={fimage}
              alt="Nandan Manna"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-2 left-4 line-clamp-1 w-fit rounded-[10px] bg-white px-2 py-1.5 shadow-md">
              <p className="text-[12px] lg:text-sm">Get Easlos templates</p>
            </div>
          </div>
        </Card>
        {/* <SocialCard /> */}
        <SocialCard />
      </div>
    </section>
  );
}

function SocialCard({ className }: { className?: string }) {
  return (
    <Card
      className={cn(
        "min:h-[159.5px] min:w-[159.5px] flex rounded-3xl p-5",
        className,
      )}
    >
      <div className="flex h-full w-full">
        <div className="flex max-h-full w-full max-w-full shrink-1 grow-1 basis-0 flex-col items-start">
          <div className="flex items-start">
            <div className="relative aspect-square h-10 min-h-10 w-10 min-w-10 overflow-hidden rounded-[10px] shadow-lg">
              <Image
                src={twitterLogo}
                alt={"Twitar"}
                width={40}
                height={40}
                className="absolute inset-0 mb-2 rounded-[10px] object-cover align-middle"
              />
              <div className="shadow-[inset 0 0 0 1px rgba(0,0,0,.06)] pointer-events-none absolute inset-0 rounded-[inherit]" />
            </div>
          </div>
          <div className="mt-3 flex w-full shrink-1 grow-1 basis-0 flex-col">
            <p className="-webkit-line-clamp-1 -webkit-box-orient-vertical mt-0 line-clamp-1 overflow-hidden">
              Twitter
            </p>
            <p className="-webkit-line-clamp-1 -webkit-box-orient-vertical overflow-hidden text-xs leading-4 text-[rgba(0,0,0,.6)]">
              @codernandan
            </p>
          </div>
          <Button
            className="mt-3 cursor-pointer rounded-full text-xs font-semibold"
            variant="twitter"
          >
            Follow
          </Button>
        </div>
      </div>
    </Card>
  );
}
