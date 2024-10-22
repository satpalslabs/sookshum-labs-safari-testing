"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useRef } from "react";
import data from "./data/choose-us.json";
import { useInView } from "@lib/use-in-view";
const Card = dynamic(() => import("@components/basic-components/card"));
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
import Description from "@components/basic-components/description";
import H4 from "@components/basic-components/headings/H4";

type choose_us = {
  heading: string;
  description: string;
  image_url: string;
};

const chooseUsData: choose_us[] = data;
const ChooseUs: React.FC = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        buttonText="Why choose us?"
        description="By leveraging the power of Next.js Our team works with you to enable faster-to-market solutions. "
        style="w-[960px] lg:!w-[740px] xs:!w-full"
      >
        <div className="xs:w-full sm:w-[80%] mx-auto leading-[1.4] text-wrap text-center">
          Why Choose sookshum labs for{" "}
          <span className="italic font-light"> Next.js </span>Web Development
        </div>
      </SectionHeader>
      <OurServicesMainContainer />
    </OuterFlexComponent>
  </OuterComponent>
);

export default ChooseUs;

const OurServicesMainContainer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className="w-full grid grid-cols-2 grid-rows-2 gap-5 sm:gap-3 xs:grid-cols-1 xs:grid-rows-4"
    >
      {chooseUsData.map((item: choose_us, index: number) => (
        <SingleCard key={index} data={item} isInView={isInView} />
      ))}
    </div>
  );
};

const SingleCard: React.FC<{ isInView: boolean; data: choose_us }> = ({
  isInView,
  data,
}) => (
  <div className="relative rotate-0  ">
    <Card
      style="!rounded-[32px] !p-8 !pb-8 lg:!p-7 sm:!p-6 xs:!p-5 justify-between !gap-[51px] lg:!gap-[62px] sm:!gap-[49px] xs:!gap-3 h-full"
      isInView={isInView}
    >
      <img src={data.image_url} className="w-[120px] h-auto lg:w-[80px] " />
      <div className="flex flex-col gap-5 lg:gap-3 sm:gap-2">
        <H4 style="!leading-[1.25]" text={data.heading} />
        <Description
          children={null}
          classes="!text-lg lg:!text-sm sm:!text-xs w-full sm:!tracking-tight"
          text={data.description}
        />
      </div>
    </Card>
  </div>
);