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
  title: string;
  description: string;
};

const benefitsData: benefit[] = data;
const Benefits = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        id="benefits"
        buttonText="Benefits "
        description="Discover the top use cases where Flutter shines for performance, scalability, and seamless user experiences."
        style="w-[1000px] w-full xs:px-10"
      >
        <div className="xs:w-full xs:text-wrap xs:text-center leading-[1.4] ">
          Best Use Cases for <span className="italic font-light">Flutter </span>
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
        className={`w-full mx-auto relative grid grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5`}
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
    className={`shadow-buttonInset h-full rounded-[32px] sm:rounded-[24px]   cursor-pointer relative w-full group  z-0 overflow-hidden    bg-viewportBorder transition-all hover:bg-gradient-to-br  hover:from-borderPrimary hover:via-transparent hover:to-borderPrimary duration-1000 p-[1px] ${
      isInView ? "bg-viewportBorde grayscale-0" : "bg-transparent grayscale"
    }   `}
  >
    <div
      className={`rounded-[32px] sm:rounded-[24px]  p-0 w-full sm:w-full h-full overflow-hidden bg-black `}
    >
      <div
        className={`h-full  p-6 pb-12 lg:pb-6 relative shadow-buttonInset rounded-[32px] sm:rounded-[24px] flex flex-col w-full ${
          (index + 1) % 2 == 0 ? "bg-gradientOnHover" : "bg-[#28282866]"
        } `}
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
              style="!leading-[1.25] !text-white !text-[20px] sm:!text-sm"
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
    </div>
    <div className="absolute z-20 bg-transparent transition-all duration-1000 top-0 left-0 w-full h-full group-hover:block group-hover:bg-gradientOnHover "></div>
  </div>
);
