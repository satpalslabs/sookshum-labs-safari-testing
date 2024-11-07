"use client";
/**
 * This component contains the work together section.
 */
import dynamic from "next/dynamic";
import OuterComponent from "../outer-component";

const TextContainer = dynamic(() => import("./containers/text-container"));
const ImageContainer = dynamic(() => import("./containers/image-container"));

export type dataItem = {
  id: string;
  description: string;
};

const WorkTogether: React.FC = () => (
  <OuterComponent>
    <div
      id="connect"
      className="flex justify-between xs:flex-col relative shadow-buttonInset bg-innerContainer rounded-[32px] sm:rounded-[20px] xs:pb-0 xs:gap-8 "
    >
      <TextContainer />
      <ImageContainer />
    </div>
  </OuterComponent>
);

export default WorkTogether;
