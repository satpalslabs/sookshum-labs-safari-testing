"use client";
import SectionHeader from "@components/basic-components/section-header";
import React, { useRef } from "react";
import data from "./data/services.json";
import { useInView } from "@lib/use-in-view";
import Card from "@components/basic-components/card";
import Description from "@components/basic-components/description";
import H6 from "@components/basic-components/headings/H6";
import Image from "next/image";

type ServiceType = {
  image: string;
  heading: string;
  description: string;
};

const services: ServiceType[] = data["web-app-development-services"];
const Services: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      className="px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px] flex flex-col gap-[80px] md:gap-[60px] sm:gap-12   items-center bg-black overflow-hidden max-w-[1920px] mx-auto"
    >
      <SectionHeader
        buttonText="Services"
        description="We offer web app development services tailored to any business or industry, delivering custom solutions that build user trust and convert visitors into paying customers."
        style="w-[770px] text-wrap xs:w-full"
      >
        <div className="w-[1000px] leading-[1.4] lg:w-[735px] sm:w-[600px] xs:w-full xxl:w-[1060px] text-center text-wrap mx-auto">
          Web Application Development Offerings
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
      <Card key={index} style="mt-0 group" isInView={isInView}>
        <div className="flex flex-col gap-[32px] sm:gap-3 p-4 lg:p-2">
          <div className="w-[100px] sm:w-[60px] h-[100px] sm:h-[60px] relative rounded-2xl overflow-hidden">
            <Image fill sizes="" alt="" src={service.image} />
          </div>
          <div className="flex flex-col gap-5 lg:gap-[12px] sm:gap-2 grow">
            <H6 text={service.heading} classes="text-white w-[80%] lg:w-full" />
            <Description
              children={null}
              text={service.description}
              classes="grow text-lg lg:w-[95%] grow !font-normal"
            />
          </div>
        </div>
      </Card>
    ))}
  </div>
);
