"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useRef } from "react";
import data from "./data/why-us.json";
import { useInView } from "@lib/use-in-view";
const Card = dynamic(() => import("@components/basic-components/card"));
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
import Description from "@components/basic-components/description";
import Image from "next/image";
import H6 from "@components/basic-components/headings/H6";
import H3 from "@components/basic-components/headings/H3";

type service = {
  title: string;
  description: string;
  image: string;
};

const why_usData: service[] = data;
const WhyUs: React.FC = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        id="why-us"
        buttonText="Why us?"
        description="Sookshum Labs stands out from the average Webflow agency. With a solid foundation and a proven history of several successful Webflow projects, we deliver exceptional results that elevate your web presence."
        style="w-[85.5%] lg:!w-[740px] xs:!w-full"
      >
        <div className="xs:w-full sm:w-[80%] mx-auto leading-[1.4] text-wrap text-center tracking-[-0.02em] capitalize">
          Why choose us for <span className="italic font-light">Webflow</span>{" "}
          development?
        </div>
      </SectionHeader>
      <MainContainer />
    </OuterFlexComponent>
  </OuterComponent>
);

export default WhyUs;

const MainContainer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="grid grid-cols-3 gap-4 w-full xs:grid-cols-1">
      {why_usData.map((item: service, index: number) => (
        <Card key={index} style="mt-0 !pb-4" isInView={isInView}>
          <div className="flex flex-col justify-between lg:p-3 p-4 gap-[28px] lg:gap-5 h-full">
            <div className="grow ">
              <Image
                blurDataURL="URL"
                placeholder="blur"
                height={300}
                className="w-[120px] lg:w-[80px] h-[120px] lg:h-[80px]"
                width={300}
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="flex flex-col gap-4 lg:gap-3 sm:gap-2">
              <H3
                text={item.title}
                style="!text-white xxl:text-3xl !font-[500] !text-[20px] sm:!text-[14px] md:!leading-[1.4] !leading-[1.6]"
              />
              <Description
                children={null}
                text={item.description}
                classes="grow-0 h-fit sm:!text-xs text-lg !font-normal"
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
