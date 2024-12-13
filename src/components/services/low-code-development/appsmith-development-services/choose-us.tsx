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
import Image from "next/image";
import H6 from "@components/basic-components/headings/H6";

type choose_us = {
  title: string;
  description: string;
  image: string;
};

const chooseUsData: choose_us[] = data;
const ChooseUs: React.FC = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        id="why-us"
        buttonText="Why choose us?"
        description="For the past five years, we have collaborated with various low-code development platforms, assisting numerous businesses in achieving successful digital transformations within budget and on schedule."
        style="xxl:!w-[75%] !w-full lg:!w-[740px] xs:!w-full"
      >
        <div className="xs:w-full sm:w-[80%] w-full mx-auto leading-[1.4] text-wrap text-center tracking-[-0.02em] ">
          Reasons to choose our{" "}
          <span className="italic font-light"> Low-code </span> Experts
        </div>
      </SectionHeader>
      <MainContainer />
    </OuterFlexComponent>
  </OuterComponent>
);

export default ChooseUs;

const MainContainer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="grid grid-cols-3 gap-4 w-full xs:grid-cols-1">
      {chooseUsData.map((chooseUs: choose_us, index: number) => (
        <Card key={index} style="mt-0 pb-4" isInView={isInView}>
          <div className="flex flex-col justify-between lg:p-3 p-4 gap-[22px] lg:gap-5 h-full">
            <div className="grow ">
              <Image
                blurDataURL="URL"
                placeholder="blur"
                height={300}
                className="w-[120px] lg:w-[80px] h-[120px] lg:h-[80px]"
                width={300}
                src={chooseUs.image}
                alt={chooseUs.title}
              />
            </div>
            <div className="flex flex-col gap-4 lg:gap-3 sm:gap-2">
              <H6
                text={chooseUs.title}
                classes="!text-white xxl:text-3xl !font-[500] !text-[20px] sm:!text-[14px] md:!leading-[1.4] !leading-[1.6]"
              />
              <Description
                children={null}
                text={chooseUs.description}
                classes="grow-0 h-fit sm:!text-xs text-lg !font-normal"
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
