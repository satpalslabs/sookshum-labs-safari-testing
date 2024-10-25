"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useInView } from "framer-motion";
import { useRef } from "react";
import data from "./data/our-process.json";
import H6 from "@components/basic-components/headings/H6";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";

type Process = {
  "process-title": string;
  gradient: string;
};
const processData: Process[] = data["our-process"];
const OurProcess = () => (
  <div id="our-process">
    <OuterComponent>
      <OuterFlexComponent>
        <SectionHeader
          buttonText="Our Process"
          description="Tailored and inspired. Professional and reliable. Our agency strives to provide only the best solutions."
          style="w-[794px] lg:w-[491px] lg:mx-auto xs:w-full"
        >
          <div className="w-[80%] lg:w-[637px] sm:w-full xs:w-[70%] xs:text-balance lg:leading-[1.2] text-wrap tracking-tight text-center mx-auto leading-[1.4] capitalize">
            Our Process for
            <span className="italic font-light w-full"> App Development </span>
            Success
          </div>
        </SectionHeader>
        <OurProcessDetailComponent />
      </OuterFlexComponent>
    </OuterComponent>
  </div>
);

export default OurProcess;

const OurProcessDetailComponent: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      className={` ${
        isInView ? "grayscale-0" : "grayscale"
      } grid grid-cols-6 transition-all duration-500 xs:grid-cols-none xs:flex xs:flex-col xs:gap-5 w-full pt-[88px] pb-[75px] lg:pt-[43px] lg:pb-[56px] md:gap-0 sm:py-0 `}
    >
      {processData.map((processItem: Process, ind: number) => (
        <div
          key={ind}
          className="h-[213px] xs:h-fit relative px-[2px] border-x-[1.5px] grid grid-rows-2 border-solid xs:grid-rows-none border-darkButton"
        >
          <div
            className={`flex flex-col gap-2 w-full ${
              ind > 1 && ind < processData.length - 1
                ? "row-start-2 flex-col-reverse"
                : "row-end-2 justify-between"
            } xs:flex-col`}
          >
            <H6
              text={processItem["process-title"]}
              classes={`text-center !text-white !text-balance w-[70%] xs:w-[100px] mx-auto leading-[1.3]`}
            />
            <div
              className="h-[50px] rounded-full"
              style={{ background: processItem.gradient }}
            ></div>
          </div>
        </div>
      ))}
    </section>
  );
};
