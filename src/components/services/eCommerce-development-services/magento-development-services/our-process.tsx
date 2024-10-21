"use client";
/**
 * This file contains the industry experience section.
 */

import OuterFlexComponent from "@components/basic-components/main-flex-container";
import OuterComponent from "@components/basic-components/outer-component";
import dynamic from "next/dynamic";
import data from "./data/processs-data.json";
import SectionHeader from "@components/basic-components/section-header";
import { useRef } from "react";
import { useInView } from "@lib/use-in-view";
import Card from "@components/basic-components/card";
import Image from "next/image";
import Description from "@components/basic-components/description";

interface ourProcess {
  title: string;
  description: string;
  image: string;
}
const ourProcessData: ourProcess[] = data;
const OurProcess: React.FC = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <Header />
      <MainContainer />
    </OuterFlexComponent>
  </OuterComponent>
);

export default OurProcess;

/**
 * This file contains the Header section of our process section.
 */

const Header: React.FC = () => (
  <SectionHeader
    style="!w-[1050px] lg:!w-full sm:px-8 xs:px-0"
    buttonText="Our Process"
    description="Our eCommerce development process iis through and client-centric. From requirement analysis to final deployment and support, we ensure your solution is built with precision, efficiency, and focus on your specific business needs."
  >
    <div className="sm:text-wrap text-center leading-[34px]">
      Our eCommerce Development Process
    </div>
  </SectionHeader>
);

const MainContainer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  return (
    <div
      ref={ref}
      className={`xxl:w-[calc(100%+80px)] w-[calc(100%+70px)] lg:w-[calc(100%+55px)] grid grid-cols-3 sm:grid-cols-2 sm:grid-rows-3 xs:grid-cols-1 xs:grid-rows-6 grid-rows-2 `}
    >
      {ourProcessData.map((item: ourProcess, ind: number) => {
        return (
          <div
            key={ind}
            className={`flex flex-col border-b-2 gap-[6px] lg:gap-1 ${
              item.title.includes("Planning")
                ? "border-white"
                : "border-transparent"
            } border-solid sm:border-transparent`}
          >
            {/* Top arrow with line */}
            <TopArrowWithLine ind={ind} item={item} />
            <div className="flex grow gap-[6px] lg:gap-1 items-center h-full">
              {/* Left arrow */}
              <LeftSmallArrow ind={ind} item={item} />
              <Card isInView={isInView} style="!p-6 !pb-6 xxl:!p-8 grow h-full">
                <div className="flex flex-col gap-5 lg:gap-3">
                  <div className="flex gap-[18px] items-center">
                    <Image
                      src={item.image}
                      alt=""
                      width="400"
                      height="400"
                      className="h-[52px] w-auto lg:h-[38px] shrink-0"
                      blurDataURL="URL"
                      placeholder="blur"
                    />
                    <Description classes="" text="">
                      <div className="text-[20px] font-medium lg:text-base sm:text-[14px] xs:text-xs leading-[1.4] text-white">
                        {item.title}
                      </div>
                    </Description>
                  </div>
                  <Description
                    classes="!text-white"
                    text={item.description}
                    children={null}
                  />
                </div>
              </Card>
              {/* Right arrow */}
              <RightLine ind={ind} item={item} />
            </div>
            {/* bottom arrow with line */}
            <BottomArrowLine ind={ind} item={item} />
          </div>
        );
      })}
    </div>
  );
};

const BottomArrowLine: React.FC<{ item: ourProcess; ind: number }> = ({
  item,
  ind,
}) => (
  <div
    className={`xxl:h-[40px] h-[36px] lg:h-[25px]  translate-y-[2px] w-[50%] border-b-2 border-r-2 border-solid  ${
      /Design/.test(item.title) ? "border-white" : "border-transparent"
    } ${
      ind + 1 < ourProcessData.length
        ? `xs:border-white xs:border-b-0 ${
            (ind + 1) % 2 == 0 && ind + 1 < ourProcessData.length
              ? "sm:border-white"
              : "sm:border-transparent"
          }`
        : "xs:border-transparent"
    }`}
  ></div>
);

const RightLine: React.FC<{ item: ourProcess; ind: number }> = ({
  item,
  ind,
}) => (
  <div
    className={`xxl:w-[40px] w-[34px] lg:w-[25px] shrink-0  bg-white ${
      /Design|Deployment/.test(item.title) ? "h-0" : "h-[2px]"
    } ${(ind + 1) % 2 != 0 ? "sm:h-[2px]" : "sm:h-0"} xs:h-0`}
  ></div>
);

const LeftSmallArrow: React.FC<{ item: ourProcess; ind: number }> = ({
  item,
  ind,
}) => (
  <div
    className={`xxl:w-[40px] w-[34px] lg:w-[25px] shrink-0  relative border-solid border-white ${
      /Analysis|Development/.test(item.title) ? "border-t-none" : "border-t-2"
    } ${
      (ind + 1) % 2 == 0
        ? "sm:border-t-2"
        : "sm:border-t-none sm:border-transparent"
    } xs:border-transparent`}
  >
    <img
      src="/services/e-commerce-development/magento-development-services/our-process/arrow.svg"
      className={`translate-y-[calc(-50%-1px)] -rotate-90 right-[-4px] absolute ${
        /Analysis|Development/.test(item.title) ? "hidden" : ""
      } ${(ind + 1) % 2 == 0 ? "sm:block" : "sm:hidden"} xs:hidden`}
    />
  </div>
);

const TopArrowWithLine: React.FC<{ item: ourProcess; ind: number }> = ({
  item,
  ind,
}) => (
  <div
    className={`xxl:h-[40px] h-[36px] lg:h-[25px] w-[calc(50%+2px)] relative ml-[50%] border-t-2 border-l-2 border-solid  translate-y-[-2px] translate-x-[-2px]  ${
      /Development/.test(item.title) ? "border-white" : "border-transparent"
    }  ${
      ind != 0
        ? `xs:border-white xs:border-t-0 xs:border-l-2 ${
            (ind + 1) % 2 != 0 && ind + 1 < ourProcessData.length && ind != 0
              ? "sm:border-white"
              : "sm:border-transparent"
          }`
        : "xs:border-transparent"
    } `}
  >
    <img
      src="/services/e-commerce-development/magento-development-services/our-process/arrow.svg"
      className={`translate-x-[calc(-50%-1px)] bottom-[-2px] left-0 absolute ${
        /Development/.test(item.title) ? "" : "hidden"
      } ${
        ind != 0
          ? `xs:block ${
              (ind + 1) % 2 != 0 && ind + 1 < ourProcessData.length && ind != 0
                ? "sm:block"
                : "sm:hidden"
            }`
          : "xs:hidden"
      }`}
    />
  </div>
);
