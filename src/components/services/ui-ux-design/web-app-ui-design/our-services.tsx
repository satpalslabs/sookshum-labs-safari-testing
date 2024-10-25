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
import H4 from "@components/basic-components/headings/H4";

type ServiceType = {
  heading: string;
  description: string;
};

const services: ServiceType[] = data;
const OurServices: React.FC = () => (
  <div id="our-services">
    <OuterComponent>
      <OuterFlexComponent>
        <SectionHeader
          buttonText="Our Services"
          description="As a UI/UX design company, we offer comprehensive end-to-end services, including research, wireframing, UI design, and development."
          style="w-[800px] lg:!w-[740px] sm:!w-[89%] xs:!w-[400px] 3xs:!w-[310px]"
        >
          <div className="xs:w-full text-wrap sm:w-full mx-auto leading-[1.4] sm:text-wrap text-center capitalize">
            UI UX design services to bring your product vision to life
          </div>
        </SectionHeader>
        <OurServicesMainContainer />
      </OuterFlexComponent>
    </OuterComponent>
  </div>
);

export default OurServices;

const OurServicesMainContainer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className="w-full grid grid-cols-6 gap-5 sm:gap-3 xs:grid-cols-1 xs:grid-rows-4"
    >
      {services.map((item: ServiceType, index: number) => (
        <SingleCard key={index} data={item} isInView={isInView} index={index} />
      ))}
    </div>
  );
};

const SingleCard: React.FC<{
  isInView: boolean;
  data: ServiceType;
  index: number;
}> = ({ isInView, data, index }) => (
  <div
    className={`relative rotate-0 ${index > 2 ? "col-span-3" : "col-span-2"}`}
  >
    <Card
      style="!rounded-[32px] !p-8 !pb-8 lg:!p-7 lg:!pb-[70px] sm:!p-6 sm:!pb-[55px] xs:!p-5 xs:!pb-[33px] justify-between !gap-5 lg:!gap-3 sm:!gap-2 h-full"
      isInView={isInView}
    >
      <H4 style="!text-white !leading-[1.25]" text={data.heading} />
      <Description
        children={null}
        classes="!text-lg lg:!text-sm sm:!text-xs w-full sm:!tracking-tight"
        text={data.description}
      />
    </Card>
  </div>
);
