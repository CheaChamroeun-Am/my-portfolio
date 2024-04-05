"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

import { SiNextdotjs, SiVuetify } from "react-icons/si";
import { BiLogoVuejs, BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNuxt } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";

const SkillBar = ({ name, percentage, icon }: any) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ width: `${percentage}%` });
        } else {
          controls.start({ width: "0%" });
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, percentage]);

  return (
    <div className="mt-10">
      <div className="flex items-center mb-2">
        <div className="flex">
          <span className="font-medium mr-5">{name}</span>
          {icon}
        </div>
        <span className="w-3/4 text-right">{percentage}%</span>
      </div>
      <div className="h-3 bg-gray-300 rounded" ref={ref}>
        <motion.div
          className="h-full bg-skill rounded"
          initial={{ width: "0%" }}
          animate={controls}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const skill1 = [
    {
      name: "HTML",
      percentage: 80,
      icon: <SiNextdotjs className="text-2xl" />,
    },
    {
      name: "CSS",
      percentage: 75,
      icon: <BiLogoVuejs className="text-2xl" />,
    },
    {
      name: "Github / Gitlab",
      percentage: 60,
      icon: <FaGitAlt className="text-2xl" />,
    },
    {
      name: "Tailwind",
      percentage: 70,
      icon: <TbBrandNuxt className="text-2xl" />,
    },
    // {
    //   name: "Vuetify",
    //   percentage: 90,
    //   icon: <SiVuetify className="text-2xl" />,
    // },
    // {
    //   name: "Tailwind",
    //   percentage: 90,
    //   icon: <BiLogoTailwindCss className="text-2xl" />,
    // },
  ];

  const skill2 = [
    {
      name: "Vue Js",
      percentage: 70,
      icon: <SiNextdotjs className="text-2xl" />,
    },
    {
      name: "React Js",
      percentage: 70,
      icon: <BiLogoVuejs className="text-2xl" />,
    },
    {
      name: "Nuxt Js",
      percentage: 70,
      icon: <BiLogoReact className="text-2xl" />,
    },
    {
      name: "Next Js",
      percentage: 70,
      icon: <TbBrandNuxt className="text-2xl" />,
    },
    // {
    //   name: "Vuetify",
    //   percentage: 90,
    //   icon: <SiVuetify className="text-2xl" />,
    // },
    // {
    //   name: "Tailwind",
    //   percentage: 90,
    //   icon: <BiLogoTailwindCss className="text-2xl" />,
    // },
  ];

  return (
    <div id="skills">
      <div className="section">
        <div className="text-center">
          <p className="text-center" data-aos="fade-up">Why Choose Me</p>
          <div className="relative inline-block mt-5">
            <div data-aos="fade-up" className="bg-secondColor w-8 md:w-12 h-7 md:h-9 absolute bottom-2 md:bottom-3 right-0"></div>
            <h2 data-aos="fade-up" className="font-title mt-2 text-2xl font-bold leading-tight text-titleColor relative z-10 md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
              My Experise Area.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10 items-center">
          <div className="bg-bg_variant px-5 py-5 flex flex-col justify-center">
            {skill1.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                icon={skill.icon}
              />
            ))}
          </div>

          <div className="bg-bg_variant px-5 py-5 flex flex-col justify-center">
            <div className="bg-bg_variant px-5 py-5 flex flex-col justify-center">
              {skill2.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
