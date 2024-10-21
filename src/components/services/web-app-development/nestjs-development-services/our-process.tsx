"use client";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
import OuterComponent from "@components/basic-components/outer-component";
import SectionHeader from "@components/basic-components/section-header";
import data from "./data/processs-data.json";
import H4 from "@components/basic-components/headings/H4";
import Description from "@components/basic-components/description";
import { useRef } from "react";
import { useInView } from "@lib/use-in-view";
interface process {
  title: string;
  description: string;
  image: string;
}

const process_data: process[] = data;
const OurProcess: React.FC = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        buttonText="Our Process"
        description="By implementing a client-centered approach and being attentive to details, we create stellar projects that fulfil our client’s needs. Following Agile methodologies, we adapt and evolve our approach as required throughout the development cycle."
        style="w-[990px] lg:!w-[740px] xs:!w-[400px] 3xs:!w-[310px]"
      >
        <div className="xs:w-full w-full sm:w-[80%] mx-auto leading-[1.4] text-wrap text-center">
          Process Of
          <span className="italic font-light"> Nest.Js </span> Development
        </div>
      </SectionHeader>
      <OurProcessMainContainer />
    </OuterFlexComponent>
  </OuterComponent>
);

export default OurProcess;

const OurProcessMainContainer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 xs:grid-cols-1 min-h-[550px] lg:min-h-[412px] sm:min-h-[375px] w-full xs:gap-3 xxl:px-[80px]"
    >
      {process_data.map((process: process, index: number) => (
        <div
          className={`group relative flex items-start ${
            index == 1
              ? "justify-end"
              : index == 2
              ? "items-end"
              : index == 3
              ? "items-end justify-end"
              : ""
          } xs:justify-start xs:items-start hover:z-[9999] `}
          key={index}
        >
          <div
            className={`w-[381px] lg:w-[282px] sm:w-[250px] xs:w-full text-center xs:text-start xs:flex xs:flex-col xs:gap-3 xs:bg-innerContainer xs:p-5 xs:rounded-[32px] xs:border-[1.45px] xs:hover:bg-gradientOnHover xs:cursor-pointer xs:transition-all duration-1000 xs:hover:border-borderPrimary ${
              isInView
                ? "border-viewportBorder  grayscale-0"
                : "border-transparent grayscale"
            }`}
          >
            <img src={process.image} className="hidden xs:block w-[52px]  " />
            <div className="flex flex-col gap-3 lg:gap-2">
              <H4 style="!leading-[1.25]" text={process.title} />
              <Description
                children={null}
                classes="!text-lg lg:!text-sm sm:!text-xs w-full sm:!tracking-tight"
                text={process.description}
              />
            </div>
          </div>
          <div
            className={`absolute xs:hidden w-[250px] h-[250px] lg:w-[190px] lg:h-[190px] sm:w-[145px] sm:h-[145px] transition-all duration-1000 bg-innerContainer hover:bg-gradientOnHover border-[1.5px] hover:border-borderPrimary cursor-pointer  ${
              index == 1
                ? "bottom-0 left-0 translate-y-[1.45px] translate-x-[-1.45px] rounded-r-full !rounded-b-none"
                : index == 2
                ? "top-0 right-0 rounded-l-full !rounded-t-none"
                : index == 3
                ? "top-0 left-0 rounded-r-full !rounded-t-none translate-x-[-1.45px]"
                : "bottom-0 right-0 border-r-[0.7px] translate-y-[1.45px]   border-b-[0.7px] rounded-l-full !rounded-b-none"
            } ${
              isInView
                ? "border-viewportBorder  grayscale-0"
                : "border-transparent grayscale"
            }`}
          >
            <div
              className={`flex h-full p-[50px] lg:p-[37px] ${
                index == 1
                  ? "justify-start items-end"
                  : index == 2
                  ? "justify-end items-start"
                  : index == 3
                  ? "items-start justify-start"
                  : "items-end justify-end"
              }`}
            >
              <img
                src={process.image}
                className="w-[62px] h-auto lg:w-[46px] transition-all duration-300 group-hover:scale-125"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
