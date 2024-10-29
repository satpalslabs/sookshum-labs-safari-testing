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
const Industry = dynamic(() => import("./card"));
const ArrowButtons = dynamic(() => import("./arrow-buttons"));

export type industryType = {
  title: string;
  description: string;
  image: string;
};

export default function Slider() {
  const [atStart, setAtStart] = useState<boolean>(true);
  const [atEnd, setAtEnd] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const swiperContainerRef = useRef<any>(null);
  const isInView = useInView(ref);

  const handleSlideChange = (swiper: any) => {
    setAtStart(swiper.isBeginning);
    setAtEnd(swiper.isEnd);
  };

  return (
    <div ref={ref} className="text-[black] max-w-full  relative ">
      <Swiper
        ref={swiperContainerRef}
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
        onSlideChange={handleSlideChange}
        modules={[Navigation]}
        className="!px-[160px] lg:!px-[90px] !overflow-visible sm:!px-[60px] 2xs:!px-3"
      >
        {data.industries.map((industry: industryType, index: number) => (
          <SwiperSlide key={index} className="!h-auto">
            <Industry industry={industry} isInView={isInView} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ArrowButtons
        swiperContainerRef={swiperContainerRef}
        atEnd={atEnd}
        atStart={atStart}
      />
    </div>
  );
}
