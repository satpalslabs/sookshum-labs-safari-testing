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

type card = {
  title: string;
  description: string;
  image: string;
};

const chooseUsData: card[] = data;
const WhyUs: React.FC = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        id="why-us"
        buttonText="Why Choose us?"
        description="Our services are crafter with your business in mind, offering the flexibility, scalability, and performance you need to create truly unique customer experiences across every digital touchpoint. Step into the future of commerce with our tailor-made solutions that not only spark growth but also fuel innovation. "
        style=" max-w-[1004px] w-full lg:max-w-[804px] lg:w-full sm:max-w-[700px] xs:max-w-full"
      >
        <div className=" leading-[1.4] text-wrap text-center tracking-[-0.02em] capitalize">
          Why Choose us for{" "}
          <span className="italic font-light">headless cMS development?</span>
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
    <div
      ref={ref}
      className="grid grid-cols-3 sm:gap-3 gap-4 w-full xs:grid-cols-1"
    >
      {chooseUsData.map((item: card, index: number) => (
        <Card key={index} style="mt-0 pb-4" isInView={isInView}>
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
            <div className="flex flex-col gap-4 lg:gap-3 sm:gap-2 ">
              <H6
                text={item.title}
                classes="!text-white xxl:text-3xl !font-[500] !text-[20px] sm:!text-[14px] md:!leading-[1.4] !leading-[1.6]"
              />
              <Description
                children={null}
                text={item.description}
                classes="grow-0 h-fit !text-whiteTextPrimary sm:!text-xs text-lg !font-normal"
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
