"use client";
/**
 * This client component contains a slider.
 */

import  { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// data
import benefits from "../../data/index.json";
import { useInView } from "@lib/use-in-view";

// Child components
const Benefit = dynamic(() => import("./card"));

export type benefit = {
  title: string;
  description: string;
};;

export default function Slider() {
  const [atStart, setAtStart] = useState<boolean>(true);
  const [atEnd, setAtEnd] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const handleSlideChange = (swiper: any) => {
    setAtStart(swiper.isBeginning);
    setAtEnd(swiper.isEnd);
  };
  return (
    <div ref={ref} className="text-[black] max-w-full relative">
      <Swiper
        slidesPerView={2.8}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          350:{ slidesPerView: 1.01 },
          400: { slidesPerView: 1.05 },
          550: { slidesPerView: 2 },
          639: { slidesPerView: 2, spaceBetween: 17 },
          770: { slidesPerView: 2.3 },
          1050: { slidesPerView: 3.01, spaceBetween: 20 },
          1500: { slidesPerView: 3.08, spaceBetween: 20 },
          1700: { slidesPerView: 3.4, spaceBetween: 30 },
        }}
        grabCursor={true}
        onSlideChange={handleSlideChange}
        className="!px-[81px] sm:!px-5 md:!px-[30px] lg:!px-10 2xs:!px-3"
      >
        {benefits.map((benefit: benefit, index: number) => (
          <SwiperSlide key={index} className="!h-auto">
            <Benefit data={benefit} isInView={isInView} index={index}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
