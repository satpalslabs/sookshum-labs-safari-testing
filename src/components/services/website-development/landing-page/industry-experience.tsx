"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import data from "./data/industry-experience.json";
import Image from "next/image";
import H3 from "@components/basic-components/headings/H3";
import Description from "@components/basic-components/description";
import OuterComponent from "@components/basic-components/outer-component";

type IndustryType = {
  heading: string;
  "detail-description": string;
  "bg-image": string;
  style: any;
  "icon-image": string;
};
const industryData: IndustryType[] = data.industries;
const IndustryExperience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <OuterComponent>
      <div
        ref={ref}
        className={`transition-all duration-500 flex flex-col gap-[70px] md:gap-[50px] sm:gap-12 items-center bg-black overflow-hidden max-w-[1920px] mx-auto ${
          isInView ? "grayscale-0" : "grayscale"
        }`}
      >
        {/* Header */}
        <SectionHeader
          buttonText="Industries we serve"
          description="Our team is dedicated to designing innovative apps and websites that meet the unique demands of sectors ranging from healthcare to retail, all powered by the latest in technology."
          style="w-[770px] lg:w-[491px] lg:mx-auto sm:w-[636px] xs:w-full xs:!px-0"
        >
          <div className="w-full lg:w-[637px] sm:w-[80%] xs:w-full lg:leading-[1.2] text-wrap tracking-tight text-center mx-auto ">
            Our diverse industry
            <span className="italic font-light w-full"> experiences?</span>
          </div>
        </SectionHeader>
        {/* Detail component */}
        <IndustryExperienceDetailedComponent />
      </div>
    </OuterComponent>
  );
};
export default IndustryExperience;

const IndustryExperienceDetailedComponent: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState<IndustryType>(
    industryData[3]
  );
  return (
    <div className="h-[756px] w-[756px] md:h-[649px] md:w-[649px] sm:w-[512px] sm:h-[512px] xs:w-[310px] xs:h-[310px] relative bg-gradientBorderCircle shadow-buttonInset p-[6px] md:p-1 sm:p-[3px] xs:p-[2px] rounded-full">
      {/* side Gradient Border */}
      <div className="h-full w-full bg-black rounded-full p-[63px] md:p-[54px] sm:p-[39px] xs:p-[32px]">
        {/* Main center div with Image and text */}
        <div className="rounded-full h-full w-full p-[10px] sm:p-2 border-borderDarkButton [backdrop-filter:blur(100px)] border-solid border shadow-buttonInset bg-darkButton">
          <div className="w-full h-full rounded-full relative">
            <Image
              blurDataURL="URL"
              placeholder="blur"
              height="2200"
              width="2200"
              className="w-full h-full object-cover rounded-full z-0"
              src={activeIndustry["bg-image"]}
              alt=""
            />
            <div className="absolute bg-darkOpacity w-full h-full z-10 rounded-full top-0 left-0">
              {/* Text container */}
              <div className="flex flex-col gap-[26px] w-[411px] sm:w-[282px] mx-auto justify-center items-center h-full text-center xs:w-[205px] xs:gap-2">
                <H3
                  style="sm:text-[14px] xs:text-[13px]"
                  text={activeIndustry.heading}
                />
                <Description classes="grow-0 !font-medium" text={null}>
                  <div className="text-[20px] md:text-[20px] xs:text-[10px] w-full sm:text-[14px] leading-[1.3]">
                    {activeIndustry["detail-description"]}
                  </div>
                </Description>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Circle Icons */}
      {industryData.map((industry: IndustryType, index: number) => (
        <div
          key={index}
          className={`absolute w-[60px] h-[60px] lg:h-[44px] lg:w-[44px] xs:w-[32px] xs:h-[32px] rounded-full transition-all duration-500  ${
            industry != activeIndustry
              ? "border-borderDarkButton [backdrop-filter:blur(100px)] border-solid border shadow-buttonInset bg-darkButton"
              : "border-darkOrange border-solid border shadow-none bg-primary"
          } z-20`}
          style={industry.style}
        >
          <div
            className="relative w-full h-full p-[15px] lg:p-[10px] xs:p-[7px] cursor-pointer"
            onClick={() => {
              setActiveIndustry(industry);
            }}
          >
            <Image
              blurDataURL="URL"
              placeholder="blur"
              height="2200"
              width="2200"
              className="w-full object-contain"
              alt=""
              src={industry["icon-image"]}
            />
            <div
              className={`absolute top-1/2 font-poppins font-medium sm:text-[14px] ${
                index > 3
                  ? "-translate-x-[-100%] pl-6 md:pl-3 sm-pl-2 right-0 text-left"
                  : "translate-x-[-100%] pr-6 md:pr-3 sm:pr-2 left-0 text-right"
              } translate-y-[-50%] text-nowrap ${
                industry.heading.length > 12 && "sm:text-wrap"
              } xs:hidden`}
            >
              {industry.heading}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
