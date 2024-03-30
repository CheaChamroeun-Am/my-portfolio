import React from "react";
import "./style.css";
import Link from "next/link";

interface ButtonProps {
  title: string;
  link?: string;
}

const Button = ({ title, link }: ButtonProps) => {
  return (
    // <div>
    //   {link ? (
    //     <Link href={link}>
    //       <button classNameNameName="block text-center relative w-[180px] h-[50px] border border-gray-500 rounded-md custom-button">
    //         <span>{title}</span>
    //       </button>
    //     </Link>
    //   ) : (
    //     <button classNameNameName="block text-center relative w-[180px] h-[50px] border border-gray-500 rounded-md custom-button">
    //       <span>{title}</span>
    //     </button>
    //   )}
    // </div>

    <div className="relative">
      {link ? (
        <Link href={link}>
          <div className="center">
            <button className="btn rounded-md">
              <svg
                width="180px"
                height="60px"
                viewBox="0 0 180 60"
                className="border custom-svg"
              >
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  className="bg-line"
                />
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  className="hl-line"
                />
              </svg>
              <span className="custom-text-button">{title}</span>
            </button>
          </div>
        </Link>
      ) : (
        <div className="center">
          <button className="btn rounded-md">
            <svg
              width="180px"
              height="60px"
              viewBox="0 0 180 60"
              className="border custom-svg"
            >
              <polyline
                points="179,1 179,59 1,59 1,1 179,1"
                className="bg-line"
              />
              <polyline
                points="179,1 179,59 1,59 1,1 179,1"
                className="hl-line"
              />
            </svg>
            <span className="custom-text-button">{title}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Button;
