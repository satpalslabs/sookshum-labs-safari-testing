/**
 * This component contains the Hero section.
 */
import dynamic from "next/dynamic";
import Image from "next/image";

const TextContainer = dynamic(() => import("./containers/text-container"));
const ImageContainer = dynamic(() => import("./containers/image-container"));

const Hero: React.FC = () => (
  <section
    className="flex relative justify-between h-fit max-w-[1920px] mx-auto"
    id="hero"
  >
    <TextContainer />
    <ImageContainer />
    <img
      alt=""
      src="/home/hero/dots.svg"
      className="absolute -bottom-[30%] lg:-bottom-[20%] sm:-bottom-[-25%] xs:-bottom-[0.1%] xs:z-[99999] z-20 w-full max-w-[1920px] mx-auto"
    />
  </section>
);

export default Hero;
