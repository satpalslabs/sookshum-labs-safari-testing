"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useRef } from "react";
import data from "./data/discover.json";
import { useInView } from "@lib/use-in-view";
const Card = dynamic(() => import("@components/basic-components/card"));
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
import Description from "@components/basic-components/description";
import Image from "next/image";
import H6 from "@components/basic-components/headings/H6";

type item_type = {
  title: string;
  description: string;
  image: string;
};

const dataItems: item_type[] = data;
const Discover: React.FC = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        id="discover"
        buttonText="Discover"
        description="As a leading UI/UX design agency, we combine research, strategy, and technology to deliver customized digital solutions for your eCommerce, web, and mobile products."
        style="xxl:!w-[800px] !w-[750px] lg:!w-[740px] sm:!w-[640px] xs:!w-full"
      >
        <div className="xs:w-full sm:w-[80%] w-full mx-auto leading-[1.4] text-wrap text-center tracking-[-0.02em]">
          We create Digital Products that
          <br className="sm:hidden" /> Your Users Love
        </div>
      </SectionHeader>
      <MainContainer />
    </OuterFlexComponent>
  </OuterComponent>
);

export default Discover;

const MainContainer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-[80px] lg:gap-[70px] sm:gap-[50px] xs:gap-[30px] w-full `}
    >
      {dataItems.map((item: item_type, index: number) => (
        <div
          className={`flex xs:gap-[10px] items-center justify-between ${
            index == 1 && "flex-row-reverse"
          }`}
          key={index}
        >
          <div className="flex flex-col gap-4 lg:gap-3 sm:gap-2 xxl:w-[40%] sm:w-[58%]  w-[45.2%] shrink-0">
            <H6
              text={item.title}
              classes="text-white xxl:!text-[28px] !font-[500] !text-[20px] sm:!text-[14px] md:!leading-[1.4] !leading-[1.6]"
            />
            <Description
              text={""}
              classes="grow-0 h-fit sm:!text-xs  !text-h3_heading !text-lg xxl:!text-xl !font-normal"
            >
              {item.description}
            </Description>
          </div>
          <Image
            blurDataURL="URL"
            placeholder="blur"
            height={800}
            className="h-[344px] lg:h-[324px] px-[122px] sm:px-[30px] sm:py-3 xxl:h-[400px] w-auto py-[60px] sm:h-[182px] xs:h-[93px] object-cover xs:p-[0px]"
            width={800}
            src={item.image}
            alt={item.title}
          />
        </div>
      ))}
    </div>
  );
};
