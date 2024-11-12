"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useRef } from "react";
import data from "./data/services.json";
import { useInView } from "@lib/use-in-view";
const Card = dynamic(() => import("@components/basic-components/card"));
import Description from "@components/basic-components/description";
import H6 from "@components/basic-components/headings/H6";
import Image from "next/image";
import DarkButton from "@components/basic-components/button";
import Link from "next/link";
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";

type ServiceType = {
  image: string;
  heading: string;
  description: string;
  button: {
    label: string;
    link: string;
  };
};

const services: ServiceType[] = data["web-development-services"];
const Services: React.FC = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        id="our-services"
        buttonText="Our Services"
        description="We help transform your online presence with our expert website development services, designed to enhance user experience and drive measurable business results."
        style="w-[770px] text-wrap xs:w-full"
      >
        <div className="w-[1000px] leading-[1.4] capitalize lg:w-[735px] sm:w-[600px] xs:w-full xxl:w-[1060px] text-center text-wrap mx-auto">
          We build result-oriented websites open new growth opportunities
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
    <div ref={ref} className="grid grid-cols-3 gap-4 w-full xs:grid-cols-1">
      {services.map((service: ServiceType, index: number) => (
        <Card key={index} style="mt-0 group grow" isInView={isInView}>
          <div className="flex flex-col gap-[32px] sm:gap-3 p-4 lg:p-2 grow">
            <div className="w-[100px] sm:w-[60px] h-[100px] sm:h-[60px] relative rounded-2xl overflow-hidden">
              <Image
                blurDataURL="URL"
                placeholder="blur"
                fill
                sizes=""
                alt="image"
                src={service.image}
              />
            </div>
            <div className="flex flex-col gap-5 lg:gap-[12px] sm:gap-2 grow">
              <H6
                text={service.heading}
                classes="!text-white w-[80%] lg:w-full"
              />
              <Description
                children={null}
                text={service.description}
                classes="grow text-lg lg:w-[95%] grow !font-normal"
              />
            </div>
            <Link href={service.button.link}>
              <DarkButton text={service.button.label} style="" />
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};
