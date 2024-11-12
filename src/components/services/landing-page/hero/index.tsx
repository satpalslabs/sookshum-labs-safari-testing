"use client";
import { useEffect, useState } from "react";
import GradientSection from "./gradient-section";
import SourceContent from "./source-content";
import $ from "jquery";
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
  const [width, setWidth] = useState<number>(window.innerWidth);

  // Debounce function to limit the rate of resize updates
  const debounce = (fn: () => void, delay: number) => {
    let timer: NodeJS.Timeout;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(fn, delay);
    };
  };

  useEffect(() => {
    const handleResize = debounce(() => setWidth(window.innerWidth), 200);
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="w-full relative shrink-0" id="hero">
      <GradientSection
        buttonText="Our Services"
        gradientText="We craft custom software solutions that power your business growth"
      />
      <SourceContent
        showContent="image"
        style={{
          sourceStyle:
            "xxl:!left-[20%] xxl:!h-[680px] !h-[600px]  xxl:!scale-[1] lg:!scale-[1.2] sm:!scale-[1.2] !top-[-20%] lg:!h-[450px] sm:!h-[780px] xs:!h-[580px] xs:!top-[-50%] xs:!scale-[1.2] xxl:top-[-21%] xxl:!-translate-x-[20%] lg:!top-[-30%] sm:!top-[-98%] ",
          gradientDivStyle:
            "xxl:!h-[530px] !h-[550px] lg:!h-[400px] lg:!top-[-20%] sm:!h-[420px] xs:!h-[200px] xs:!top-[5%] !top-[-15%] xxl:!top-[-9%]",
        }}
        fallback=""
        source={
          width && width < 900
            ? "/services/bg-image-2.png"
            : "/services/service-fallback.png"
        }
      />
    </div>
  );
};

export default Hero;
