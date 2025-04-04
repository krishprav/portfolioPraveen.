
import React from "react";
import Image from "next/image";
import { skillsData } from "@/data";
import { Button } from "./ui/MovingBorders";

const Skills = () => {
    return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">Skills</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {skillsData.map((category, index) => (
          <Button
            key={index}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col p-3 py-6 md:p-5 lg:p-10 gap-4">
              <h2 className="text-xl md:text-2xl font-bold text-center">
                {category.title}
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                    <span className="font-medium text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Skills;