"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useRef } from "react";
import data from "./data/ui&ux-services.json";
const Card = dynamic(() => import("@components/basic-components/card"));
import Image from "next/image";
import Description from "@components/basic-components/description";
import H4 from "@components/basic-components/headings/H4";
import { useInView } from "@lib/use-in-view";
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";

type ServiceType = {
  "image-path": string;
  heading: string;
  description: string;
};

const services: ServiceType[] = data.services;
const Services: React.FC = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        buttonText="Services"
        description="Transform your user experience with our expert UI/UX design services. We create intuitive, engaging interfaces tailored to your needs."
        style=""
      >
        <div className="">
          Our <span className="italic font-light">UI/UX Design </span>
          Services
        </div>
      </SectionHeader>
      <ServiceCards />
    </OuterFlexComponent>
  </OuterComponent>
);

export default Services;

const ServiceCards: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-4 w-full xs:grid-cols-1">
      {services.map((service: ServiceType, index: number) => (
        <Card key={index} style="mt-0" isInView={isInView}>
          <div className="flex flex-col gap-[14px]">
            <div className="w-[152px] h-[152px] lg:w-[108px] lg:h-[108px] sm:w-[80px] sm:h-[80px] relative">
              <Image
                blurDataURL="URL"
                placeholder="blur"
                fill
                alt=""
                src={service["image-path"]}
              />
            </div>
            <div className="flex flex-col gap-5 px-4 lg:px-2">
              <H4 style="" text={service.heading} />
              <Description
                children={null}
                text={service.description}
                classes="text-lg !font-normal"
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
