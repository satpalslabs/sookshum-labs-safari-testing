"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useRef } from "react";
import data from "./data/choose-us.json";
import { useInView } from "@lib/use-in-view";
const Card = dynamic(() => import("@components/basic-components/card"));
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
import Description from "@components/basic-components/description";
import H4 from "@components/basic-components/headings/H4";
import Image from "next/image";
import H6 from "@components/basic-components/headings/H6";

type choose_us = {
  title: string;
  description: string;
  image: string;
};

const chooseUsData: choose_us[] = data;
const ChooseUs: React.FC = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        buttonText="Why choose us?"
        description="In the realm of NestJS Development, Sookshum Labs company stands as a beacon of expertize, innovation and client centric solutions. Choosing us for your NestJS development services means embracing a partnership that goes beyond mere coding. Our commitment to excellence is rooted in a deep understanding of the frameworks capabilities and a passion for crafting solutions that resonate with your business objectives."
        style="w-[95.5%] lg:!w-[740px] xs:!w-full"
      >
        <div className="xs:w-full sm:w-[80%] mx-auto leading-[1.4] text-wrap text-center tracking-[-0.02em] capitalize">
          Why choose us for <span className="italic font-light"> nestJS </span>{" "}
          Development Services?
        </div>
      </SectionHeader>
      <MainContainer />
    </OuterFlexComponent>
  </OuterComponent>
);

export default ChooseUs;

const MainContainer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className="grid grid-cols-3 gap-4 w-full xs:grid-cols-1"
    >
      {chooseUsData.map((chooseUs: choose_us, index: number) => (
        <Card key={index} style="mt-0 !pb-4" isInView={isInView}>
          <div className="flex flex-col justify-between lg:p-3 p-4 gap-[97px] lg:gap-5 h-full">
            <div className="grow ">
              <Image
                blurDataURL="URL"
                placeholder="blur"
                height={300}
                className="w-[120px] lg:w-[80px] h-[120px] lg:h-[80px]"
                width={300}
                src={chooseUs.image}
                alt={chooseUs.title}
              />
            </div>
            <div className="flex flex-col gap-4 lg:gap-3 sm:gap-2">
              <H6
                text={chooseUs.title}
                classes="text-white xxl:text-3xl !font-[500] !text-[20px] sm:!text-[14px] md:!leading-[1.4] !leading-[1.6]"
              />
              <Description
                children={null}
                text={chooseUs.description}
                classes="grow-0 h-fit sm:!text-xs text-lg !font-normal"
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
