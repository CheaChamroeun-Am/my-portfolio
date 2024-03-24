import React from "react";
import { FiFacebook, FiGithub, FiInstagram } from "react-icons/fi";

import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#151515]">
      <div className="flex flex-col items-center justify-center mx-auto p-10 text-center">
        <h1 className="text-4xl font-bold font-title text-center">
          <span className="text-firstColor">Am</span>{" "}
          <span
            className="text-white
        "
          >
            Cheachamroeun
          </span>
        </h1>
        <p className="text-white mt-8 text-center">
          Thank for checking up my web. Hope to see you and work with you. Thank
          You!
        </p>
        <div className="mt-10 flex flex-wrap gap-3 items-center justify-center">
          <a href="https://www.facebook.com/AmCheachamroeun" className="group">
            <div className="rounded-full bg-[#222] border-2 border-[#333] p-3 hover:border-firstColor group-hover:border-firstColor transition-all duration-500">
              <FiFacebook className="text-white text-3xl group-hover:text-firstColor transition-all duration-500" />
            </div>
          </a>
          <a href="https://www.facebook.com/AmCheachamroeun" className="group">
            <div className="rounded-full bg-[#222] border-2 border-[#333] p-3 hover:border-firstColor group-hover:border-firstColor transition-all duration-500">
              <FiInstagram className="text-white text-3xl group-hover:text-firstColor transition-all duration-500" />
            </div>
          </a>
          <a href="https://www.facebook.com/AmCheachamroeun" className="group">
            <div className="rounded-full bg-[#222] border-2 border-[#333] p-3 hover:border-firstColor group-hover:border-firstColor transition-all duration-500">
              <FaTwitterSquare className="text-white text-3xl group-hover:text-firstColor transition-all duration-500" />
            </div>
          </a>
          <a href="https://www.facebook.com/AmCheachamroeun" className="group">
            <div className="rounded-full bg-[#222] border-2 border-[#333] p-3 hover:border-firstColor group-hover:border-firstColor transition-all duration-500">
              <FiGithub className="text-white text-3xl group-hover:text-firstColor transition-all duration-500" />
            </div>
          </a>
          <a href="https://www.facebook.com/AmCheachamroeun" className="group">
            <div className="rounded-full bg-[#222] border-2 border-[#333] p-3 hover:border-firstColor group-hover:border-firstColor transition-all duration-500">
              <FaLinkedin className="text-white text-3xl group-hover:text-firstColor transition-all duration-500" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
