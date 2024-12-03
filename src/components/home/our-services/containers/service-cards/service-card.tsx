/**
 * This file contains each service card of our-services section.
 */
"use client";

import { useEffect, useRef, useState } from "react";
import { dataItemType } from ".";
import dynamic from "next/dynamic";
import Image from "next/image";

const TextContainer = dynamic(() => import("./text-container"));

const ServiceCard = ({
  item,
  isInView,
}: {
  item: dataItemType;
  isInView: boolean;
}) => {
  const [active, setActive] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  return (
    <div
      className={`group flex flex-col gap-2 pb-8 min-h-fit lg:pb-6 bg-innerContainer rounded-[32px] lg:rounded-[26px] sm:gap-3 shadow-buttonInset transition-all duration-1000 hover:bg-gradientOnHover border border-transparent cursor-pointer hover:!border-borderPrimary overflow-hidden sm:w-[48.98%] xs:w-full ${
        isInView
          ? `!border-viewportBorder  grayscale-0 ${
              showVideo ? "bg-gradientOnHover" : ""
            }`
          : "border-transparent grayscale"
      }`}
      onMouseEnter={() => {
        setShowVideo(true);
        setActive(true);
        videoRef.current?.play();
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
    >
      <div className="w-full xll:h-[136px] lg:h-[221px] sm:h-[261px] flex items-center justify-center xs:h-[239px] h-[334px] xxl:h-[354px] overflow-hidden relative">
        <video
          ref={videoRef}
          poster={item.image_url}
          autoPlay={true}
          muted
          onEnded={() => {
            if (!active) {
              setShowVideo(false);
            }
          }}
          loop={active}
          playsInline
          preload="metadata"
          className={`h-full w-full object-cover 
            ${
              !showVideo ? "opacity-0" : "opacity-100"
            } transition-all duration-700`} // Ensure the image covers the space correctly
        >
          <source src={item.video_url} type="video/webm" />
        </video>
        <Image
          loading="eager"
          src={item.image_url}
          fill
          alt={"Service Image"} // Provide meaningful alt text
          className={`${
            showVideo ? "opacity-0" : "opacity-100"
          }  transition-all duration-700 object-cover `} // Ensure the image covers the space correctly
        />
      </div>
      <TextContainer item={item} showVideo={showVideo}/>
    </div>
  );
};

export default ServiceCard;
