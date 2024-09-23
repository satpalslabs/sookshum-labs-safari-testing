/**
 * This component contains the Hero section.
 */
import dynamic from "next/dynamic";
import Image from "next/image";
import type React from "react";
const TextContainer = dynamic(() => import("./containers/text-container"));
const ImageContainer = dynamic(() => import("./containers/image-container"));

const Hero: React.FC = () => (
  <section
    className="relative flex justify-between overflow-hidden max-w-[1920px] bg-gradient-to-b from-black to-[#15151528]  mx-auto select-none"
    id="hero"
  >
    <TextContainer />
    <ImageContainer />
    <Image
      alt=""
      width="2200"
      height="2200"
      src="/home/hero/dots.svg"
      className="absolute -bottom-[8%] sm:-bottom-[6%] xs:-bottom-[0.1%] xs:z-[99999] z-20 w-full max-w-[1920px] mx-auto"
    />

  
  </section>
);

export default Hero;
