"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useRef } from "react";
import data from "./data/our-services.json";
import { useInView } from "@lib/use-in-view";
const Card = dynamic(() => import("@components/basic-components/card"));
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
import Description from "@components/basic-components/description";
import Image from "next/image";
import H6 from "@components/basic-components/headings/H6";

type service = {
  title: string;
  description: string;
  image: string;
};

const ourServiceData: service[] = data;
const OurServices: React.FC = () => (
  <div id="our-services">
    <OuterComponent>
      <OuterFlexComponent>
        <SectionHeader
          buttonText="Our services"
          description="Sookshum Labs specializes in Retool development, delivering tailored solutions to address your business needs."
          style="w-[85.5%] lg:!w-[740px] xs:!w-full"
        >
          <div className="xs:w-full sm:w-[80%] mx-auto leading-[1.4] text-wrap text-center tracking-[-0.02em] capitalize">
            Get Secure, Fast, And Highly Adaptable Retool Solutions With{" "}
            <span className="italic font-light"> Sookshum Labs </span>
          </div>
        </SectionHeader>
        <MainContainer />
      </OuterFlexComponent>
    </OuterComponent>
  </div>
);

export default OurServices;

const MainContainer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className="grid grid-cols-3 sm:grid-cols-2 gap-4 w-full xs:grid-cols-1"
    >
      {ourServiceData.map((ourservice: service, index: number) => (
        <Card key={index} style="mt-0 !pb-4" isInView={isInView}>
          <div className="flex flex-col justify-between lg:p-3 p-4 gap-[28px] lg:gap-5 h-full">
            <div className="grow ">
              <Image
                blurDataURL="URL"
                placeholder="blur"
                height={300}
                className="w-[120px] lg:w-[80px] h-[120px] lg:h-[80px]"
                width={300}
                src={ourservice.image}
                alt={ourservice.title}
              />
            </div>
            <div className="flex flex-col gap-4 lg:gap-3 sm:gap-2">
              <H6
                text={ourservice.title}
                classes="!text-white xxl:text-3xl !font-[500] !text-[20px] sm:!text-[14px] md:!leading-[1.4] !leading-[1.6]"
              />
              <Description
                children={null}
                text={ourservice.description}
                classes="grow-0 h-fit sm:!text-xs text-lg !font-normal"
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
