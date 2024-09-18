"use client";
/**
 * This client component contains a slider.
 */

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import data from "../../data/index.json";
import { runSlider } from "./slider";
// Child components
const ProcessServiceCard = dynamic(() => import("./card"));
const ArrowButtons = dynamic(() => import("./arrow-buttons"));
export type ProcessServiceType = {
  title: string;
  description: string;
};
export default function Slider() {
  return (
    <div className="text-[black] max-w-full relative z-0 SliderContainer">
      <div className="flex flex-col gap-[80px] xs:gap-[30px] sm:gap-[50px] lg:gap-[60px] w-full justify-center">
        <div className="w-full Main ">
          <div className="w-fit relative">
            <div className="flex w-fit Slider transition-all ease-out duration-[0.5s] px-[80px] lg:px-[44px] sm:px-[30px] select-none	touch-pan-x">
              {data["process-services"].map(
                (industry: ProcessServiceType, index: number) => (
                  <ProcessServiceCard
                    industry={industry}
                    isLast={index == data["process-services"].length - 1}
                    index={index}
                    key={index}
                  />
                )
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-[7.64px] w-fit mx-auto sliderDots">
          {data["process-services"].map(
            (_: ProcessServiceType, index: number) => (
              <div
                className={`w-3 h-3 rounded-full bg-innerContainer cursor-pointer ${
                  index == 0 && "bg-primary"
                } `}
                onClick={() => {
                  runSlider(index);
                }}
                key={index}
              ></div>
            )
          )}
        </div>
      </div>
      <ArrowButtons />
    </div>
  );
}
