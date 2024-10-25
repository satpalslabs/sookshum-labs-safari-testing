"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useInView } from "framer-motion";
import { useRef } from "react";
import data from "./data/choose-us.json";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
import Card from "@components/basic-components/card";
import Description from "@components/basic-components/description";
import H4 from "@components/basic-components/headings/H4";
import DarkButton from "@components/basic-components/button";
type ChooseUs = {
  heading: string;
  description: string;
  button_text: string;
};

const chooseUsData: ChooseUs[] = data;
const ChooseUs = () => (
  <div id="why-us">
    <OuterComponent>
      <OuterFlexComponent>
        <SectionHeader
          buttonText="Why choose us?"
          description="We are quite good at this as we have been doing this for the past 8 years. We bring our long term expertise with Shopify to the table. Here’s why partnering with us makes all the difference:"
          style="w-[994px] sm:w-[700px] xs:w-full mx-auto"
        >
          <div className="w-[full] sm:w-[800px] leading-[1.4] capitalize xs:w-full text-wrap text-center mx-auto">
            Why grow with Sookshum Labs{" "}
            <span className="italic font-light">Shopify Agency?</span>
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

  return (
    <div ref={ref} className="w-full">
      <div
        className={`w-fit mx-auto relative grid grid-rows-3 grid-cols-2 translate-x-[146px] lg:translate-x-[89px] xs:translate-x-[10px] -mb-[64px] sm:-mb-[50px] xs:-mb-[32px] `}
      >
        {chooseUsData.map((item: ChooseUs, index: number) => (
          <SingleCard
            key={index}
            index={index}
            data={item}
            isInView={isInView}
          />
        ))}
        <img
          className={`absolute w-[370px] sm:w-[239px] top-[40.77%] translate-x-[-146px] lg:translate-x-[-89px] xs:translate-x-[-241px] -z-10 h-[233px] sm:h-[177px] object-cover rounded-[32px] xs:hidden  transition-all duration-1000 ${
            isInView ? "grayscale-0" : "grayscale"
          }`}
          src="/services/e-commerce-development/shopify-development-services/why-us/bg-image.png"
        ></img>
      </div>
    </div>
  );
};

const SingleCard: React.FC<{
  isInView: boolean;
  data: ChooseUs;
  index: number;
}> = ({ isInView, data, index }) => (
  <div
    className={`relative rotate-0 w-[564px] lg:w-[465px] sm:w-[354px] xs:w-[300px] h-full border-borderDarkButton ${
      index == 1
        ? "row-start-2 col-start-2 -mt-[32px] sm:-mt-[25px] xs:-mt-[16px] -ml-[142px] lg:-ml-[89px] xs:-ml-[121px]"
        : index > 1
        ? "row-start-3 col-start-1 -mt-[64px] sm:-mt-[50px] xs:-mt-[32px]"
        : ""
    }`}
  >
    <div
      className={`shadow-buttonInset p-6 sm:p-[18px] pb-[60px] sm:pb-[48px] xs:pb-[38px] rounded-[32px] sm:rounded-[24px] h-full transition-all duration-1000 border-[1.5px] cursor-auto bg-innerBlurContainer ${
        isInView
          ? "border-viewportBorder  grayscale-0"
          : "border-transparent grayscale"
      } `}
      style={{
        boxShadow: "1.75px 3.49px 13.98px 0px #F8F8F80F inset",
        backdropFilter: "blur(87.34871673583984px)",
        WebkitBackdropFilter: "blur(17.3487px)",
      }}
    >
      <div className="flex flex-col gap-5 xxl:gap-8 sm:gap-[15px]">
        <div className="flex justify-between items-center">
          <DarkButton
            style="!text-secondary !bg-innerContainer sm:!px-[18px] sm:!h-[33px] sm:!text-[10px] md:!text-[12px] sm:!text-[10px] "
            text={data.button_text}
          />
          <H4
            style="!leading-[1.25] !font-medium !text-[20px] sm:!text-sm !text-secondary"
            text={`00${index + 1}`}
          />
        </div>
        <div className="flex flex-col gap-3 sm:gap-[10px]">
          <H4
            style="!leading-[1.25] !text-[20px] sm:!text-sm !text-white"
            text={data.heading}
          />
          <Description
            children={null}
            classes="!text-base !text-white sm:!text-xs w-full sm:!tracking-tight !font-[400]"
            text={data.description}
          />
        </div>
      </div>
    </div>
  </div>
);
