"use client";
import GradientSection from "./gradient-section";
import SourceContent from "./source-content";
import WindowResize from "@lib/window-resize";
export type contentProps = {
  showContent: string;
  style: {
    gradientDivStyle: string;
    sourceStyle: string;
  };
  fallback: string;
  source: string;
};
const Hero: React.FC = () => {
  const { width } = WindowResize();

  return (
    <div className="w-full relative shrink-0" id="hero">
      <GradientSection
        buttonText="Our Services"
        gradientText="We craft custom <span class='hero-span'>software solutions</span>  that power your business growth"
      />
      <SourceContent
        showContent="image"
        style={{
          sourceStyle:
            "scale-[1.0] lg:scale-[1.4] sm:scale-[1] xxl:left-[50%] xxl:-translate-x-[50%] w-screen h-[540px] sm:h-[690px]  lg:h-[311px] lg:bottom-[18%] sm:bottom-[5%]  xs:top-[-25%] xs:h-[500px]   xxl:h-[620px] xxl:bottom-[-10%] bottom-[-1%]",
          gradientDivStyle:
            "scale-[1.0] lg:scale-[1.4] xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[620px] h-[540px]  lg:h-[321px] sm:scale-100 lg:bottom-[16%] sm:h-[690px] sm:bottom-[-5%] xs:h-[500px] xs:top-[-25%] xxl:bottom-[-10%] bottom-[-1%] ",
        }}
        fallback=""
        source={
          width && width < 960
            ? "/services/bg-image-2.webp"
            : "/services/service-fallback.webp"
        }
      />
    </div>
  );
};

export default Hero;
