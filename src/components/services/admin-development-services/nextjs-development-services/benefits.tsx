"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useInView } from "framer-motion";
import { useRef } from "react";
import data from "./data/benefits.json";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
import Description from "@components/basic-components/description";
import H4 from "@components/basic-components/headings/H4";
type benefit = {
  heading: string;
  description: string;
};

const benefitsData: benefit[] = data;
const Benefits = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        buttonText="Benefits"
        description="Discover the top use cases where Next.js shines for performance, scalability, and seamless user experiences."
        style="w-[994px] sm:w-[700px] xs:w-full mx-auto"
      >
        <div className="w-[full] sm:w-[800px] leading-[1.4] xs:w-full text-wrap text-center mx-auto">
          Best Use Cases For <span className="italic font-light">Next.Js</span>
        </div>
      </SectionHeader>
      <BenefitCards />
    </OuterFlexComponent>
  </OuterComponent>
);

export default Benefits;

const BenefitCards = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="w-full">
      <div
        className={`w-fit mx-auto relative grid grid-rows-3 grid-cols-2 translate-x-[146px] lg:translate-x-[89px] xs:translate-x-[0px] -mb-[64px] sm:-mb-[50px] xs:-mb-[32px]`}
      >
        {benefitsData.map((item: benefit, index: number) => (
          <SingleCard
            key={index}
            index={index}
            data={item}
            isInView={isInView}
          />
        ))}
      </div>
    </div>
  );
};

const SingleCard: React.FC<{
  isInView: boolean;
  data: benefit;
  index: number;
}> = ({ isInView, data, index }) => (
  <div
    className={`relative rotate-0 w-[564px] lg:w-[465px]  sm:w-[354px] xs:w-[300px] h-full ${
      index == 1
        ? "row-start-2 col-start-2 -mt-[32px] sm:-mt-[25px] xs:-mt-[16px] -ml-[142px] lg:-ml-[89px] xs:-ml-[131px]"
        : index > 1
        ? "row-start-3 col-start-1 -mt-[64px] sm:-mt-[50px] xs:-mt-[32px]"
        : ""
    }`}
  >
    <div
      className={`shadow-buttonInset transition-all duration-1000 p-6 sm:p-[18px] h-full pb-[60px] sm:pb-[48px] xs:pb-[34px] rounded-[32px] sm:rounded-[24px] border-[1.5px] cursor-auto bg-[#28282866] hover:bg-gradientOnHover ${
        isInView
          ? "border-viewportBorder grayscale-0"
          : "border-transparent grayscale"
      } `}
      style={{
        boxShadow: "1.75px 3.49px 13.98px 0px #F8F8F80F inset",
        backdropFilter: "blur(87.34871673583984px)",
      }}
    >
      <div className="flex flex-col gap-5 xxl:gap-8 sm:gap-[15px]">
        <H4
          style="!leading-[1.25] !text-[20px] sm:!text-sm !text-light"
          text={`00${index + 1}`}
        />
        <div className="flex flex-col gap-3 sm:gap-[10px]">
          <H4
            style="!leading-[1.25] !text-[20px] sm:!text-sm"
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
