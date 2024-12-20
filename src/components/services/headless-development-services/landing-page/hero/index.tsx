"use client";
import GradientSection from "@components/services/landing-page/hero/gradient-section";
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
const Hero: React.FC = () => (
  <div className="w-full relative shrink-0" id="hero">
    <GradientSection
      buttonText="Headless CMS"
      gradientText="<span class='hero-span'>Headless CMS</span> Development <br class='hidden xxl:block'/> Services"
    />
    <SourceContent
      showContent="image"
      style={{
        sourceStyle:
          "w-screen h-[540px] sm:h-[490px] sm:top-0  lg:h-[381px] lg:top-0  xs:top-0 xs:h-[450px] xxl:h-[520px] top-0 translate-y-[-119px] lg:translate-y-[-116px]  xs:translate-y-[-40px]",
        gradientDivStyle:
          "w-screen h-[540px] sm:h-[490px] sm:top-0  lg:h-[381px] lg:top-0  xs:top-0 xs:h-[450px] xxl:h-[520px] top-0 translate-y-[-119px] lg:translate-y-[-116px] xs:translate-y-[-40px]",
      }}
      fallback=""
      source={"/services/headless-cms/bg-image.png"}
    />
  </div>
);
export default Hero;
