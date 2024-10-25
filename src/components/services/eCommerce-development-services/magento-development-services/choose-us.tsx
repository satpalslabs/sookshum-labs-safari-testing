"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useInView } from "framer-motion";
import { useRef } from "react";
import data from "./data/choose-us.json";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
import Card from "@components/basic-components/card";
import Description from "@components/basic-components/description";
type ChooseUs = {
  heading: string;
  image_url: string;
};
const chooseUsData: ChooseUs[] = data.services;
const ChooseUs = () => (
  <div id="why-us">
    <OuterComponent>
      <OuterFlexComponent>
        <SectionHeader
          buttonText="Why choose us?"
          description="Choose us for our deep expertise in Magento development, personalized solutions tailored to your business needs, and a proven track record of successful projects that drive growth and enhance user experience."
          style="w-[794px] lg:w-[700px] xs:w-full mx-auto"
        >
          <div className="w-full lg:w-[800px] leading-[1.4] capitalize xs:w-full text-wrap text-center mx-auto">
            What you get with our{" "}
            <span className="italic font-light">
              Magento development agency
            </span>
          </div>
        </SectionHeader>
        <ChooseUsCards />
      </OuterFlexComponent>
    </OuterComponent>
  </div>
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
    <Card
      style="xxl:w-[200px] xxl:h-[200px] w-[180px] lg:w-[133px] lg:h-[133px] sm:w-[112px] sm:h-[112px] h-[180px] !rounded-[28px] lg:!rounded-5 sm:!rounded-[17px] xxl:!p-7 !p-5 lg:!p-4 rotate-[45deg]"
      isInView={isInView}
    >
      <img src={data.image_url} className="-rotate-[45deg]" />
    </Card>
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
      <img
        className={`  ${
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
        } lg:w-[53px] sm:w-[40px]`}
        src="/services/e-commerce-development/magento-development-services/why-choose-us/arrow.svg"
      />
    </div>
  </div>
);
