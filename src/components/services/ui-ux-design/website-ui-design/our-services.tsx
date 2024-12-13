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
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        id="our-services"
        buttonText="Our Services"
        description="As a UI/UX design company, we offer comprehensive end-to-end services, including research, wireframing, UI design, and development. Explore our UI/UX services:"
        style="w-[800px] lg:!w-[740px] xs:!w-[400px] 3xs:!w-[310px]"
      >
        <div className="xs:w-full sm:w-[80%] mx-auto leading-[1.4] text-wrap text-center ">
          UI UX design services to Bring your Product Vision to Life
        </div>
      </SectionHeader>
      <OurServicesMainContainer />
    </OuterFlexComponent>
  </OuterComponent>
);

export default OurServices;

const OurServicesMainContainer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className="w-full grid grid-rows-2 grid-cols-3 gap-5 sm:gap-3 xs:grid-cols-1 xs:grid-rows-4"
    >
      {services.map((item: ServiceType, index: number) => (
        <SingleCard key={index} data={item} isInView={isInView} />
      ))}
    </div>
  );
};

const SingleCard: React.FC<{ isInView: boolean; data: ServiceType }> = ({
  isInView,
  data,
}) => (
  <div className="relative rotate-0 w-fit">
    <Card
      style="rounded-[32px] p-8 pb-8 lg:p-7 sm:p-6 xs:p-5 justify-between gap-5 lg:gap-3 sm:gap-2 h-full"
      isInView={isInView}
    >
      <H4 style="!leading-[1.25] !text-white" text={data.heading} />
      <Description
        children={null}
        classes="!text-lg lg:!text-sm sm:!text-xs w-full sm:!tracking-tight"
        text={data.description}
      />
    </Card>
  </div>
);
