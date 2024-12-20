"use client";
/**
 * This client component contains a slider.
 */

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// data
import data from "../../data/index.json";
import { useInView } from "@lib/use-in-view";

// Child components
const BenefitCard = dynamic(() => import("./card"));

export type BenefitType = {
  title: string;
  description: string;
  image: string;
};

export default function Slider() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="text-[black] max-w-full  relative ">
      <Swiper
        slidesPerView={2.8}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          350: { slidesPerView: 1.2 },
          400: { slidesPerView: 1.2 },
          550: { slidesPerView: 2 },
          639: { slidesPerView: 2.3, spaceBetween: 17 },
          1050: { slidesPerView: 2.8, spaceBetween: 20 },
          1500: { slidesPerView: 3.0, spaceBetween: 20 },
          1700: { slidesPerView: 3.5, spaceBetween: 30 },
        }}
        grabCursor={true}
        modules={[Navigation]}
        className="!px-[160px] lg:!px-[90px] !overflow-visible sm:!px-[60px] 2xs:!px-3"
      >
        {data.map((benfit: BenefitType, index: number) => (
          <SwiperSlide key={index} className="!h-auto">
            <BenefitCard benfit={benfit} isInView={isInView} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
