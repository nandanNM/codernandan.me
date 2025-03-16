"use client";

import { Badge } from "@/components/ui/badge";
import { JSX, useState } from "react";
import { AiOutlineApi } from "react-icons/ai";
import { BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi";
import {
  FaAngular,
  FaGitAlt,
  FaJava,
  FaJenkins,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiJasmine,
  SiJest,
  SiMongodb,
  SiNextdotjs,
  SiNgrx,
  SiPagekit,
  SiRedux,
  SiStencil,
  SiTeamcity,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

interface Skill {
  name: string;
  icon: JSX.Element;
  color?: string;
}

export default function SkillsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skillsList: Skill[] = [
    { name: "Java", icon: <FaJava />, color: "#f89820" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#007ACC" },
    { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
    { name: "Angular", icon: <FaAngular />, color: "#DD0031" },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Spring Boot", icon: <BiLogoSpringBoot />, color: "#6DB33F" },
    { name: "React Native", icon: <TbBrandReactNative />, color: "#61DAFB" },
    { name: "NgRx", icon: <SiNgrx />, color: "#BA2BD2" },
    { name: "Redux toolkit", icon: <SiRedux />, color: "#764ABC" },
    { name: "RESTful APIs", icon: <AiOutlineApi />, color: "#009688" },
    { name: "Single SPA", icon: <SiPagekit />, color: "#FF5733" },
    { name: "Stencil", icon: <SiStencil />, color: "#4C4C4C" },
    { name: "Jasmine", icon: <SiJasmine />, color: "#8A4182" },
    { name: "Jest", icon: <SiJest />, color: "#C21325" },
    { name: "SQL", icon: <BiLogoPostgresql />, color: "#336791" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "Jenkins", icon: <FaJenkins />, color: "#D24939" },
    { name: "TeamCity", icon: <SiTeamcity /> },
  ];

  return (
    <section className="mb-8 flex flex-col items-start pr-4">
      <div className="mb-2">
        <strong className="ml-3">Skills 🧠 ↓ </strong>
      </div>
      <div className="flex flex-wrap gap-2">
        {skillsList.map((skill, index) => (
          <Badge
            key={index}
            variant={hoveredIndex === index ? "secondary" : "outline"}
            className="flex cursor-pointer items-center gap-2 rounded-full text-[16px] font-normal transition-all duration-300 hover:scale-120"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span
              style={{
                color: hoveredIndex === index ? skill.color : "inherit",
              }}
              className="transition-colors duration-300"
            >
              {skill.icon}
            </span>
            {skill.name}
          </Badge>
        ))}
      </div>
    </section>
  );
}
