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

type ServiceType = {
  text: string;
  prefix_image: string;
};

const services: ServiceType[] = data;
const Services: React.FC = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        buttonText="Our Services"
        description="We stay ahead of the latest developments in Magento and eCommerce technology. This commitment to staying updated means we can offer you the most advanced features and security measures, keeping your online store modern and competitive."
        style="w-[800px] lg:!w-[740px] xs:!w-[400px] 3xs:!w-[310px]"
      >
        <div className="xs:w-full sm:w-[80%] mx-auto leading-[1.4] sm:text-wrap text-center">
          Magento Development Services{" "}
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
      className={`grid grid-rows-4 w-full justify-center sm:grid-cols-3 grid-cols-4 gap-5 lg:gap-4 sm:grid-rows-6 xs:grid-cols-2 xs:!grid-rows-8 ${
        isInView ? "grayscale-0" : "grayscale"
      }`}
      // className={`flex flex-wrap justify-center items-center gap-5   ${
      //   isInView ? "grayscale-0" : "grayscale"
      // }`}
    >
      {services.map((service: ServiceType, ind: number) => (
        <Card
          style="!flex-row justify-between items-center !p-6 !pb-6 lg:!p-6 sm:!p-5 xxl:gap-4 lg:gap-4 shrink-0 sm:last:col-start-2  !rounded-[32px]"
          isInView={isInView}
        >
          <Image
            src={service.prefix_image}
            alt=""
            width="400"
            height="400"
            className="w-fit h-[45px] lg:h-[32px] xs:w-[24px] xs:h-[24px] shrink-0"
            blurDataURL="URL"
            placeholder="blur"
          />
          <Description classes="w-fit text-center !text-wrap " text="">
            <div
              className="xxl:text-[22px] xl:text-lg lg:text-sm xs:text-xs text-white tracking-tight grow h-fit font-medium leading-[1.3]"
              dangerouslySetInnerHTML={{ __html: service.text }}
            ></div>
          </Description>
        </Card>
      ))}
    </div>
  );
};
