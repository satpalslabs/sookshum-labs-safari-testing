"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useRef } from "react";
import data from "./data/our-services.json";
import { useInView } from "@lib/use-in-view";
const Card = dynamic(() => import("@components/basic-components/card"));
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
import Description from "@components/basic-components/description";
import H6 from "@components/basic-components/headings/H6";
import H3 from "@components/basic-components/headings/H3";

type service = {
  title: string;
  description: string;
};

const services: service[] = data;
const OurServices: React.FC = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        id="our-services"
        buttonText="Our Services"
        description="Our team is committed to delivering unlimited data visualization options, including graphs, charts, and tables, to turn your raw data into clear insights that enable informed decision-making."
        style="w-[85.5%] lg:!w-[740px] xs:!w-full"
      >
        <div className="xs:w-full sm:w-[80%] mx-auto leading-[1.4] text-wrap text-center tracking-[-0.02em] capitalize">
          Our <span className="italic font-light w-full">Admin</span>{" "}
          Development Services
        </div>
      </SectionHeader>
      <MainContainer />
    </OuterFlexComponent>
  </OuterComponent>
);

export default OurServices;

const MainContainer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      id="our-services"
      className="grid grid-cols-3 gap-4 w-full sm:grid-cols-2 sm:grid-rows-3 xs:grid-rows-6 xs:grid-cols-1"
    >
      {services.map((item: service, index: number) => (
        <Card key={index} style="mt-0" isInView={isInView}>
          <div className="flex flex-col justify-between lg:p-3 p-4 gap-[28px] lg:gap-5 h-full">
            <div className="flex flex-col gap-4 lg:gap-3 sm:gap-2">
              <H3
                text={item.title}
                style="!text-white xxl:text-3xl !font-[500] !text-[20px] sm:!text-[14px] md:!leading-[1.4] !leading-[1.6]"
              />
              <Description
                text={""}
                classes="grow-0 h-fit sm:!text-xs text-lg !font-normal"
              >
                <div
                  className="unreset"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </Description>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
