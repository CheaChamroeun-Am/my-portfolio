"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Slide, Fade } from "react-awesome-reveal";
import { BsArrowRightCircleFill } from "react-icons/bs";

import { projectType, projects } from "@/data/project";

import { FiGithub } from "react-icons/fi";
import { FaBasketball } from "react-icons/fa6";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";
import { useTheme } from "next-themes";

const Project = () => {
  const [portfolioList, setPortfolioList] = useState<projectType[]>([]);
  const [portfolioListOrg, setPortfolioListOrg] = useState<projectType[]>([]);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setPortfolioList(projects);
    setPortfolioListOrg(projects);
  }, []);

  const filterPortfolio = (type: any) => {
    // Reset the animation state to 'hidden'
    if (type === "All") {
      setPortfolioList([]);
      setTimeout(() => {
        setPortfolioList(portfolioListOrg);
      }, 0);
    } else {
      const result = portfolioListOrg.filter((item) => item.type === type);
      setPortfolioList([]);
      setTimeout(() => {
        setPortfolioList(result);
      }, 0);
    }
  };

  return (
    <div id="projects" className="mt-40 bg-bodyColor py-20">
      <div className="section1 ">
        <div className="text-center">
          <p className="text-center">Recently Work</p>
          <div className="relative inline-block mt-5">
            <div className="bg-secondColor w-8 md:w-12 h-7 md:h-9 absolute bottom-2 md:bottom-3 right-0"></div>
            <h2 className="font-title mt-2 text-2xl font-bold leading-tight text-titleColor relative z-10 md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
              Project.
            </h2>
          </div>
        </div>

        <div className="mt-10 flex flex-row flex-wrap justify-center  gap-10 px-4">
          <button
            onClick={() => filterPortfolio("All")}
            className={`text-project rounded-md 
            border-2 border-blackColor p-1
            px-6 text-titleColor focus:bg-primary3 focus:text-[#e5345b]
            focus:ring focus:ring-white active:bg-primary3 `}
          >
            All
          </button>
          <button
            onClick={() => filterPortfolio("vuejs")}
            className={`text-project rounded-md 
            border-2 border-blackColor p-1
            px-4 text-titleColor focus:bg-primary3 focus:text-[#e5345b]
            focus:ring focus:ring-white active:bg-primary3 `}
          >
            Vue Js / Nuxt js
          </button>
          <button
            onClick={() => filterPortfolio("reactjs")}
            className={`text-project rounded-md 
            border-2 border-blackColor p-1
            px-4 text-titleColor focus:bg-primary3 focus:text-[#e5345b]
            focus:ring focus:ring-white active:bg-primary3`}
          >
            React Js / Next Js
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 content-center items-center gap-5 md:grid-cols-2 lg:grid-cols-3 ">
          {portfolioList.map((item, index) => (
            <div key={item.id}>
              <div
                className={`w-full h-[600px] shadow-lg p-5 group hover:bg-cardHover transition duration-500 ${
                  theme === "dark"
                    ? "hover:bg-cardHover2"
                    : "hover:bg-cardHover"
                }`}
              >
                <div className="relative">
                  <img
                    src={item.imageUrl}
                    alt="poster"
                    className="w-full h-[350px] object-cover"
                  />
                  <Link href={`/project/${item.id}`}>
                    <div className=" absolute z-10 -bottom-5 right-10">
                      <GoArrowUpRight
                        size={50}
                        className="text-white bg-item p-2 hover:bg-firstColor cursor-pointer transition duration-500"
                      />
                    </div>
                  </Link>
                </div>
                <div className="mt-5">
                  <div className="flex items-center w-[100px]">
                    <div className="flex-grow border-t border-gray-400 mr-2"></div>
                    <span className="text-sm font-semibold text-gray-600">
                      Website
                    </span>
                  </div>
                  <h3 className="font-bold text-xl mt-3 text-titlColor">
                    {item.title}
                  </h3>
                  <p className="mt-3">
                    {item.short_desc} <span>...</span>
                  </p>
                </div>

                <div className="mt-5 mb-10">
                  <div className="flex items-center flex-wrap gap-3">
                    <Link href="/github/view">
                      <div className="flex gap-2 items-center flex-wrap cursor-pointer text-sm hover:text-firstColor transition duration-300">
                        <FiGithub />

                        <p>View</p>
                      </div>
                    </Link>

                    <Link href={`/project/${item.id}`}>
                      <div className="flex gap-2 items-center flex-wrap text-sm hover:text-firstColor transition duration-300">
                        <FaBasketball />

                        <p>View</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
