"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useRef } from "react";
import data from "./data/services.json";
import { useInView } from "@lib/use-in-view";
const Card = dynamic(() => import("@components/basic-components/card"));
import Description from "@components/basic-components/description";
import H6 from "@components/basic-components/headings/H6";
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";

type ServiceType = {
  heading: string;
  description: string;
};

const services: ServiceType[] = data["e-commerce-services"];
const Services: React.FC = () => (
  <div id="our-services">
    <OuterComponent>
      <OuterFlexComponent>
        <SectionHeader
          buttonText="Services"
          description="We accelerate your success with our fast and reliable eCommerce services tailored to your business to help achieve your business goals efficiently and effectively"
          style="w-[800px] xs:w-full mx-auto"
        >
          <div className="xs:w-full xs:text-wrap text-center leading-[1.4] capitalize">
            Our <span className="italic font-light">eCommerce </span>
            services at a glance
          </div>
        </SectionHeader>
        <ServiceCards />
      </OuterFlexComponent>
    </OuterComponent>
  </div>
);

export default Services;

const ServiceCards: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div className="flex flex-col gap-5">
      <FirstGrid isInView={isInView} />
      <SecondGrid isInView={isInView} />
      <ThirdGrid isInView={isInView} />
    </div>
  );
};

const FirstGrid: React.FC<{ isInView: boolean }> = ({ isInView }) => (
  <div className="grid grid-cols-2 w-full gap-5 xs:grid-cols-1 ">
    <Card style="mt-0 sm:grow-0 sm:h-fit sm:shrink-0 " isInView={isInView}>
      <ServiceCard style="" service={services[0]} />
    </Card>
    <Card style="mt-0 hidden sm:block" isInView={isInView}>
      <ServiceCard style="" service={services[1]} />
    </Card>
    <div
      className={`grid grid-rows-2 gap-5 sm:grid-rows-none sm:grid-cols-2 xs:grid-cols-1 sm:col-span-full`}
    >
      <Card style="mt-0 sm:hidden" isInView={isInView}>
        <ServiceCard style="" service={services[1]} />
      </Card>
      <Card style="mt-0" isInView={isInView}>
        <ServiceCard style="" service={services[2]} />
      </Card>
      <Card style="mt-0 hidden sm:block" isInView={isInView}>
        <ServiceCard style="" service={services[3]} />
      </Card>
    </div>
  </div>
);

const SecondGrid: React.FC<{ isInView: boolean }> = ({ isInView }) => (
  <div className="flex w-full gap-5 sm:grid sm:grid-cols-2 xs:grid-cols-1 ">
    <Card
      style="mt-0 w-[41.93%] sm:w-[50%] shrink-0 sm:hidden "
      isInView={isInView}
    >
      <ServiceCard style="" service={services[3]} />
    </Card>
    <Card
      style="mt-0 grow sm:grow-0 sm:w-[50%] sm:w-full sm:shrink-0"
      isInView={isInView}
    >
      <ServiceCard style="" service={services[4]} />
    </Card>
    <Card style="mt-0 hidden sm:block" isInView={isInView}>
      <ServiceCard
        style="min-h-[212px] sm:min-h-0 sm:row-span-1"
        service={services[5]}
      />
    </Card>
  </div>
);

const ThirdGrid: React.FC<{ isInView: boolean }> = ({ isInView }) => (
  <div className="grid grid-cols-3 grid-rows-9 w-full gap-5 sm:grid-cols-2 xs:!flex xs:flex-col sm:flex sm:flex-wrap">
    <Card style="mt-0 row-span-6  col-span-1 sm:hidden" isInView={isInView}>
      <ServiceCard style="min-h-[212px] sm:min-h-0" service={services[5]} />
    </Card>
    <Card
      style="mt-0 row-span-3  sm:w-[48.5%] xs:w-full col-span-1"
      isInView={isInView}
    >
      <ServiceCard style="min-h-[212px] sm:min-h-0" service={services[6]} />
    </Card>
    <Card
      style="mt-0 row-span-4 sm:w-[48.5%] xs:w-full  col-span-1"
      isInView={isInView}
    >
      <ServiceCard style="min-h-[212px] sm:min-h-0" service={services[7]} />
    </Card>
    <Card
      style="mt-0 row-span-3 sm:w-[48.5%] xs:w-full col-span-1"
      isInView={isInView}
    >
      <ServiceCard style="min-h-[212px] sm:min-h-0" service={services[8]} />
    </Card>
    <Card
      style="mt-0 row-span-5 col-span-1  sm:w-[48.5%] xs:w-full  sm:min-h-full sm:row-span-1"
      isInView={isInView}
    >
      <ServiceCard style="min-h-[212px] sm:min-h-full" service={services[9]} />
    </Card>
    <Card style="mt-0 row-span-3 col-span-2" isInView={isInView}>
      <ServiceCard style="min-h-[212px] sm:min-h-0" service={services[10]} />
    </Card>
  </div>
);

const ServiceCard: React.FC<{ service: ServiceType; style: string }> = ({
  service,
  style,
}) => (
  <div
    className={`flex flex-col gap-5 grow p-4 lg:px-2 xxl:min-h-[auto] ${style}`}
  >
    <H6 text={service.heading} classes="text-white" />
    <Description
      text={""}
      classes="text-lg font-[400] leading-tight grow-1 !font-normal"
    >
      <div dangerouslySetInnerHTML={{ __html: service.description }} />
    </Description>
  </div>
);
