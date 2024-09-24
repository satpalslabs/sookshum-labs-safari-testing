/**
 * This component contains the Hero section.
 */
import Loading from "@app/loading";
import dynamic from "next/dynamic";
import Image from "next/image";
import dots from "/public/home/hero/dots.svg";

const TextContainer = dynamic(() => import("./containers/text-container"));
const ImageContainer = dynamic(() => import("./containers/image-container"), {
  ssr: false,
  loading: () => <Loading />,
});

const Hero: React.FC = () => (
  <section
    className="flex relative justify-between h-fit max-w-[1920px] mx-auto"
    id="hero"
  >
    <div className="absolute  -top-[90px]  h-[200px] lg:-top-[10%] xs:top-[-15.4%] z-20 w-screen overflow-hidden">
      <Image
        alt=""
        loading="eager"
        src={dots}
        className="scale-[3.8] lg:scale-[3] xs:scale-[2] min-w-[100vw]  h-[100px]"
      />
    </div>
    <TextContainer />
    <ImageContainer />
    <div className="absolute -bottom-[20%] lg:-bottom-[23%] xs:bottom-[8%] h-[200px] xs:h-[40px] z-20 w-full overflow-visible">
      <Image
        alt=""
        src={dots}
        className=" scale-[3.8] lg:scale-[3] xs:scale-[2] min-w-[100vw]  h-[100px]"
      />
    </div>
  </section>
);

export default Hero;
