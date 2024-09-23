/**
 * This component contains the Hero section.
 */
import dynamic from "next/dynamic";
// import Image from "next/image";

const TextContainer = dynamic(() => import("./containers/text-container"));
const ImageContainer = dynamic(() => import("./containers/image-container"));

const Hero: React.FC = () => (
  <section
    className="relative overflow-hidden max-w-[1920px] mx-auto"
    id="hero"
  >
    <TextContainer />
    <ImageContainer />
    <img
      alt=""
      src="/home/hero/dots.svg"
      className="absolute -bottom-[8%] sm:-bottom-[6%] xs:-bottom-[0.1%] xs:z-[99999] z-20 w-full max-w-[1920px] mx-auto"
    />
  </section>
);

export default Hero;
