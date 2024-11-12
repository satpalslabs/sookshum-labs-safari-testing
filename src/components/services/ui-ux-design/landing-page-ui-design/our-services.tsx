"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useRef } from "react";
import data from "./data/services.json";
import { useInView } from "@lib/use-in-view";
const Card = dynamic(() => import("@components/basic-components/card"));
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
import Image from "next/image";
import Description from "@components/basic-components/description";

const services: string[] = data;
const OurServices: React.FC = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        id="our-services"
        buttonText="Our Services"
        description="As a UI/UX design agency, we offer comprehensive end-to-end services, including research, wireframing, UI design, and development."
        style="w-[800px] lg:!w-[740px] sm:!w-full xs:!w-[400px] 3xs:!w-[310px]"
      >
        <div className="xs:w-full mx-auto leading-[1.4] sm:text-wrap text-center capitalize">
          What Our landing page agency does!
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
      className={`grid grid-rows-4 w-full justify-center grid-cols-3 gap-5 lg:gap-4 sm:grid-rows-5 xs:grid-cols-1 xs:!grid-rows-15 ${
        isInView ? "grayscale-0" : "grayscale"
      }`}
    >
      {services.map((service: string, ind: number) => (
        <Card
          style="!flex-row items-center !p-6 lg:!p-6 sm:!p-5 xxl:gap-4 gap-3 shrink-0  !rounded-[32px]"
          isInView={isInView}
          key={ind}
        >
          <Image
            src={
              "/services/ui-ux-design/landing-page-ui-design/check-circle.svg"
            }
            alt="image"
            width="400"
            height="400"
            className="w-[20px] h-[20px] shrink-0"
            blurDataURL="URL"
            placeholder="blur"
          />
          <Description classes="w-fit  !text-wrap " text="">
            <div
              className="text-[17px] lg:text-base sm:text-sm text-white tracking-tight grow h-fit font-normal leading-[1.3]"
              dangerouslySetInnerHTML={{ __html: service }}
            ></div>
          </Description>
        </Card>
      ))}
    </div>
  );
};
