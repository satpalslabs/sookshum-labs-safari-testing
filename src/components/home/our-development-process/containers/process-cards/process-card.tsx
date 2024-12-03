/**
 * This file contains the process card of our development section.
 */
"use client"

import dynamic from "next/dynamic";
import { dataItemType } from ".";
import Image from "next/image";
import { useState } from "react";
const TextContainer = dynamic(() => import("./text-container"));

const DevelopmentProcessCard: React.FC<{
  item: dataItemType;
  index: number;
  isInView: boolean;
}> = ({ item, index, isInView }) =>{
  const [active,setActive] =useState(false)
  const [showVideo,setShowVideo] =useState(false)
   return(
  <div
    style={{
      gridColumn: `span ${item.cols} / span ${item.cols}`,
    }}
    className={`flex relative gap-4 pb-8 sm:!col-span-1  lg:pb-6 ${
      index == 3 ? "flex-row text-center items-center h-[394px]" : "flex-col"
    } sm:flex-col sm:text-left shadow-buttonInset bg-innerContainer rounded-[32px] lg:rounded-[26px] md:gap-3 sm:gap-3 transition-all duration-1000 hover:bg-gradientOnHover  border border-transparent cursor-pointer hover:!border-borderPrimary overflow-hidden ${
      isInView
        ? `!border-viewportBorder  grayscale-0 ${showVideo ? "bg-gradientOnHover":""}`
        : "border-transparent grayscale"
    }
     `}
  onMouseEnter={()=>{
    setShowVideo(true)
    setActive(true)
  }}
  onMouseLeave={()=>{
    setActive(false)
  }}>
    {/* <div
        className={`w-full h-[208px] `}
      > */}
    <div
      className={`w-full  xll:h-[136px] lg:h-[221px] sm:h-[261px] xs:h-[239px] ${
        index == 3 ? "h-full" : "h-[208px] xxl:h-[300px]"
      } `}
    >
      <video
        poster={item.image_url}
        autoPlay={true}
        muted
        onEnded={()=>{
          setActive(false)
        }}
        loop={active}
        playsInline
        preload="metadata"
        className={`h-[200px] min-w-full object-cover 
         ${!showVideo ? "opacity-0":"opacity-100"} `}
      >
        <source
          src="/home/development-process/process-1.mp4"
          type="video/webm"
        />
      </video>
       <Image
        src={item.image_url}
        height={400}
        width={400}
        alt="image"
        className={`${
          index == 3
            ? "h-full w-fit mx-auto sm:w-full "
            : "h-fit sm:h-full w-full"
        } ${showVideo ? "opacity-0":"opacity-100"} object-cover `}
        blurDataURL="URL"
        placeholder="blur"
      />
    </div>
    <TextContainer item={item} index={index} />
  </div>
)};

export default DevelopmentProcessCard;
