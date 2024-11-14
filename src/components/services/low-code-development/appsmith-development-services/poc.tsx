"use client";
import Description from "@components/basic-components/description";
import H2 from "@components/basic-components/headings/H2";
import { useInView } from "@lib/use-in-view";
import Image from "next/image";
import { useRef } from "react";

function POC() {
  return (
    <section
      id="poc"
      className="px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px] flex flex-col items-center gap-[46px] lg:gap-[70px] sm:gap-[49px] bg-black overflow-visible max-w-[1920px] mx-auto"
    >
      <Header />
      <MainContainer />
    </section>
  );
}

export default POC;

const Header: React.FC = () => (
  <div
    className={`flex flex-col gap-6 lg:gap-[15px] xs:gap-2 items-center text-center w-[80%] lg:w-[680px] xs:w-full  3xs:px-0 xs:!text-wrap `}
  >
    <H2>
      <div className="lg:text-wrap text-center leading-[1.3] !capitalize">
        Start your <span className="italic font-light">low-code app </span>{" "}
        development with PoC
      </div>
    </H2>
    <Description
      children={null}
      text={
        "Before committing to full-scale app development, it's wise to create a functional and efficient proof of concept (PoC). A PoC emphasizes the project's key priorities and requirements, allowing you to validate your idea early, mitigate financial risks, and enhance your marketing strategy."
      }
      classes={
        "!text-lg lg:!text-sm sm:!text-[13px] xs:!text-[12px] !leading-[1.4] !text-white "
      }
    />
  </div>
);

const MainContainer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  return (
    <div
      ref={ref}
      className={`w-full h-[763px] transition-all duration-1000 lg:h-[645px] sm:h-[468px] xs:h-[272px] flex justify-center object-contain ${
        isInView ? " grayscale-0" : "grayscale"
      }`}
    >
      <Image
        width={1200}
        height={1200}
        src="/services/low-code-development/appsmith-development-services/about/pc.webp"
        className="h-full w-auto object-contain"
        alt="image"
      />
    </div>
  );
};
