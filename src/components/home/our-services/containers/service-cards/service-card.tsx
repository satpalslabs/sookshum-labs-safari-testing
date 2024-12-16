/**
 * This file contains each service card of our-services section.
 */
"use client";

import { useRef, useState } from "react";
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
      className={`relative grow w-full sm:w-[48.98%] group z-0  overflow-hidden rounded-[32px] p-[1px] bg-viewportBorder transition-all hover:bg-gradient-to-br  hover:from-borderPrimary hover:via-transparent hover:to-borderPrimary duration-1000 ${
        isInView
          ? `bg-viewportBorder  grayscale-0 `
          : "bg-transparent grayscale"
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
      <div className="w-full h-full overflow-hidden rounded-[32px] bg-black">
        <div
          className={`flex flex-col gap-2 pb-8 min-h-fit lg:pb-6 bg-innerContainer  lg:rounded-[26px] sm:gap-3 shadow-buttonInset  border-none h-full w-full hover:border-borderPrimary overflow-hidden  xs:w-full `}
        >
          <div className="w-full xll:h-[136px] lg:h-[221px] sm:h-[261px] flex items-center justify-center xs:h-[239px] h-[334px] xxl:h-[354px] overflow-hidden relative">
            <video
              ref={videoRef}
              muted
              onEnded={() => {
                if (!active) {
                  setShowVideo(false);
                }
              }}
              width="320"
              height="240"
              poster={item.image_url}
              loop={active}
              playsInline
              preload="auto"
              className={`h-full w-full object-cover transition-all duration-700`} // Ensure the image covers the space correctly
            >
              <source src={item.video_url} type="video/webm" />
            </video>
            {/* <Image
              loading="eager"
              src={item.image_url}
              fill
              alt={"Service Image"} // Provide meaningful alt text
              className="object-cover" // Ensure the image covers the space correctly
            /> */}
          </div>
          <TextContainer item={item} />
        </div>
      </div>
      <div className="absolute z-20 bg-transparent transition-all duration-1000 top-0 left-0 w-full h-full group-hover:block bg-gradient-to-r group-hover:bg-gradientOnHover "></div>
    </div>
  );
};

export default ServiceCard;
