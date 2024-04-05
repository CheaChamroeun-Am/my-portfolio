"use client";
import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { Link, animateScroll as scroll } from "react-scroll";
import Button from "./Button";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const Hero = () => {
  const socials = [
    {
      href: "https://www.facebook.com/profile.php?id=100064521276429",
      icon: <AiFillFacebook className=" text-2xl" />,
    },
    {
      href: "https://www.instagram.com/chamroeun_0807/",
      icon: <AiFillInstagram className=" text-2xl" />,
    },
    {
      href: "https://twitter.com/ACheachamroeun",
      icon: <AiFillTwitterCircle className="text-2xl" />,
    },
    {
      href: "https://github.com/CheaChamroeun-Am",
      icon: <AiFillGithub className="text-2xl" />,
    },
    {
      href: "https://www.linkedin.com/in/am-cheachamroeun-430406234/",
      icon: <AiFillLinkedin className=" text-2xl" />,
    },
  ];

  const handleType = (count: any) => {
    // console.log(count);
  };

  const handleDone = () => {};

  return (
    <div className="bg-hero-dark bg-[url('/bg-hero.jpg')] w-full h-full bg-cover">
      <div
        className="section1 flex h-full md:h-[100vh] py-10 items-center justify-center "
        id="home"
      >
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 ">
          <div className="order-last lg:order-first">
            <h1 data-aos="fade-up" className="text-3xl font-bold md:text-4xl lg:text-4xl xl:text-5xl text-titleColor">
              Hi, I am
            </h1>
            <h1 data-aos="fade-up" className="mt-2 break-words text-3xl font-bold md:text-4xl lg:text-4xl xl:text-5xl text-titleColor">
              Am Cheachamroeun
            </h1>
            <h2 className="mt-5 text-2xl font-bold md:text-3xl text-titleColor" data-aos="fade-up">
              <Typewriter
                words={["Frontend Developer"]}
                loop={0}
                cursor
                // cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </h2>
            <p className="mt-5" data-aos="fade-up">
              Thank you for stopping by my portfolio website! I appreciate your
              interest in getting to know more about my professional journey and
              the work I do as a web developer. This site is a comprehensive
              showcase of my skills, experiences, and the projects I've
              undertaken, demonstrating the practical application of my
              abilities in addressing real-world challenges. I invite you to
              explore the content, and should you have any inquiries or wish to
              discuss my work further, please feel free to reach out to me.
              Enjoy your visit!
            </p>

            <div className="mt-5 flex flex-wrap gap-5" data-aos="fade-up">
              {socials.map((social) => (
                <a href={social.href} target="_blank" key={social.href}>
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="mt-10 flex gap-5" data-aos="fade-up">
              <button className="rounded-md text-textContrast bg-blackColor px-5 py-2 md:px-7 md:py-3">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={300}
                  className="cursor-pointer transition-all duration-500 hover:text-primary2"
                >
                  Hire Me
                </Link>
              </button>
              
              <a href="/Am-Cheachamroeun-Resume.pdf" download>
                <button className="rounded-md border border-buttonColor px-5 py-2 text-titleColor transition-colors duration-500 hover:bg-buttonColor hover:text-white md:px-7 md:py-3  ">
                  Download CV
                </button>
              </a>
            </div>
          </div>
          <div className="order-first lg:order-last" data-aos="fade-up">
            <Image
              src="/profile1.png"
              alt="hero"
              width={400}
              height={400}
              className="mx-auto rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
