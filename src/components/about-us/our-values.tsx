"use client";
import { useRef } from "react";
import data from "./data/our-values.json";
import { useInView } from "@lib/use-in-view";
const Card = dynamic(() => import("@components/basic-components/card"));
import Description from "@components/basic-components/description";
import H5 from "@components/basic-components/headings/H5";
import H2 from "@components/basic-components/headings/H2";
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import Image from "next/image";
export type valuePoint = {
  icon: string;
  title: string;
  about: string;
};

const ourValuesData: valuePoint[] = data["our-values"];
const OurValues: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <OuterComponent>
      <div
        ref={ref}
        id="our-values"
        className="flex flex-col gap-[94px] lg:gap-[36px]  items-center"
      >
        <div
          className={`flex flex-col gap-6 lg:gap-3 xs:gap-2 items-center w-[70%] lg:w-[500px] xs:w-full xs:px-4 `}
        >
          <H2>
            <div className="hero-text">Our values</div>
          </H2>
          <div className="text-center">
            <Description
              children={null}
              text={
                "People, awareness and growth. The conceptual idea of the value system is a consistent trinity. Our people, being the main value of the company, come to effective growth while remaining purposeful."
              }
              classes={
                "!text-[22px] lg:!text-lg xs:!text-base !font-normal !leading-[1.3]"
              }
            />
          </div>
        </div>
        <section
          className={` ${isInView ? "grayscale-0" : "grayscale"} w-full `}
        >
          <div className="grid grid-cols-4 gap-5 sm:grid-cols-2 lg:gap-x-[18px] xs:grid-cols-1 xs:gap-[16px] gap-y-[70px] sm:gap-y-[36px]">
            {ourValuesData?.map((value: valuePoint, index: number) => (
              <OurValueCard value={value} isInView={isInView} key={index} />
            ))}
          </div>
        </section>
      </div>
    </OuterComponent>
  );
};

export default OurValues;

const OurValueCard: React.FC<{ value: valuePoint; isInView: boolean }> = (
  props
) => (
  <div
    className={`relative w-full group h-full z-0 cursor-pointer rounded-[32px] sm:rounded-[20px]  p-[1px] bg-viewportBorder transition-all hover:bg-gradient-to-br  hover:from-borderPrimary hover:via-transparent hover:to-borderPrimary duration-1000 ${
      props.isInView
        ? `bg-viewportBorder  grayscale-0 `
        : "bg-transparent grayscale"
    }`}
  >
    <div className=" absolute px-4 md:px-2 sm:px-[6px] md:flex-1 pb-8 xxl:pb-16 xs:pb-5 flex ">
      <Image
        className="h-[136px] z-40 w-auto lg:h-[79px] xxl:-mt-[40.3%] sm:h-[80px] xs:-mt-[16%] lg:-mt-[25%] lg:ml-[15%]  sm:-mt-[25%] object-cover -mt-[30%]"
        alt="image"
        width={600}
        height={600}
        src={props.value.icon}
      />
    </div>
    <div className="w-full h-full relative z-20 overflow-hidden rounded-[32px] bg-black sm:rounded-[20px] ">
      <div
        className={`w-full h-full bg-innerContainer p-4 pb-8 sm:p-[9px] sm:pb-[14px] lg:p-[14px] lg:pb-[23px] relative shadow-buttonInset rounded-[32px] sm:rounded-[20px] flex flex-col  lg:pt-[68px] sm:pt-[91px] grow pt-[127px]`}
      >
        <H5 text={props.value.title} style="!text-white leading-[1.3]" />
        <Description
          children={null}
          text={props.value.about}
          classes="text-lg !font-normal"
        />
      </div>
    </div>
    <div className="absolute z-20 bg-transparent transition-all duration-1000 top-0 left-0 w-full h-full group-hover:block group-hover:bg-gradientOnHover "></div>
  </div>
);
