"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useInView } from "framer-motion";
import { useRef } from "react";
import data from "./data/why-us.json";
const Card = dynamic(() => import("@components/basic-components/card"));
import Description from "@components/basic-components/description";
import Image from "next/image";
import H5 from "@components/basic-components/headings/H5";
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
type ChooseUs = {
  heading: string;
  description: string;
  icon: string;
  color: string;
};
const whyUsData: ChooseUs[] = data["why-us"];
const ChooseUs = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        id="why-us"
        buttonText="Why us?"
        description="Want us to build a no-code app for you from scratch? You are one click away!"
        style="w-[500px] lg:w-[50%] sm:w-[65%] xs:w-full"
      >
        <div className="w-full text-wrap xs:w-full text-center mx-auto xs:text-wrap leading-[1.4] capitalize">
          Why Sookshum Labs
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
    <div
      ref={ref}
      className="w-full flex gap-5 h-full max-h-full xs:flex-col-reverse"
    >
      <Card
        style="w-[46.8%] p-8 flex flex-col gap-8 sm:gap-2 xs:gap-[12px] shrink-0 h-full grow-0 xs:w-full"
        isInView={isInView}
      >
        {whyUsData.map((dataItem: ChooseUs, index: number) => (
          <ChooseUsCard item={dataItem} key={index} />
        ))}
      </Card>
      <div className="grow relative w-full">
        <Image
          blurDataURL="URL"
          placeholder="blur"
          height="2200"
          width="2200"
          alt=""
          src="/services/low-code-development/landing-page/why-us/why-us.webp"
          className="w-full h-full object-contain absolute xs:relative xs:h-fit"
        />
      </div>
    </div>
  );
};

const ChooseUsCard: React.FC<{ item: ChooseUs }> = ({ item }) => (
  <div className="flex gap-5 lg:gap-3 sm:gap-2 w-full items-start">
    <div
      className={`flex w-[60px] h-[60px] shrink-0 lg:w-[42px] lg:h-[42px] sm:w-[36px] sm:h-[36px] justify-center rounded-full items-center`}
      style={{
        background: item.color,
      }}
    >
      <Image
        blurDataURL="URL"
        placeholder="blur"
        height="400"
        width="400"
        alt=""
        src={item.icon}
        className=" w-[24px] h-[24px] lg:w-[14px] lg:h-[14px]"
      />
    </div>
    <div className="flex flex-col gap-3 sm:gap-1  pt-1">
      <H5 text={item.heading} style={"!text-white"} />
      <Description
        text={item.description}
        classes={"grow !font-normal text-lg"}
        children={null}
      />
    </div>
  </div>
);
