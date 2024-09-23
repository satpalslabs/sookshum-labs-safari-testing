"use client";
/**
 * This file contains the slider.
 */

import  { useEffect, useRef } from "react";
import data from "../../data/index.json";
import Testimonials from "./card";
import { useInView } from "@lib/use-in-view";
import { slide } from "./slide";

export type ClientReview = {
  review: string;
  "client-details": {
    "client-photo": string;
    "client-name": string;
    "client-profession": string;
  };
};

export default function Slider() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  useEffect(() => {
    slide();
  }, []);
  return (
    <div className="max-w-full w-full h-full relative overflow-hidden">
      <div className="absolute xxl:w-[25%] w-[25%] lg:w-[250px] sm:w-[20%] lg:bottom-0 lg:h-[386px] h-full  left-0 bottom-0 z-10 bg-gradient-to-r from-black via-[#15151538] to-transparent"></div>
      <div
        id="testimonials-slider"
        ref={ref}
        className="relative pt-[81px] w-fit flex-nowrap transition-transform duration-[15s] ease-linear flex gap-5 sm:gap-[14px] sm:pb-8 py-[70px] sm:pt-0 bg-black overflow-visible px-0 xs:!py-[0px] justify-start"
      >
        {data.testimonials.map((testimonial: ClientReview, index: number) => (
          <Testimonials
            key={index}
            id={`testmonials-${index}`}
            review={testimonial}
            isInView={isInView}
          />
        ))}
      </div>
      <div className="absolute xxl:w-[25%] w-[25%] lg:w-[250px] sm:w-[20%] lg:bottom-0 lg:h-[386px] h-full right-0 bottom-0 bg-gradient-to-l from-black via-[#15151538] to-transparent z-10"></div>
    </div>
  );
}
