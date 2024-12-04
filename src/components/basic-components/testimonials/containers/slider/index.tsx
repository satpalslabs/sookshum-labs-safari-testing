"use client";
/**
 * This file contains the slider.
 */

import { useEffect, useRef } from "react";
import data from "../../data/index.json";
import Testimonials from "./card";
import { useInView } from "@lib/use-in-view";

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
    // slide();
  }, []);
  return (
    <div
      className="max-w-full w-full h-full relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute xxl:w-[25%] w-[25%] lg:w-[250px] sm:w-[20%] lg:bottom-0 lg:h-[386px] h-full  left-0 bottom-0 z-10 bg-gradient-to-r from-black via-[#15151538] to-transparent"></div>
      <div className="pt-[81px] sm:pb-8 py-[70px] sm:pt-0  px-0 xs:py-[0px] w-full">
        <div className="flex gap-5 group">
          <SliderItems isInView={isInView} />
          <SliderItems isInView={isInView} />
        </div>
      </div>
      <div className="absolute xxl:w-[25%] w-[25%] lg:w-[250px] sm:w-[20%] lg:bottom-0 lg:h-[386px] h-full right-0 bottom-0 bg-gradient-to-l from-black via-[#15151538] to-transparent z-10"></div>
    </div>
  );
}

const SliderItems = ({ isInView }: { isInView: boolean }) => (
  <div
    id="testimonials-slider"
    className="relative bg-black overflow-visible w-fit flex-nowrap flex gap-5 sm:gap-[14px]  justify-start animate-testimonialSlider group-hover:[animation-play-state:paused]"
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
);
