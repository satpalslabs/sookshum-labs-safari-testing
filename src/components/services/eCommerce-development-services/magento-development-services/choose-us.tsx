"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useInView } from "framer-motion";
import { useRef } from "react";
import data from "./data/choose-us.json";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
import Card from "@components/basic-components/card";
import Description from "@components/basic-components/description";
import Image from "next/image";
type ChooseUs = {
  heading: string;
  image_url: string;
};
const chooseUsData: ChooseUs[] = data.services;
const ChooseUs = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        id="why-us"
        buttonText="Why choose us?"
        description="Choose us for our deep expertise in Magento development, personalized solutions tailored to your business needs, and a proven track record of successful projects that drive growth and enhance user experience."
        style="w-[794px] lg:w-[700px] xs:w-full mx-auto"
      >
        <div className="w-full lg:w-[800px] leading-[1.4] xs:w-full text-wrap text-center mx-auto">
          What you get with our{" "}
          <span className="italic font-light">Magento Development Agency</span>
        </div>
      </SectionHeader>
      <ChooseUsCards />
    </OuterFlexComponent>
  </OuterComponent>
);

export default ChooseUs;

const ChooseUsCards = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  let firstDiv = [];
  let secondDiv = [];
  for (let i: number = 0; i < chooseUsData.length; i++) {
    if (i < 3) {
      firstDiv.push(
        <SingleCard data={chooseUsData[i]} isInView={isInView} key={i} />
      );
    } else {
      secondDiv.push(
        <SingleCard data={chooseUsData[i]} isInView={isInView} key={i} />
      );
    }
  }

  return (
    <div
      ref={ref}
      className="w-full flex flex-col xs:flex-row-reverse xs:justify-center items-center pt-[110px] lg:pt-[80px] sm:pt-[58px] pb-[78px] lg:pb-[58px] sm:pb-[65px] xs:pt-6 xs:pb-8"
    >
      <div className="flex xs:flex-col gap-[104px] lg:gap-[65px] sm:gap-[60px]">
        {firstDiv}
      </div>
      <div className="flex xs:flex-col gap-[104px] lg:gap-[65px] sm:gap-[60px] lg:-mt-2 sm:-mt-4 xs:mt-0 xs:-mr-5">
        {secondDiv}
      </div>
    </div>
  );
};

const SingleCard: React.FC<{ isInView: boolean; data: ChooseUs }> = ({
  isInView,
  data,
}) => (
  <div className="relative rotate-0 w-fit h-fit ">
    <div
      className={`relative group  z-0 cursor-pointer overflow-hidden bg-viewportBorder transition-all hover:bg-gradient-to-br  hover:from-borderPrimary hover:via-transparent hover:to-borderPrimary duration-1000 xxl:w-[200px] xxl:h-[200px] w-[180px] lg:w-[133px] lg:h-[133px] sm:w-[112px] sm:h-[112px] h-[180px] rotate-[45deg]  rounded-[28px] lg:rounded-5 sm:rounded-[17px] ${
        isInView
          ? `bg-viewportBorder  grayscale-0 `
          : "bg-transparent grayscale"
      } !p-[1px]`}
    >
      <div className="w-full h-full overflow-hidden bg-black rounded-[28px] lg:rounded-5 sm:rounded-[17px]">
        <div
          className={`w-full h-full bg-innerContainer sm:p-[9px]  relative shadow-buttonInset  rounded-[28px] lg:rounded-5 sm:rounded-[17px] flex flex-col justify-center items-center xxl:p-7 p-5 lg:p-4 `}
        >
          <Image
            width={400}
            height={400}
            src={data.image_url}
            alt="circle"
            className="-rotate-[45deg] relative z-40 w-[128px] lg:w-[99px] h-[128px] lg:h-[99px] sm:w-[78px] sm:h-[78px]"
          />
        </div>
      </div>
      <div className="absolute z-20 bg-transparent transition-all duration-1000 top-0 left-0 w-full h-full group-hover:block group-hover:bg-gradientOnHover "></div>
    </div>
    <ArrowDiv data={data} />
  </div>
);

const ArrowDiv: React.FC<{ data: ChooseUs }> = ({ data }) => (
  <div
    className={`absolute transition-none z-10 ${
      data.heading.includes("Custom")
        ? "top-[-46%] lg:top-[-52%] sm:top-[-48%] left-0 translate-x-[-168px] lg:translate-x-[-136px] sm:translate-x-[-126px] xs:translate-x-[56px]"
        : data.heading.includes("team")
        ? "top-[-80%] left-0 lg:left-[-10%] xs:top-[-40%] lg:top-[-88%] sm:-top-[85%] sm:left-[-17%] xs:left-0 xs:translate-x-[64px]"
        : data.heading.includes("Performance")
        ? "top-[-28%] lg:top-[-30%] left-0 translate-x-[188px] lg:translate-x-[146px] sm:translate-x-[75%]"
        : data.heading.includes("Adobe") || data.heading.includes("Seamless")
        ? "bottom-[-36%] left-0 translate-x-[-168px] lg:translate-x-[-120px] sm:translate-x-[-80px] lg:bottom-[-45%] xs:top-[-40%] "
        : data.heading.includes("delivery") ||
          data.heading.includes("Maintenance")
        ? "bottom-[-36%] left-0 translate-x-[168px] lg:translate-x-[120px] sm:translate-x-[65px] xs:translate-x-[-80px] lg:bottom-[-45%] sm:bottom-[-30%] xs:top-[-40%] "
        : ""
    } `}
  >
    <div
      className={`relative min-w-[188px] lg:min-w-[138px] ${
        data.heading.includes("Performance") && "xs:-mt-[15%] xs:-ml-[35%]"
      }`}
    >
      <Description text="" classes="text-center">
        <div
          className="!text-white text-xl font-medium lg:text-sm sm:text-xs"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
      </Description>
      <Image
        width={800}
        height={900}
        alt="image"
        className={`w-fit h-auto  ${
          data.heading.includes("Custom")
            ? "absolute -right-10 sm:-right-4 xs:left-6 xs:rotate-[80deg]"
            : data.heading.includes("team")
            ? "relative  mx-auto left-0 mt-3 rotate-[37deg] sm:mt-2  xs:-left-8 xs:-mt-2 xs:rotate-[80deg] "
            : data.heading.includes("Performance")
            ? "absolute -left-16 top-0 rotate-90 mr-8 sm:-left-8 xs:top-[70%] xs:left-[13%]"
            : data.heading.includes("Adobe") ||
              data.heading.includes("Seamless")
            ? "absolute top-[-78px] lg:top-[-65px] rotate-[70deg] sm:rotate-[80deg] right-2 sm:right-[40%] xs:rotate-[-15deg] xs:top-[120%] xs:left-[45%]"
            : data.heading.includes("delivery") ||
              data.heading.includes("Maintenance")
            ? "absolute top-[-76px] lg:top-[-65px] sm:-top-[120%]  sm:rotate-[-15deg] xs:rotate-[-15deg] xs:top-[120%] xs:left-[45%] left-2 sm:left-[30%]"
            : ""
        } lg:w-[53px] object-contain sm:w-[40px]`}
        src="/services/e-commerce-development/magento-development-services/why-choose-us/arrow.svg"
      />
    </div>
  </div>
);
