"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import data from "./data/our-process.json";
import Image from "next/image";
import H4 from "@components/basic-components/headings/H4";
import Description from "@components/basic-components/description";
import CheckIcon from "@components/basic-components/check-icon";
import SideNavigation from "@components/services/reuseable-components/web-app-development/side-navigation-card";

type Process = {
  "process-title": string;
  image: string;
  description: string;
  "key-points": string[];
};
const processData: Process[] = data["our-process"];
const OurProcess = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      className="px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px] flex flex-col gap-[70px] md:gap-[50px] sm:gap-12 items-center bg-black overflow-hidden max-w-[1920px] mx-auto"
    >
      <SectionHeader
        buttonText="Our Process"
        description="Having successfully delivered hundreds of projects, our transparent and agile development process will guide your project from discovery to launch."
        style="w-[986px] lg:w-[491px] lg:mx-auto xs:w-full"
      >
        <div className="w-full lg:w-[637px] sm:w-full xs:px-3 xs:w-full 3xs:px-0 xs:text-balance lg:leading-[1.2] text-wrap tracking-tight text-center mx-auto ">
          Our process for{" "}
          <span className="italic font-light w-full">
            {" "}
            Web App development{" "}
          </span>
          success.
        </div>
      </SectionHeader>
      <OurProcessDetailComponent isInView={isInView} />
    </section>
  );
};

export default OurProcess;

const OurProcessDetailComponent: React.FC<{ isInView: boolean }> = ({
  isInView,
}) => {
  const [activeProcess, setActiveProcess] = useState<number>(0);
  return (
    <section
      className={` ${
        isInView ? "grayscale-0" : "grayscale"
      } grid grid-cols-3  transition-all duration-500 sm:grid-cols-none sm:flex sm:flex-col sm:gap-5 w-full `}
    >
      <Navigation
        activeProcess={activeProcess}
        setActiveProcess={setActiveProcess}
      />
      <div className="grid grid-cols-2 col-span-2 sm:grid-cols-none sm:flex xs:flex-col xs:gap-5">
        <Image
          width="1200"
          height="1200"
          className="h-[297px] lg:h-[230px] sm:w-[50%] sm:object-contain xs:h-[150px] lg:px-[15px] xxl:w-fit w-fit mx-auto"
          src={processData[activeProcess].image}
          alt=""
        />
        <div className="flex flex-col pt-[18px] lg:pt-[15px] sm:grow">
          <H4 style="" text={`0${activeProcess + 1}`} />
          <div className="pl-6 pt-1 flex flex-col gap-[51px] sm:gap-[42px] xs:gap-[19px] sm:w-[80%] xs:w-full">
            <div className=" flex flex-col gap-[21px] xs:gap-[10px]">
              <H4
                style="leading-[1.4] h-fit w-[200px] text-wrap"
                text={processData[activeProcess]["process-title"]}
              />
              <Description
                children={null}
                classes="!text-white leading-[1.4] !font-normal"
                text={processData[activeProcess].description}
              />
            </div>
            <div className="flex w-full flex-wrap gap-[30px]">
              {processData[activeProcess]["key-points"].map(
                (listItem: string, index: number) => (
                  <div className="flex gap-[21px]" key={index}>
                    <div className="flex shrink-0 items-center justify-center w-[27px] h-[27px] lg:w-[22px] lg:h-[22px] lg:p-1 bg-primary rounded-full">
                      <CheckIcon />
                    </div>
                    <Description
                      children={null}
                      classes="!text-white leading-[1.4] !font-medium"
                      text={listItem}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Navigation: React.FC<{
  activeProcess: number;
  setActiveProcess: React.Dispatch<React.SetStateAction<number>>;
}> = ({ activeProcess, setActiveProcess }) => (
  <div className="flex flex-col sm:flex-row gap-[50px] lg:gap-[40px] sm:gap-[15px] sm:overflow-x-auto w-full col-span-1 no-scrollbar">
    {processData.map((process: Process, ind: number) => (
      <SideNavigation
        title={process["process-title"]}
        ind={ind}
        active={activeProcess}
        setActive={setActiveProcess}
        key={ind}
        style=""
      />
    ))}
  </div>
);
