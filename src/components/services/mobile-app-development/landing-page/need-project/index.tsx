"use client";
import OuterComponent from "@components/basic-components/outer-component";
/**
 * This component contains the work together section.
 */
import dynamic from "next/dynamic";

const TextContainer = dynamic(() => import("./containers/text-container"));
const ImageContainer = dynamic(() => import("./containers/image-container"));

export type dataItem = {
  id: string;
  description: string;
};

const LetsConnect: React.FC = () => (
  <div id="connect">
    <OuterComponent>
      <div className="flex xs:flex-col relative shadow-buttonInset bg-innerContainer rounded-[32px] sm:rounded-[20px] xs:pb-8 xs:gap-8">
        <TextContainer />
        <ImageContainer />
      </div>
    </OuterComponent>
  </div>
);

export default LetsConnect;
