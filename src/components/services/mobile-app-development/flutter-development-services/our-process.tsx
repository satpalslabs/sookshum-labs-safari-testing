"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useInView } from "framer-motion";
import { useRef } from "react";
import data from "./data/our-process.json";
const Card = dynamic(() => import("@components/basic-components/card"));
import Description from "@components/basic-components/description";
import H6 from "@components/basic-components/headings/H6";
import Image from "next/image";
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
type Process = {
  heading: string;
  description: string;
  imageUrl: string;
};
const process: Process[] = data;
const OurProcess = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        buttonText="Our Process"
        description="By leveraging the power of Flutter Our team works with you to enable faster-to-market solutions. "
        style="!w-[954px] sm:!w-[80%] xs:!w-full"
      >
        <div className="w-full xs:w-full text-center mx-auto xs:text-wrap">
          Our <span className="italic font-light">Flutter</span> Development
          Process
        </div>
      </SectionHeader>
      <ProcessMainContainer />
    </OuterFlexComponent>
  </OuterComponent>
);

export default OurProcess;

const ProcessMainContainer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className="grid grid-cols-4 sm:grid-cols-2 gap-4 w-full xs:grid-cols-1"
    >
      {process.map((processCard: Process, index: number) => (
        <Card key={index} style="mt-0" isInView={isInView}>
          <div className="flex flex-col gap-[24px] lg:gap-1 lg:p-3 p-4 sm:gap-[30px] sm:min-h-[260px] h-full">
            <div className="grow ">
              <Image
                blurDataURL="URL"
                placeholder="blur"
                height={300}
                className="w-[120px] lg:w-[80px] h-[120px] lg:h-[80px]"
                width={300}
                src={processCard.imageUrl}
                alt={processCard.heading}
              />
            </div>
            <div className="flex flex-col gap-4">
              <H6
                text={processCard.heading}
                classes="text-white w-[80%] xxl:text-3xl !font-[500] !text-[20px] md:w-full md:!leading-[1.4] !leading-[1.6]"
              />
              <Description
                children={null}
                text={processCard.description}
                classes="grow-0 h-fit text-lg !font-normal"
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
