"use client";

import { Badge } from "@/components/ui/badge";
import { JSX, useState } from "react";
import { AiOutlineApi } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiTeamcity,
  SiTypescript,
  SiReactquery,
  SiReactrouter,
  SiPostman,
  SiPython,
  SiJavascript,
  SiPrisma,
  SiDrizzle,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: JSX.Element;
  color?: string;
}

export default function SkillsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skillsList: Skill[] = [
    { name: "Java Script", icon: <SiJavascript />, color: "#f7df1d" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#007ACC" },
    { name: "Python", icon: <SiPython />, color: "#3776AB" },
    { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Prisma", icon: <SiPrisma /> },
    { name: "Drizzle", icon: <SiDrizzle />, color: "#c6f74e" },
    { name: "Redux toolkit", icon: <SiRedux />, color: "#764ABC" },
    { name: "React Query ", icon: <SiReactquery />, color: "#fe4153" },
    { name: "React Router", icon: <SiReactrouter />, color: "#f94f4f" },
    { name: "RESTful APIs", icon: <AiOutlineApi />, color: "#009688" },
    { name: "SQL", icon: <BiLogoPostgresql />, color: "#336791" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "TeamCity", icon: <SiTeamcity /> },
    { name: "Postman", icon: <SiPostman />, color: "#ff6c38" },
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
            className="hover:bg-muted hover:text-muted-foreground flex cursor-pointer items-center gap-2 rounded-full text-[16px] font-normal transition-all duration-300 hover:scale-110"
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
