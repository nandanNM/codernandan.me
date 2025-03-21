import Image from "next/image";
import computerAvater from "@/public/images/computerAvater.webp";
import twitterLogo from "@/public/svg/twitter.svg";
import linkedinLogo from "@/public/svg/linkedin.svg";
import freelanceImage from "@/public/images/freelance.webp";
import hashNode from "@/public/svg/hashnode.svg";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type SocialVariant = "twitter" | "linkedin" | "instagram" | "hashnode";
interface SocialCardProps {
  id: number;
  logo: string;
  altText: string;
  name: string;
  handle: string;
  link?: string;
  className?: string;
  label?: string;
  variant: SocialVariant;
}
const socialData: SocialCardProps[] = [
  {
    id: 1,
    logo: twitterLogo,
    altText: "Twitter",
    name: "X (Twitter)",
    handle: "@coder_nandan",
    link: "https://x.com/coder_nandan/",
    label: "Follow",
    className: "",
    variant: "twitter",
  },
  {
    id: 2,
    logo: linkedinLogo,
    altText: "LinkedIn",
    name: "Connect on LinkedIn",
    handle: "Let's connect professionally",
    link: "https://www.linkedin.com/in/codernandan/",
    label: "Connect",
    className: "bg-[#f1f6fa]",
    variant: "linkedin",
  },
  {
    id: 3,
    logo: hashNode,
    altText: "Hashnode",
    name: "Hashnode",
    handle: "hashnode.com",
    link: "https://coder-nandan.hashnode.dev/",
    label: "Read Blogs",
    className: "bg-[#aacafb]/20",
    variant: "hashnode",
  },
  // Add more social cards as needed
];
export default function SocialSection() {
  return (
    <section className="mb-4 pr-4">
      <div className="mb-2">
        <strong className="ml-3">👇 Find me here 🌍</strong>
      </div>
      <div className="grid grow grid-cols-1 gap-4 sm:grid-cols-3">
        <Card className="min:h-[159.5px] min:w-[159.5px] rounded-3xl border-inherit md:row-span-2">
          <div className="relative h-full w-full overflow-hidden p-4">
            <Image
              src={computerAvater}
              alt="Nandan Manna"
              className="h-full w-full object-contain"
            />
            <div className="absolute bottom-2 left-3 line-clamp-1 w-fit rounded-[10px] bg-white px-2 py-1.5 shadow-md">
              <p className="text-[12px] lg:text-sm">Get Easlos templates</p>
            </div>
          </div>
        </Card>

        <Card className="min:h-[159.5px] min:w-[159.5px] overflow-hidden rounded-3xl border-inherit">
          <div className="relative h-full w-full">
            <Image
              unoptimized
              src={freelanceImage}
              alt="freelanceImage"
              className="h-full w-full object-cover"
            />
          </div>
        </Card>
        {socialData.map((social, index) => (
          <SocialCard key={index} {...social} />
        ))}
      </div>
    </section>
  );
}

function SocialCard({
  logo,
  altText,
  name,
  handle,
  link,
  label,
  className,
  variant,
}: SocialCardProps) {
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
                src={logo}
                alt={altText}
                width={40}
                height={40}
                className="absolute inset-0 mb-2 rounded-[10px] object-cover align-middle"
              />
              <div className="shadow-[inset 0 0 0 1px rgba(0,0,0,.06)] pointer-events-none absolute inset-0 rounded-[inherit]" />
            </div>
          </div>
          <div className="mt-3 flex w-full shrink-1 grow-1 basis-0 flex-col">
            <p className="font-departureMono mt-0 line-clamp-1 overflow-hidden">
              {name}
            </p>
            <p className="font-departureMono line-clamp-1 overflow-hidden text-xs leading-4 text-[rgba(0,0,0,.6)]">
              {handle}
            </p>
          </div>
          {label && link && (
            <Link href={link} target="_blank">
              <Button
                className="mt-3 cursor-pointer rounded-full text-xs font-semibold"
                variant={variant}
                onClick={() => window.open(link, "_blank")}
              >
                {label}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}
