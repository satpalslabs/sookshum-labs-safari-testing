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
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        id="benefits"
        buttonText="Benefits"
        description="As a leading Headless development company, DotStark provides exceptional headless CMS solutions to modernize the way of content management and delivery on different platforms. Look at more amazing key benefits you will get by embracing headless CMS."
        style=" max-w-[1004px] w-full lg:max-w-[804px] lg:w-full sm:max-w-[700px] xs:max-w-full"
      >
        <div className="w-full xs:w-full text-wrap text-center leading-[1.4] ">
          Amazing Benefits of{" "}
          <span className="italic font-light">Headless CMS</span>
        </div>
      </SectionHeader>
      <BenefitsCards />
    </OuterFlexComponent>
  </OuterComponent>
);

export default Benefits;

const BenefitsCards: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className="grid grid-cols-3 sm:grid-cols-2 gap-5 lg:gap-4 w-full xs:grid-cols-1"
    >
      {chooseUsData.map((benefit: ChooseUs, index: number) => (
        <Card key={index} style="mt-0 pb-4" isInView={isInView}>
          <div className="flex flex-col justify-between lg:p-3 p-4 gap-5 h-full">
            <Image
              blurDataURL="URL"
              placeholder="blur"
              height={300}
              className="w-[120px] lg:w-[80px] h-auto"
              width={300}
              src={benefit.image_url}
              alt={benefit.heading}
            />
            <div className="flex flex-col gap-4 lg:gap-3 sm:gap-2 grow">
              <H6
                text={benefit.heading}
                classes="!text-white xxl:text-3xl !font-[500] !text-[20px] sm:!text-[14px] md:!leading-[1.4] !leading-[1.6]"
              />
              <Description
                children={null}
                text={benefit.description}
                classes="grow h-fit sm:!text-xs text-lg !font-normal"
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
