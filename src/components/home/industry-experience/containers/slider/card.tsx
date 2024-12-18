/**
 * This component contains each card of slider.
 */

const Description = dynamic(
  () => import("@components/basic-components/description")
);

import Image from "next/image";
import { industryType } from ".";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import CanvasAnimation from "@components/basic-components/canvas-animation";
const Card = dynamic(() => import("@components/basic-components/card"), {
  ssr: false, // Optional: Disable server-side rendering for this component if needed
});
const Industry: React.FC<{
  industry: industryType;
  isInView: boolean;
}> = ({ industry, isInView }) => {
  const [active, setActive] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      // onMouseEnter={() => {
      //   setShowVideo(true);
      //   setActive(true);
      //   videoRef.current?.play();
      // }}
      // onMouseLeave={() => {
      //   setActive(false);
      // }}
      className="h-full"
      ref={containerRef}
    >
      <Card
        isInView={isInView}
        style="!h-full flex flex-col gap-4 lg:gap-3 sm:gap-2 !pb-0"
      >
        <CanvasAnimation
          containerRef={containerRef}
          frameCount={industry["frame-count"]}
          imageType="webp"
          duration={industry.duration}
          style="h-[179px] w-fit lg:h-[112px] pl-3 pb-2 pt-1 object-contain float-left sm:w-[100px]"
          url={industry["animation-images"]}
        />
        <div className="p-4 flex flex-col gap-[10px] xs:p-1 ">
          <div className="font-poppins text-[19px] leading-[1.4] md:text-base sm:text-sm font-medium text-white ">
            {industry.title}
          </div>
          <Description
            children={null}
            text={industry.description}
            classes="w-full !font-normal"
          />
          <ul className="flex flex-col gap-2 text-white list-disc pl-3 text-lg lg:text-sm xs:pl-4 font-poppins font-medium">
            {industry.points.map((point: string, index: any) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
};
export default Industry;
