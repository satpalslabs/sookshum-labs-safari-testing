"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
type props = {
  text: string;
  style: string;
  icon: boolean;
  link: string;
};

const PrimaryButton: React.FC<props> = ({ text, style, icon = true, link }) => {
  return (
    <>
      {link === "" ? (
        <div
          id="primary-button"
          className={`group text-white px-6 h-[55px] xs:flex xs:justify-center rounded-full xs:text-[13px] transition-all font-poppins font-medium relative w-fit lg:h-[48px] lg:px-5 lg:text-[13px] bg-primary hover:[backdrop-filter:blur(100px)] hover:bg-backgroundDarkPrimary  hover:border-borderDarkButton flex  duration-700 items-center z-[80] ${style} `}
          style={{
            boxShadow: "var(--dark-button-shadow)",
          }}
        >
          <div
            id="primary-button-content"
            className={`flex gap-2 items-center justify-center duration-1000 transition-all  ease-linear flex-nowrap`}
          >
            <div>{text}</div>
            {icon && (
              <Image
                src="/header/Top-Nav-button-arrow.svg"
                className="w-[10px] h-[10px] xs:w-2 xs:h-2"
                alt="top-arrow"
                height={200}
                width={200}
              />
            )}
          </div>
        </div>
      ) : (
        <Link
          href={link}
          target={link.includes("https") ? "_blank" : ""}
          id="primary-button"
          className={`group text-white px-6 h-[55px] xs:flex xs:justify-center rounded-full xs:text-[13px] transition-all font-poppins font-medium relative w-fit lg:h-[48px] lg:px-5 lg:text-[13px] bg-primary hover:[backdrop-filter:blur(100px)] hover:[background:var(--dark-border-primary-button)] hover:border-borderDarkButton  flex duration-700 items-center z-[100] ${style} `}
          style={{
            boxShadow: "var(--dark-button-shadow)",
          }}
        >
          <div
            id="primary-button-content"
            className={`flex gap-2 items-center justify-center duration-1000 transition-all  ease-linear flex-nowrap relative z-10`}
          >
            <div>{text}</div>
            {icon && (
              <Image
                src="/header/Top-Nav-button-arrow.svg"
                className="w-[10px] h-[10px] xs:w-2 xs:h-2"
                alt="top-arrow"
                height={200}
                width={200}
              />
            )}
          </div>
          {/* <div className="absolute group-hover:opacity-0 opacity-100 transition-all h-full w-full left-0 top-0 bg-primary duration-700 rounded-full"></div> */}
        </Link>
      )}
    </>
  );
};

export default PrimaryButton;
