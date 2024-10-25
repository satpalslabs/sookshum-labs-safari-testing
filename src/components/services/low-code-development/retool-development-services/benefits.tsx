"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useInView } from "framer-motion";
import { useRef } from "react";
import data from "./data/benefits.json";
import Image from "next/image";
const Card = dynamic(() => import("@components/basic-components/card"));
import Description from "@components/basic-components/description";
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
import H6 from "@components/basic-components/headings/H6";
type ChooseUs = {
  image_url: string;
  heading: string;
  description: string;
};
const chooseUsData: ChooseUs[] = data;
const Benefits = () => (
  <div id="benefits">
    <OuterComponent>
      <OuterFlexComponent>
        <SectionHeader
          buttonText="Benefits"
          description="Choose Retool for unmatched flexibility, seamless integrations, and developer-friendly tools that enable you to create powerful internal apps more quickly than with other low-code platforms."
          style="xxl:!w-[60%] !w-[80%] xs:!w-full"
        >
          <div className="w-full xs:w-full text-wrap text-center mx-auto leading-[1.4] capitalize">
            Why choose Retool over other <br className="xs:hidden" />{" "}
            <span className="italic font-light">low-code </span>platforms?
          </div>
        </SectionHeader>
        <BenefitsCards />
      </OuterFlexComponent>
    </OuterComponent>
  </div>
);

export default Benefits;

const BenefitsCards: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className="grid grid-cols-3 sm:grid-cols-2 gap-4 w-full xs:grid-cols-1"
    >
      {chooseUsData.map((benefit: ChooseUs, index: number) => (
        <Card key={index} style="mt-0 !pb-4" isInView={isInView}>
          <div className="flex flex-col justify-between lg:p-3 p-4 gap-[28px] lg:gap-5 h-full">
            <div className="grow ">
              <Image
                blurDataURL="URL"
                placeholder="blur"
                height={300}
                className="w-[120px] lg:w-[80px] h-[120px] lg:h-[80px]"
                width={300}
                src={benefit.image_url}
                alt={benefit.heading}
              />
            </div>
            <div className="flex flex-col gap-4 lg:gap-3 sm:gap-2">
              <H6
                text={benefit.heading}
                classes="!text-white xxl:text-3xl !font-[500] !text-[20px] sm:!text-[14px] md:!leading-[1.4] !leading-[1.6]"
              />
              <Description
                children={null}
                text={benefit.description}
                classes="grow-0 h-fit sm:!text-xs text-lg !font-normal"
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
