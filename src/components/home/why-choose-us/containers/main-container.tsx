"use client";
/**
 * This file contains the text container of why choose us section.
 */
import { useRef, useState } from "react";
import data from "../data/index.json";
import { useInView } from "@lib/use-in-view";
import Card from "@components/basic-components/card";
import Image from "next/image";
import H4 from "@components/basic-components/headings/H4";
import Description from "@components/basic-components/description";
import CanvasAnimation from "@components/basic-components/canvas-animation";

export type dataItemType = {
  title: string;
  description: string;
  image_url: string;
  video_url: string;
  "animation-path": string;
  "frame-count": number;
  duration: number;
};

const MainContainer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className="w-full grid grid-cols-3 grid-rows-2 gap-5 sm:gap-3 xs:grid-cols-1 xs:grid-rows-6"
    >
      {data.map((item: dataItemType, index: number) => (
        <SingleCard key={index} data={item} isInView={isInView} />
      ))}
    </div>
  );
};

export default MainContainer;

const SingleCard: React.FC<{ isInView: boolean; data: dataItemType }> = ({
  isInView,
  data,
}) => {
  const [active, setActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="relative rotate-0 w-fit" ref={containerRef}>
      <Card
        style=" h-full p-8 pb-8 lg:p-7 sm:p-6 xs:p-5 justify-between gap-4 lg:gap-8 sm:gap-[60px] xs:gap-3"
        isInView={isInView}
      >
        {/* <video
          ref={videoRef}
          muted
          width="320"
          height="240"
          poster={data.image_url}
          loop={active}
          playsInline
          preload="auto"
          className={`w-[120px] h-auto lg:w-[80px] `} // Ensure the image covers the space correctly
        >
          <source src={data.video_url} type="video/webm" />
        </video> */}
        {/* <Image
          width={800}
          height={800}
          src={data.image_url}
          className="w-[120px] h-auto lg:w-[80px] "
          alt="image"
        /> */}
        <CanvasAnimation
          containerRef={containerRef}
          duration={data.duration}
          frameCount={data["frame-count"]}
          imageType="webp"
          width={data.title.includes("Team") && 1000}
          height={data.title.includes("Team") && 650}
          style="w-[120px] h-auto lg:w-[80px]"
          url={data["animation-path"]}
        />
        <div className="flex flex-col gap-5 lg:gap-3 sm:gap-2">
          <H4 style="!leading-[1.25]" text={data.title} />
          <Description
            children={null}
            classes="!text-lg lg:!text-sm sm:!text-xs w-full sm:!tracking-tight"
            text={data.description}
          />
        </div>
      </Card>
    </div>
  );
};
