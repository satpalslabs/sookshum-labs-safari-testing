"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useRef } from "react";
import data from "./data/services.json";
import { useInView } from "@lib/use-in-view";
const Card = dynamic(() => import("@components/basic-components/card"));
import Description from "@components/basic-components/description";
import H6 from "@components/basic-components/headings/H6";
import Image from "next/image";
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";

type ServiceType = {
  image: string;
  heading: string;
  description: string;
};

const services: ServiceType[] = data["web-app-development-services"];
const Services: React.FC = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        buttonText="Services"
        description="We offer web app development services tailored to any business or industry, delivering custom solutions that build user trust and convert visitors into paying customers."
        style="w-[770px] text-wrap xs:w-full"
      >
        <div className="w-[1000px] leading-[1.4] lg:w-[735px] sm:w-[600px] xs:w-full xxl:w-[1060px] text-center text-wrap mx-auto">
          Web Application Development Offerings
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
    <div className="grid grid-cols-2 gap-4 w-full xs:grid-cols-1" ref={ref}>
      {services.map((service: ServiceType, index: number) => (
        <Card key={index} style="mt-0 group" isInView={isInView}>
          <div className="flex flex-col gap-[32px] sm:gap-3 p-4 lg:p-2">
            <div className="w-[100px] sm:w-[60px] h-[100px] sm:h-[60px] relative rounded-2xl overflow-hidden">
              <Image
                blurDataURL="URL"
                placeholder="blur"
                fill
                sizes=""
                alt=""
                src={service.image}
              />
            </div>
            <div className="flex flex-col gap-5 lg:gap-[12px] sm:gap-2 grow">
              <H6
                text={service.heading}
                classes="text-white w-[80%] lg:w-full"
              />
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
};
