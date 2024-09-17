"use client";

import Link from "next/link";
import React, { useState } from "react";
type props = {
  text: string;
  style: string;
  icon: boolean;
  link: string;
};

const PrimaryButton: React.FC<props> = ({ text, style, icon = true, link }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    const maxMoveY = 4; // Maximum translation in any direction
    const maxMoveX = 5; // Maximum translation in any direction
    setMousePosition({
      x: clamp(x, -maxMoveX, maxMoveX),
      y: clamp(y, -maxMoveY, maxMoveY),
    });
  };
  return (
    <>
      {link == "" ? (
        <div
          id="primary-button"
          className={`text-white px-6 h-[55px] xs:flex xs:justify-center rounded-full xs:text-[13px] transition-all font-poppins font-medium bg-primary w-fit lg:h-[48px] lg:px-5 lg:text-[13px] flex items-center hover:scale-105 ${style} `}
          onMouseMove={(e: any) => handleMouseMove(e)}
          onMouseOut={() => {
            setMousePosition({ x: 0, y: 0 });
          }}
          style={{
            transform: `translate(${mousePosition.x / 3}px, ${
              mousePosition.y / 3
            }px)`,
            transition: "transform 0.2s  ease-linear", // Smooth the movement
          }}
        >
          <div
            id="primary-button-content"
            className={`flex gap-2 items-center justify-center duration-300 transition-all  ease-linear flex-nowrap`}
            style={{
              transform: `translate(${mousePosition.x / 2}px, ${
                mousePosition.y
              }px)`, // Apply translation to the outer button
            }}
          >
            <div>{text}</div>
            {icon && (
              <img
                src="/header/Top-Nav-button-arrow.svg"
                className="w-[10px] h-[10px] xs:w-2 xs:h-2"
                alt="top-arrow"
                height={100}
                width={100}
              />
            )}
          </div>
        </div>
      ) : (
        <Link
          href={link}
          target={link.includes("https") ? "_blank" : ""}
          id="primary-button"
          className={`text-white px-6 h-[55px] xs:flex xs:justify-center rounded-full xs:text-[13px] transition-all font-poppins font-medium bg-primary w-fit lg:h-[48px] lg:px-5 lg:text-[13px] flex items-center hover:scale-105 ${style} `}
          onMouseMove={(e: any) => handleMouseMove(e)}
          onMouseOut={() => {
            setMousePosition({ x: 0, y: 0 });
          }}
          style={{
            transform: `translate(${mousePosition.x / 3}px, ${
              mousePosition.y / 3
            }px)`,
            transition: "transform 0.2s  ease-linear", // Smooth the movement
          }}
        >
          <div
            id="primary-button-content"
            className={`flex gap-2 items-center justify-center duration-300 transition-all  ease-linear flex-nowrap`}
            style={{
              transform: `translate(${mousePosition.x / 2}px, ${
                mousePosition.y
              }px)`, // Apply translation to the outer button
            }}
          >
            <div>{text}</div>
            {icon && (
              <img
                src="/header/Top-Nav-button-arrow.svg"
                className="w-[10px] h-[10px] xs:w-2 xs:h-2"
                alt="top-arrow"
                height={100}
                width={100}
              />
            )}
          </div>
        </Link>
      )}
    </>
  );
};

export default PrimaryButton;

const clamp = (value: number, min: number, max: number) => {
  return Math.max(min, Math.min(value, max));
};
