import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { CgWebsite } from "react-icons/cg";
import { FiGithub } from "react-icons/fi";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  avatar: string;
  techStack: string[];
  liveUrl: string;
  githubUrl?: string;
}
const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a responsive design, dark mode, and smooth animations.",
    image: "/images/freelance.webp",
    avatar: "/images/nandan.webp",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Shadcn UI"],
    liveUrl: "https://codernandan.in",
    githubUrl: "https://github.com/yourusername/portfolio",
  },
  {
    id: "2",
    title: "Another Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, unde quam! Eveniet, atque modi!",
    image: "/images/freelance.webp",
    avatar: "/images/nandan.webp",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://example.com",
  },
];
export default function ProjectsSection() {
  return (
    <div className="mb-4 flex flex-1 flex-col items-start pr-4">
      <div className="mb-2">
        <strong className="ml-3">Projects 🛠 ↓ </strong>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  id,
  title,
  description,
  image,
  avatar,
  techStack,
  liveUrl,
  githubUrl,
}: Project) {
  return (
    <Card
      key={id}
      className="max:h-[380px] max:w-[380px] flex flex-col items-start rounded-3xl p-4"
    >
      <div className="flex max-h-full w-full max-w-full shrink-1 basis-0 flex-col items-start md:grow-1">
        <div className="relative aspect-square h-10 w-10 min-w-10 overflow-hidden rounded-[10px] shadow-lg">
          <Image
            className="block h-full w-full rounded-[inherit] object-cover align-middle"
            src={avatar}
            alt={title}
            width={40}
            height={40}
          />
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-lg" />
        </div>
        <div className="mt-3 flex w-full flex-col">
          <div className="mt-0 line-clamp-1 overflow-hidden">
            <p>{title}</p>
          </div>
          <div className="mt-1 text-sm leading-4">
            <p className="line-clamp-3">{description}</p>
          </div>
        </div>
      </div>
      <div className="relative mt-2 flex flex-wrap gap-1">
        {techStack.map((tech) => (
          <Badge key={tech} className="w-fit rounded-2xl text-xs font-normal">
            {tech}
          </Badge>
        ))}
      </div>
      <div className="relative mt-2 flex aspect-[1.91] min-h-0 w-full flex-col rounded-[10px]">
        <Image
          className="h-full w-full rounded-[inherit] object-cover align-middle"
          src={image}
          alt={title}
          width={400}
          height={209}
        />
        <div className="shadow-lgpointer-events-none absolute inset-0 rounded-[inherit]" />
      </div>
      <div className="relative mt-2 flex flex-wrap gap-2">
        <Button size="sm" className="cursor-pointer rounded-md py-3" asChild>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <CgWebsite className="mr-2" /> Live Site
          </a>
        </Button>
        {githubUrl && (
          <Button
            size="sm"
            variant="outline"
            className="cursor-pointer rounded-md py-3"
            asChild
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <FiGithub className="mr-2" /> GitHub
            </a>
          </Button>
        )}
      </div>
    </Card>
  );
}
