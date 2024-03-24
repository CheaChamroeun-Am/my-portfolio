"use client"

import React from "react";
import "./style.css";
import { FaCodepen } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaBasketball } from "react-icons/fa6";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";

import { Slide, Fade } from "react-awesome-reveal";
import { BsArrowRightCircleFill } from "react-icons/bs";

const CardHover = () => {
  return (
    // <div className="grid grid-cols-4">
    //   <div className="animated_card2">
    //     <span>
    //       <FaCodepen />
    //     </span>
    //   </div>

    //   <div className="service-single mt-5">
    //     <div className="icon-box">
    //       <FaCodepen />
    //     </div>

    //     <h3>Web Design</h3>
    //     <p>
    //       {" "}
    //       I offer professional web design services to create visually appealing
    //       and user-friendly websites.
    //     </p>
    //   </div>

    // </div>
    <div className="section">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="shadow-lg p-5">
          <div className="relative">
            <img
              src="/camboshoe.png"
              alt=""
              className="w-full max-h-[350px] object-cover"
            />
            <div className=" absolute z-10 -bottom-5 right-10">
              <GoArrowUpRight 
                size={50}
                className="text-white bg-black p-2 hover:bg-firstColor cursor-pointer"
              />
            </div>
          </div>
          <div className="mt-5">
            <p className="text-xs">Website</p>
            <h3 className="font-bold text-xl mt-3 text-titlColor">
              Shoe Ecommerce Website
            </h3>
            <p className="mt-3">
              Project that you carry out in the design and structure of the
              layout, showing the design at the client's request
            </p>
          </div>

          <div className="mt-5 mb-10">
            <div className="flex items-center flex-wrap gap-3">
              <div className="flex gap-2 items-center flex-wrap text-sm">
                <FiGithub />
                <p>View</p>
              </div>

              <div className="flex gap-2 items-center flex-wrap text-sm">
                <FaBasketball />
                <p>View</p>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg bg-white p-2 text-white shadow-md ">
                <img
                  src="/camboshoe.png"
                  className="h-[280px] w-full rounded-lg object-cover"
                />

                {/* overlay section */}
                <div className="absolute left-0 top-[-100%] flex h-full w-full flex-col justify-between bg-black/60 p-4 opacity-0 duration-500 group-hover:top-[0] group-hover:opacity-100 group-hover:backdrop-blur-sm">
                  <div>
                    <Slide cascade>
                      <div className="flex flex-wrap justify-between">
                        <p className="text-sm">
                          Web Development{" "}
                          <span style={{ margin: "0 0.5em" }}>•</span>{" "}
                          test
                        </p>

                        <span>
                          <BsArrowRightCircleFill />
                        </span>
                      </div>
                      <h1 className="mt-5 text-2xl font-bold">test</h1>
                    </Slide>
                  </div>

                  <div className="text-white">
                    <Slide cascade>
                      <Fade cascade damping={0.03}>
                        <p className="overflow-wrap: break-word;">
                          test
                        </p>
                      </Fade>
                    </Slide>
                  </div>
                </div>

                
              </div>
      </div>
    </div>
  );
};

export default CardHover;
