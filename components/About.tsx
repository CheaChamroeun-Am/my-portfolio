"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import TabButton from "./TabButton";

import { FaRegCalendarAlt, FaRegFlag } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { GrLanguage } from "react-icons/gr";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="flex list-disc gap-10 pl-2">
        <div>
          <li>HTML</li>
          <li>CSS</li>
          <li>Vuetify</li>
        </div>
        <div>
          <li>Tailwind</li>
          <li>Vue Js</li>
          <li>React Js</li>
        </div>
        <div>
          <li>Nuxt Js</li>
          <li>Next Js</li>
        </div>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Tux Global Institute</li>
        <li>Kirirom Institute of Technology</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>Top 7 Cscup 2023</li>
        <li>Participate as a IT Support in Seagame 32nd</li>
      </ul>
    ),
  },
];

const About = () => {
  const cards = [
    {
      icon: <FaAward className="text-primary text-[30px]" />,
      title: "Experience",
      content: "3+ Years Working",
    },
    {
      icon: <FiUsers className="text-primary text-[30px]" />,
      title: "Clients",
      content: "3+ Years Working",
    },
    {
      icon: <VscFolderLibrary className="text-primary text-[30px]" />,
      title: "Projects",
      content: "3+ Years Working",
    },
  ];

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className=" bg-bodyColor py-20" id="about">
      <div className="section1">
        <div className="grid-col-1 grid gap-5 lg:grid-cols-2">
          <div className="relative">
            <Image
              src="/about-image1.png"
              alt="hero"
              width={500}
              height={500}
              className="mx-auto h-full w-[90%] lg:h-[600px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px]"
            />

            <div className="absolute bottom-0 right-[70px] translate-x-[50%] translate-y-[50%] transform md:bottom-[50px] md:right-[95px] lg:right-[110px]">
              <div className="relative flex items-center justify-center">
                <div className="absolute h-[120px] w-[120px] rounded-full bg-white md:h-[160px] md:w-[160px]"></div>

                <Image
                  src="/text-curved.png"
                  alt="front-end web developer"
                  width={180}
                  height={180}
                  className="slow-spin bg-cover] h-full max-h-[120px] w-full 
                  max-w-[120px] md:max-h-[180px] md:max-w-[180px]"
                />

                <Image
                  src="/developer-emoji.png"
                  alt="front-end web developer"
                  width={50}
                  height={50}
                  className="absolute h-full  max-h-[40px] w-full max-w-[40px] bg-cover md:left-[62px] md:top-[60px] md:max-h-[50px] md:max-w-[50px]"
                />
              </div>
            </div>
          </div>

          <div>
            <p>My intro</p>

            <div className="relative inline-block">
              <div className="bg-[#eeb1be] w-8 md:w-14 h-7 md:h-10 absolute bottom-2 md:bottom-3 right-0"></div>
              <h2 className="font-title text-titleColor mt-2 text-2xl font-bold leading-tight relative z-10 md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
                About Me.
              </h2>
            </div>

            {/* <div className="mt-8 flex gap-2 md:gap-4">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="card-title mx-auto flex h-auto cursor-default flex-col items-center justify-center
                  rounded-xl border bg-white px-5 py-5 shadow-md md:w-48 lg:w-full xl:w-48"
                >
                  {card.icon}
                  <h5 className="card-icon mt-4 text-center text-[0.95rem] font-medium">
                    {card.title}
                  </h5>
                  <p className="card-text text-light mt-4 text-center text-[0.7rem] text-sm">
                    {card.content}
                  </p>
                </div>
              ))}
            </div> */}

            {/* <p className="text-3xl font-bold text-titlColor mt-8">
              I'm Am Cheachamroeun
            </p>
            <div className="border-b-4 border-b-firstColor w-[7%]"></div> */}

            <p className="mt-8">
              As a web developer with a passion for creating innovative and
              impactful solutions, I am constantly seeking new challenges and
              opportunities to grow and learn. My journey as a developer began
              in 2016 when I enrolled in a Diploma program at Hun Sen Oreang Ov
              High School. From there, I continued my education at ITC and later
              KIT, where I focused on learning Django and React.
            </p>

            <p className="mt-5">
              My dedication and hard work paid off when I won the CS CUP
              Cambodia (Computer Science CUP) by earning the top rank. This
              achievement was a major milestone for me and a testament to my
              abilities as a developer.
            </p>

            <p className="mt-5">
              In addition to my technical skills, I am also a strong
              problem-solver and team player. I am always looking for ways to
              collaborate and contribute to projects, and I am confident that my
              expertise and enthusiasm will make me a valuable asset to any
              team.
            </p>

            {/* <div className="mt-8 flex flex-row justify-start">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("experiences")}
                active={tab === "experiences"}
              >
                {" "}
                Experience{" "}
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab)
                ? TAB_DATA.find((t) => t.id === tab)!.content
                : "No content found"}
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
              <div className="flex gap-3 items-center">
                <FaRegCalendarAlt className="text-firstColor text-xl" />
                <p>
                  <span className="font-bold">Date of birth:</span>{" "}
                  <span>08 July 2003</span>
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <FaRegFlag className="text-firstColor text-xl" />
                <p>
                  <span className="font-bold">Nationality:</span>{" "}
                  <span>Khmer</span>
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <SiFreelancer className="text-firstColor text-xl" />
                <p>
                  <span className="font-bold">Freelance:</span>{" "}
                  <span>Available</span>
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <FiPhoneCall className="text-firstColor text-xl" />
                <p>
                  <span className="font-bold">Phone:</span>{" "}
                  <span>+855 78 22 06 98</span>
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <IoLocationOutline className="text-firstColor text-xl" />
                <p>
                  <span className="font-bold">Address:</span>{" "}
                  <span> Phnom Penh, Cambodia</span>
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <TfiEmail className="text-firstColor text-xl" />
                <p>
                  <span className="font-bold">Email:</span>{" "}
                  <span>amcheachamroeun20@kit.edu.kh</span>
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <GrLanguage className="text-firstColor text-xl" />
                <p>
                  <span className="font-bold">Spoken Langages:</span>{" "}
                  <span>Khmer-English</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
