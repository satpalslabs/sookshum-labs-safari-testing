"use client";
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
  <div
    className=" px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px] bg-black max-w-[1920px] w-full overflow-hidden mx-auto"
    id="core_services"
  >
    <div className="flex xs:flex-col relative shadow-buttonInset bg-innerContainer rounded-[32px] sm:rounded-[20px] xs:pb-8 xs:gap-8">
      <TextContainer />
      <ImageContainer />
    </div>
  </div>
);

export default LetsConnect;
