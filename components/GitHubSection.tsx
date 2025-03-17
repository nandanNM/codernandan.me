import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import githubLogo from "@/public/svg/github.svg";
import Image from "next/image";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";

export default function GitHubSection() {
  return (
    <section className="mb-4 flex flex-col flex-wrap items-start pr-4">
      <div className="mb-2">
        <strong className="ml-3">Open Sorce ❤️ ↓</strong>
      </div>
      <Card className="w-full cursor-pointer rounded-3xl 2xl:w-fit">
        <CardHeader className="pb-6 text-sm">
          <div className="flex justify-between">
            <section>
              <Image
                src={githubLogo}
                alt="github"
                width={40}
                height={40}
                className="mb-2 rounded-[10px]"
              />
              Nandan Manna
            </section>
            <Link href={"https://github.com/nandanNM"} target="_blank">
              <Button
                className="font-caveat mt-4 cursor-pointer rounded-[10px] bg-[#000000] p-4 text-xl font-bold text-[#ffffff]"
                size="lg"
              >
                Follow On GitHub
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <GitHubCalendar
            username="nandanNM"
            colorScheme="light"
            blockSize={13}
          />
        </CardContent>
      </Card>
    </section>
  );
}
