"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import data from "./data/benefits.json";
import Description from "@components/basic-components/description";
import H6 from "@components/basic-components/headings/H6";
import SectionHeader from "@components/basic-components/section-header";
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
const Card = dynamic(() => import("@components/basic-components/card"));
type Benefit = {
  title: string;
  description: string;
};
const whyUsData: Benefit[] = data.benefits;
const Benefits = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        buttonText="Benefits"
        description="Discover why low-code/no-code is the perfect tool for building MVPs and scaling your business."
        style="w-[900px] lg:w-[60%] sm:w-[65%] xs:w-full"
      >
        <div className="w-[90%] lg:w-full leading-[1.3] text-wrap xs:w-full text-center mx-auto xs:text-wrap xs:tracking-tight">
          Why <span className="italic font-light"> Low-Code/No-Code </span> is a
          Perfect Fit for Startups{" "}
        </div>
      </SectionHeader>
      <BenefitCards />
    </OuterFlexComponent>
  </OuterComponent>
);

export default Benefits;

const BenefitCards: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div className="w-full flex flex-col gap-4" ref={ref}>
      <div className="grid grid-cols-2 gap-4 w-full xs:grid-cols-1">
        {whyUsData.map((indexCard: Benefit, index: number) => (
          <BenefitCard isInView={isInView} item={indexCard} key={index} />
        ))}
      </div>
    </div>
  );
};

const BenefitCard: React.FC<{ isInView: boolean; item: Benefit }> = ({
  isInView,
  item,
}) => (
  <Card style="mt-0 xxl:py-[30px]" isInView={isInView}>
    <div className={`flex flex-col gap-5 p-4 pb-0 xxl:pb-4 sm:gap-2 h-full`}>
      <H6
        text={item.title}
        classes="text-white w-[80%] grow-0 xxl:text-2xl md:text-[20px] md:w-full md:leading-[1.2] leading-[1.6]"
      />
      <Description
        children={null}
        text={item.description}
        classes="grow h-fit text-lg !font-normal"
      />
    </div>
  </Card>
);
