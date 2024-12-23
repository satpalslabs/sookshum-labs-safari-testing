"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useRef } from "react";
import data from "./data/services.json";
import { useInView } from "@lib/use-in-view";
const Card = dynamic(() => import("@components/basic-components/card"));
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
import Description from "@components/basic-components/description";
import H4 from "@components/basic-components/headings/H4";
import Image from "next/image";

type ServiceType = {
  heading: string;
  description: string;
  image_url: string;
};

const services: ServiceType[] = data;
const Services: React.FC = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        id="our-services"
        buttonText="Our Services"
        description="We offer web app development services tailored to any business or industry, delivering custom solutions that build user trust and convert visitors into paying customers."
        style="w-[800px] lg:!w-[740px] xs:!w-[400px] 3xs:!w-[310px]"
      >
        <div className="xs:w-full sm:w-[80%] mx-auto leading-[1.4] sm:text-wrap text-center">
          Shopify Development Services{" "}
          <span className="italic font-light">We Offer </span>
        </div>
      </SectionHeader>
      <OurServicesMainContainer />
    </OuterFlexComponent>
  </OuterComponent>
);

export default Services;

const OurServicesMainContainer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className="w-full grid grid-cols-3 grid-rows-3 gap-5 sm:gap-3 xs:grid-cols-1 xs:grid-rows-9"
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
  <div className="relative rotate-0 w-fit h-full ">
    <Card
      style=" h-full p-8 pb-8 lg:p-7 sm:p-6 xs:p-5 justify-between gap-4 lg:gap-8 sm:gap-[60px] xs:gap-3"
      isInView={isInView}
    >
      <Image
        width={800}
        height={800}
        src={data.image_url}
        className="w-[120px] h-auto lg:w-[80px] "
        alt="image"
      />
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
