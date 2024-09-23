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
      className="absolute xxl:-top-[45.3%] -top-[35.3%] lg:-top-[25%] sm:-top-[18.95%] xs:top-[-18.4%] xs:z-[99999] w-full max-w-[1920px] mx-auto"
    />
    <img
      alt=""
      src="/home/hero/dots.svg"
      className="absolute -bottom-[30%] lg:-bottom-[26%] sm:-bottom-[20%] xs:h-[100px] xs:bottom-[-8.1%] xs:z-[99999] z-20 w-full max-w-[1920px] mx-auto"
    />
  </section>
);

export default Hero;
