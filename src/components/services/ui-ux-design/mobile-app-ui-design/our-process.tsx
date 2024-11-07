"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useInView } from "framer-motion";
import { useRef } from "react";
import data from "./data/our-process.json";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
import Description from "@components/basic-components/description";
import H4 from "@components/basic-components/headings/H4";
type benefit = {
  title: string;
  description: string;
};

const ourProcessData: benefit[] = data;
const OurProcess = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        id="our-process"
        buttonText="Our Process "
        description="Choose Retool for unmatched flexibility, seamless integrations, and developer-friendly tools that enable you to create robust internal apps more quickly than other low-code platforms."
        style="!w-[1200px] lg:!w-[700px] sm:!w-[600px] xs:!w-full"
      >
        <div className="xs:w-full sm:w-[90%] sm:text-wrap xs:text-center  leading-[1.4]">
          What our Mobile Design Process Looks Like
        </div>
      </SectionHeader>
      <BenefitCards />
    </OuterFlexComponent>
  </OuterComponent>
);

export default OurProcess;

const BenefitCards = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="w-full">
      <div
        className={`w-full mx-auto relative grid grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-5 lg:gap-4`}
      >
        {ourProcessData.map((item: benefit, index: number) => (
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
    className={`shadow-buttonInset transition-all duration-1000 p-6 sm:p-[18px] h-full rounded-[32px] sm:rounded-[24px] border-[1.5px]  cursor-pointer hover:bg-gradientOnHover ${
      isInView
        ? "border-viewportBorder grayscale-0"
        : "border-transparent grayscale"
    }  ${(index + 1) % 2 == 0 ? "bg-gradientOnHover" : "bg-[#28282866]"} } `}
    style={{
      boxShadow: "1.75px 3.49px 13.98px 0px #F8F8F80F inset",
      backdropFilter: "blur(87.34871673583984px)",
      WebkitBackdropFilter: "blur(17.3487px)",
    }}
  >
    <div className="flex flex-col gap-5 xxl:gap-8 sm:gap-[15px]">
      <H4
        style="!leading-[1.25] !text-[20px] sm:!text-sm !text-secondary"
        text={`00${index + 1}`}
      />
      <div className="flex flex-col gap-3 sm:gap-[10px] grow">
        <H4
          style="!leading-[1.25] !text-[20px] !text-white sm:!text-sm"
          text={data.title}
        />
        <Description
          children={null}
          classes="!text-base !text-white sm:!text-xs w-full sm:!tracking-tight !font-[400]"
          text={data.description}
        />
      </div>
    </div>
  </div>
);
