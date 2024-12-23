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
        description="We provide web app development services customized for any business or industry, delivering tailored solutions that foster user trust and convert visitors into paying customers."
        style="w-[800px] lg:!w-[740px] xs:!w-[400px] 3xs:!w-[310px]"
      >
        <div className="xs:w-full sm:w-[80%] mx-auto leading-[1.4] capitalize sm:text-wrap text-center">
          Next.js Development Services{" "}
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
      className="w-full grid grid-cols-2 grid-rows-2 gap-5 sm:gap-3 xs:grid-cols-1 xs:grid-rows-4"
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
  <div className="relative rotate-0 w-fit ">
    <Card
      style="rounded-[32px] p-8 pb-8 lg:p-7 sm:p-6 xs:p-5 justify-between gap-4 lg:gap-5 sm:gap-[5 xs:gap-3 h-full"
      isInView={isInView}
    >
      <Image
        height={400}
        width={400}
        alt="image"
        src={data.image_url}
        className="w-[120px] h-auto lg:w-[80px] object-contain transition-all duration-1000"
      />
      <div className="flex flex-col gap-5 lg:gap-3 sm:gap-2">
        <H4 style="!text-white !leading-[1.25]" text={data.heading} />
        <Description
          children={null}
          classes="!text-lg lg:!text-sm sm:!text-xs w-full sm:!tracking-tight"
          text={data.description}
        />
      </div>
    </Card>
  </div>
);
