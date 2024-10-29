"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import data from "./data/our-process.json";
import DarkButton from "@components/basic-components/button";
import H6 from "@components/basic-components/headings/H6";
import Description from "@components/basic-components/description";
import Image from "next/image";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";

type Process = {
  "process-title": string;
  process: string;
  image: string;
};
const processData: Process[] = data["our-process"];
const OurProcess = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        id="our-process"
        buttonText="Our Process"
        description="Whether you want to consult an idea, add missing capabilities, quickly expand your team, or hand over a  project - we’ve got you covered."
        style="w-[794px] lg:w-[491px] lg:mx-auto xs:w-full"
      >
        <div className="w-[80%] lg:w-[637px] sm:w-full xs:px-5 3xs:px-0 xs:text-balance lg:leading-[1.2] text-wrap tracking-tight text-center mx-auto leading-[1.4] capitalize">
          Full
          <span className="italic font-light w-full"> digital product </span>
          expertise under one roof
        </div>
      </SectionHeader>
      <OurProcessDetailComponent />
    </OuterFlexComponent>
  </OuterComponent>
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
      } grid grid-cols-2 transition-all duration-500 sm:grid-cols-1 gap-[62px] w-full pt-[88px] pb-[75px] lg:pt-[43px] lg:pb-[56px] md:gap-0 sm:gap-[35px] sm:py-0 xs:gap-[15px]`}
    >
      <TextContainer />

      <div className="grow relative w-full">
        <Image
          blurDataURL="URL"
          placeholder="blur"
          height="2200"
          width="2200"
          alt=""
          src="/services/website-development/landing-page/our-process.png"
          className="w-full h-full object-contain absolute sm:relative sm:w-[auto] sm:h-[461px] xs:h-[300px] mx-auto"
        />
      </div>
    </section>
  );
};

const TextContainer: React.FC = () => {
  const [activeProcess, setActiveProcess] = useState<number>(0);
  return (
    <div className="flex flex-col gap-[50px] lg:gap-[40px] sm:gap-5 w-full">
      {processData.map((process: Process, ind: number) => (
        <div
          key={ind}
          className="flex flex-col gap-[10px] lg:gap-[10px] w-full"
        >
          <div
            className="flex gap-[27px] items-center w-full lg:gap-[17px] sm:gap-[26px] xs:gap-[17px] cursor-pointer"
            onClick={() => {
              setActiveProcess(ind);
            }}
          >
            <DarkButton
              text={`0${ind + 1}`}
              style={`${
                ind == activeProcess ? " !text-primary" : ""
              } md:!px-8 md:!py-[10px] sm:!px-8 sm:!py-[8px] xs:!w-[56px] xs:!h-[34px] xs:!p-0 xs:!text-center xs:!justify-center xs:!items-center`}
            />
            <div className="flex gap-[57px] shrink-0 lg:gap-[26px] items-center xs:flex-col xs:items-start xs:gap-1 xs:grow">
              <H6
                text={process["process-title"]}
                classes="!text-white xxl:text-3xl md:text-[20px] leading-[1.6]"
              />
              <div
                className={`w-[58.47%] shrink-0 text-wrap lg:grow lg:w-fit lg:max-w-[66%] sm:w-full sm:max-w-full xs:w-full xs:max-w-[86%]`}
              >
                <Description
                  text={process.process}
                  classes={` ${
                    ind != activeProcess && "hidden"
                  } text-lg !font-normal`}
                  children={null}
                ></Description>
              </div>
            </div>
          </div>
          <div
            className={`h-[1px] mx-auto shrink-0 ${
              ind != activeProcess ? "w-0" : "w-full"
            } transition-all bg-gradient-to-r from-[#AAAAAA1A] via-[#FFFFFF] to-[#9999991A]`}
          ></div>
        </div>
      ))}
    </div>
  );
};
