"use client";
/**
 * This file contains the process card of our development section.
 */

import dynamic from "next/dynamic";
import { dataItemType } from ".";
import Image from "next/image";
import { useRef, useState } from "react";
const TextContainer = dynamic(() => import("./text-container"));

const DevelopmentProcessCard: React.FC<{
  item: dataItemType;
  index: number;
  isInView: boolean;
}> = ({ item, index, isInView }) => {
  const [active, setActive] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  return (
    <div
      style={{
        gridColumn: `span ${item.cols} / span ${item.cols}`,
      }}
      className={`relative group z-0 cursor-pointer  sm:!col-span-1 overflow-hidden rounded-[32px] sm:rounded-[20px]  p-[1px] bg-viewportBorder transition-all hover:bg-gradient-to-br  hover:from-borderPrimary hover:via-transparent hover:to-borderPrimary duration-1000 ${
        isInView
          ? `bg-viewportBorder  grayscale-0 `
          : "bg-transparent grayscale"
      }
   ${index == 3 && "h-[394px] sm:h-auto"}`}
      onMouseEnter={() => {
        setShowVideo(true);
        setActive(true);
        videoRef.current?.play();
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
    >
      <div className="w-full h-full overflow-hidden rounded-[32px] bg-black sm:rounded-[20px] ">
        <div
          className={`flex gap-4 pb-8 sm:!col-span-1  lg:pb-6 ${
            index == 3 ? "flex-row text-center items-center " : "flex-col"
          } sm:flex-col sm:text-left h-full  bg-innerContainer rounded-[32px] justify-between lg:rounded-[20px] md:gap-3 sm:gap-3 transition-all duration-1000 cursor-pointer overflow-hidden `}
        >
          {/* <div
        className={`w-full h-[208px] `}
      > */}
          <div className={``}>
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
              loop={active}
              poster={item.image_url}
              playsInline
              preload="auto"
              className={`${
                index == 3
                  ? "xxl:h-[500px] h-[420px] min-w-[500px] lg:min-w-[400px] ml-0 lg:h-[350px] sm:h-[250px] "
                  : index == 0
                  ? "max-h-[420px] h-auto w-full object-cover lg:h-[280px] lg:scale-90 mx-auto xs:h-[350px] xs:scale-90 xs:-mt-[60px]"
                  : index < 3
                  ? "h-[350px] lg:h-[280px] w-full -z-[10]  "
                  : "w-full  h-[400px] mx-auto"
              }  object-cover `}
            >
              <source src={item.video_url} type="video/webm" />
            </video>
            {/* <Image
              src={item.image_url}
              height={400}
              width={400}
              alt="image"
              className={`${
                index == 3
                  ? "h-full w-fit mx-auto sm:w-full "
                  : "h-fit sm:h-full w-full"
              } object-cover `}
              blurDataURL="URL"
              placeholder="blur"
            /> */}
          </div>
          <TextContainer item={item} index={index} />
        </div>
      </div>
      <div className="absolute z-[999] bg-transparent transition-all duration-1000 top-0 left-0 w-full h-full group-hover:block group-hover:bg-gradientOnHover "></div>
    </div>
  );
};

export default DevelopmentProcessCard;
