"use client";
import SectionHeader from "@components/basic-components/section-header";
import React, { useRef } from "react";
import data from "./data/ui&ux-services.json";
import Card from "@components/basic-components/card";
import Image from "next/image";
import Description from "@components/basic-components/description";
import H4 from "@components/basic-components/headings/H4";
import { useInView } from "@lib/use-in-view";

type ServiceType = {
  "image-path": string;
  heading: string;
  description: string;
};

const services: ServiceType[] = data.services;
const Services: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      className="px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px] flex flex-col gap-[80px] md:gap-[60px] sm:gap-12 items-center bg-black overflow-hidden max-w-[1920px] mx-auto"
    >
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
      <ServiceCards isInView={isInView} />
    </section>
  );
};

export default Services;

const ServiceCards: React.FC<{ isInView: boolean }> = ({ isInView }) => (
  <div className="grid grid-cols-2 gap-4 w-full xs:grid-cols-1">
    {services.map((service: ServiceType, index: number) => (
      <Card key={index} style="mt-0" isInView={isInView}>
        <div className="flex flex-col gap-[14px]">
          <div className="w-[152px] h-[152px] lg:w-[108px] lg:h-[108px] sm:w-[80px] sm:h-[80px] relative">
            <Image fill alt="" src={service["image-path"]} />
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
