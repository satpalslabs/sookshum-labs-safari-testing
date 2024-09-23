"use client";
/**
 * This component contains a carousal slider.
 */

import  { useState } from "react";
import dynamic from "next/dynamic";
import data from "../../data/index.json";
import { Swiper, SwiperSlide } from "swiper/react";


import { Grid, Navigation } from "swiper/modules";
const BlogPostCard = dynamic(() => import("./card"));
const ArrowButtons = dynamic(() => import("./arrow-buttons"));

export type blogType = {
  title: string;
  description: string;
  image: string;
  type: string;
};

type BlogPost = {
  cards: blogType[];
};
export default function Slider() {
  const [atStart, setAtStart] = useState<boolean>(true);
  const [atEnd, setAtEnd] = useState<boolean>(false);
  const handleSlideChange = (swiper: any) => {
    setAtStart(swiper.isBeginning);
    setAtEnd(swiper.isEnd);
  };
  return (
    <div className="text-[black] relative gap-5 w-full h-full cursor-grab">
      <Swiper
        slidesPerView={2}
        breakpoints={data.breakpoints}
        onSlideChange={handleSlideChange}
        navigation={{ nextEl: ".next-blog", prevEl: ".previous-blog" }}
        modules={[Grid, Navigation]}
        onReachBeginning={() => {
          setAtStart(true)
          setAtEnd(false)
        }}
        onReachEnd={() => {
          setAtEnd(true)
          setAtStart(false)

        }}
        className="!px-[81px] sm:!px-5 md:!px-[30px] lg:!px-10 2xs:!px-3 h-full"
      >
        {data.posts.map((blogPost: BlogPost, index: number) => (
          <SwiperSlide key={index} className="">
            {blogPost.cards.map((card: blogType, ind: number) => (
              <div key={ind} className={`${ind > 0 ? "mt-4 lg:mt-2 xs:mt-1" : "h-full"}`}>
                <BlogPostCard blogPost={card} index={ind} key={ind} />
              </div>
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
      <ArrowButtons atEnd={atEnd} atStart={atStart} />
    </div>
  );
}
