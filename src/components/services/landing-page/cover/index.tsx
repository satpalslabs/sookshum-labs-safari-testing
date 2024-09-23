"use client";
import Description from "@components/basic-components/description";
import H2 from "@components/basic-components/headings/H2";
import  { useEffect } from "react";
import { animation } from "./scroll-animation";
const Cover: React.FC = () => {
  useEffect(() => {
    animation();
  });
  return (
    <div className=" bg-black overflow-hidden w-full h-full ">
      <div
        id="animationDiv"
        className="relative p-[5rem] py-[408px] lg:py-[300px] md:py-[277px] sm:py-[186px] xs:py-[333px] z-[2] text-center lg:p-[2.5rem] lg:box-border md:gap-[16.125rem] md:p-[1.875rem] sm:gap-[1.875rem] sm:p-[1.25rem] h-full max-w-[1920px] mx-auto"
      >
        <>
          <GoalIcon />
          <Blub />
          <Clipboard />
        </>
        <TextContainer />
        <>
          <PencilIcon />
          <CodeIcon />
          <GraphIcon />
        </>
      </div>
    </div>
  );
};

export default Cover;

// Text container in Center
const TextContainer: React.FC = () => (
  <div className="w-full  flex flex-col items-center !text-white justify-start gap-[0.625rem] xs:px-4">
    <H2>
      <div>
        <div className="text-wrap">
          From Ideation to{" "}
          <span className="italic font-light">Deployment,</span>
        </div>
        <p className="w-full 2xs:text-nowrap 3xs:text-balance ">
          We’ve Got You Covered
        </p>
      </div>
    </H2>
    <Description
      children={null}
      text="Our services are backed by a team of experts with years of experience in software design, development and maintenance."
      classes=" w-[50%] xs:w-full font-light"
    />
  </div>
);

// Top Icon -- 1
const GoalIcon: React.FC = () => (
  <div className="  absolute w-[6.094rem] left-[13.98%] top-[27.86%] lg:top-[26.51%] sm:top-[15.9%] xs:top-[18.57%] xs:left-4 h-[6.094rem] object-contain lg:w-[5.375rem] md:w-[4.125rem] ">
    <div className="relative w-full h-[200px] lg:h-[150px] sm:h-[100px] xs:h-[200px]">
      <img
        className="absolute animate-top transition-all duration-700 ease-linear top-[25%]"
        alt=""
        src="/services/cover/goal.png"
      />
    </div>
  </div>
);

// Top Icon -- 2
const Blub: React.FC = () => (
  <div className=" w-[6.244rem] transition-all duration-[1s] absolute h-fit top-[17.44%] left-[47%] xs:left-[45%] sm:top-[14.46%] xs:top-[13.21%] lg:top-[3.98%]  object-contain lg:w-[5.375rem] md:w-[4.125rem] ">
    <div className="relative w-full h-[200px] lg:h-[150px] sm:h-[100px] xs:h-[200px]">
      <img
        className="absolute animate-top transition-all duration-700 ease-linear top-[25%]"
        alt=""
        src="/services/cover/blub.png"
      />
    </div>
  </div>
);
// Top Icon --3
const Clipboard: React.FC = () => (
  <div className="  w-[5.369rem] right-[16.04%] top-[25.97%] lg:top-[24.86%] sm:top-[13.9%] xs:top-[16.4%] xs:right-4 absolute h-[5.369rem] object-contain lg:w-[5.375rem] md:w-[4.125rem] ">
    <div className="relative w-full h-[200px] lg:h-[150px] sm:h-[100px] xs:h-[200px]">
      <img
        alt=""
        className="absolute animate-top transition-all w-full duration-700 ease-linear top-[25%]"
        src="/services/cover/clipboard.png"
      />
    </div>
  </div>
);

// Bottom icon--1
const PencilIcon: React.FC = () => (
  <div className=" w-[5.35rem] transition-all duration-[1s] absolute h-fit left-[11.87%] bottom-[9.57%] lg:bottom-[9.40%] sm:bottom-[22.34%] xs:left-4 xs:bottom-[17.6%]  object-contain lg:w-[5.375rem] md:w-[4.125rem] ">
    <div className="relative w-full h-[200px] lg:h-[150px] sm:h-[100px] xs:h-[200px]">
      <img
        className="absolute animate-bottom transition-all duration-700 ease-linear bottom-[25%]"
        alt=""
        src="/services/cover/pencil.png"
      />
    </div>
  </div>
);

// Bottom icon--2
const CodeIcon: React.FC = () => (
  <div className=" w-[6.244rem] transition-all duration-[1s] absolute h-fit bottom-[2.44%] left-[47%] xs:left-[45%] sm:bottom-[14.46%] xs:bottom-[10.21%] lg:bottom-[3.98%]  object-contain lg:w-[5.375rem] md:w-[4.125rem] ">
    <div className="relative w-full h-[200px] lg:h-[150px] sm:h-[100px] xs:h-[200px]">
      <img
        className="absolute animate-bottom transition-all duration-700 ease-linear bottom-[25%]"
        alt=""
        src="/services/cover/code.png"
      />
    </div>
  </div>
);

// Bottom icon--3
const GraphIcon: React.FC = () => (
  <div className=" w-[7.419rem] transition-all duration-[1s] absolute h-fit bottom-[9.7%] lg:bottom-[9.54%] right-[11.01%] sm:bottom-[22.16%] xs:right-4 xs:bottom-[18.54%] object-contain lg:w-[5.375rem] md:w-[4.125rem] ">
    <div className="relative w-full h-[200px] lg:h-[150px] sm:h-[100px] xs:h-[200px]">
      <img
        className="absolute animate-bottom transition-all duration-700 ease-linear bottom-[25%]"
        alt=""
        src="/services/cover/graph.png"
      />
    </div>
  </div>
);
