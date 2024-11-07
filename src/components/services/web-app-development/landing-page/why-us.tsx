"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useInView } from "framer-motion";
import { useRef } from "react";
import data from "./data/choose-us.json";
const Card = dynamic(() => import("@components/basic-components/card"));
import Description from "@components/basic-components/description";
import H6 from "@components/basic-components/headings/H6";
import Image from "next/image";
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
type ChooseUs = {
  heading: string;
  description: string;
  imageUrl: string;
};
const whyUsData: ChooseUs[] = data.services;
const ChooseUs = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        id="why-us"
        buttonText="Why us?"
        description="We immerse ourselves in the customer’s business, understand their objectives, and take a holistic approach on the project. Therefore, we have been working with most of our clients for years."
        style="w-[794px] lg:w-[50%] xs:w-full"
      >
        <div className="w-full xs:w-full text-center mx-auto xs:text-wrap leading-[1.4] ">
          What <span className="italic font-light">you’ll</span> Get from Hiring
          Us
        </div>
      </SectionHeader>
      <ChooseUsCards />
    </OuterFlexComponent>
  </OuterComponent>
);

export default ChooseUs;

const ChooseUsCards: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div className="grid grid-cols-3 gap-4 w-full xs:grid-cols-1" ref={ref}>
      {whyUsData.map((ChooseUsCard: ChooseUs, index: number) => (
        <Card key={index} style="mt-0" isInView={isInView}>
          <div className="flex flex-col gap-[75px] lg:gap-[62px] sm:gap-[30px] xs:gap-2 p-4 pb-0 h-full">
            <H6
              text={ChooseUsCard.heading}
              classes="!text-white w-[80%] xxl:text-3xl md:text-[20px] md:w-full md:leading-[1.2] leading-[1.6]"
            />
            <div className="relative w-[160px] lg:w-[126px] sm:w-[100px] h-[160px] lg:h-[126px] sm:h-[100px]">
              <Image
                blurDataURL="URL"
                placeholder="blur"
                fill
                src={ChooseUsCard.imageUrl}
                alt={ChooseUsCard.heading}
              />
            </div>
            <Description
              children={null}
              text={ChooseUsCard.description}
              classes="grow-0 h-fit text-lg !font-normal"
            />
          </div>
        </Card>
      ))}
    </div>
  );
};
