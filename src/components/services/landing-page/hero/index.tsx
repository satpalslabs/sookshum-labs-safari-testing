"use client";
import { useEffect, useState } from "react";
import GradientSection from "./gradient-section";
import SourceContent from "./source-content";
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
  const [width, setWidth] = useState<number | null>(null);

  // Debounce function to limit the rate of resize updates
  const debounce = (fn: () => void, delay: number) => {
    let timer: NodeJS.Timeout;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(fn, delay);
    };
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="w-full relative shrink-0" id="hero">
      <GradientSection
        buttonText="Our Services"
        gradientText="We craft custom <span class='hero-span'>software solutions</span>  that power your business growth"
      />
      <SourceContent
        showContent="image"
        // style={{
        //   sourceStyle:
        //     "xxl:left-[50%] xxl:!-translate-x-[50%] xxl:!h-[680px] xxl:!top-[-30%] !h-[600px]  xxl:!scale-[1] lg:!scale-[1.2] sm:!scale-[1.2] !top-[-20%] lg:!h-[450px] sm:!h-[720px] xs:!h-[580px] xs:!top-[-50%] xs:!scale-[1.2] xxl:top-[-21%] xxl:!-translate-x-[20%] lg:!top-[-30%] sm:!top-[-98%] ",
        //   gradientDivStyle:
        //     "xxl:!h-[530px] !h-[550px] lg:!h-[400px] lg:!top-[-20%] sm:!h-[420px] sm:!top-[-20%] xs:!h-[200px] xs:!top-[5%] !top-[-15%] xxl:!top-[-9%]",
        // }}
        style={{
          sourceStyle:
            "scale-[1.0] lg:scale-[1.4] sm:scale-[1] xxl:left-[50%] xxl:-translate-x-[50%] w-screen h-[540px] sm:h-[690px]  lg:h-[311px] lg:bottom-[18%] sm:bottom-[5%]  xs:bottom-[-5%]  xxl:h-[620px] xxl:bottom-[-10%] bottom-[-1%]",
          gradientDivStyle:
            "scale-[1.0] lg:scale-[1.4] xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[620px] h-[540px]  lg:h-[321px] sm:scale-100 lg:bottom-[16%] sm:h-[690px] sm:bottom-[-5%]  xs:bottom-[-5%]  xxl:bottom-[-10%] bottom-[-1%] ",
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
