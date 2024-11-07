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

type item_type = {
  title: string;
  description: string;
  image: string;
};

const dataItems: item_type[] = data;
const WhyUs: React.FC = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        id="why-us"
        buttonText="Why us?"
        description="As a leading UI/UX design agency, we combine research, strategy, and technology to deliver tailored digital solutions for your eCommerce, web, and mobile products."
        style="xxl:!w-[800px] !w-full lg:!w-[740px] xs:!w-full"
      >
        <div className="xs:w-full sm:w-[80%] w-full mx-auto leading-[1.4] text-wrap text-center tracking-[-0.02em]">
          Redefine Experiences with <br className="sm:hidden" />
          Best <span className="italic font-light"> UI UX Design </span> Agency
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
      className={`flex flex-col gap-[80px] lg:gap-[50px] xs:gap-[30px] w-full ${
        isInView ? " grayscale-0" : "grayscale"
      }`}
    >
      {dataItems.map((item: item_type, index: number) => (
        <div
          className="flex xs:flex-col-reverse xs:gap-[10px] items-center justify-between"
          key={index}
        >
          <div className="flex flex-col  gap-4 lg:gap-3 sm:gap-2 w-[40.8%] sm:w-[40%] xs:w-full shrink-0">
            <H6
              text={item.title}
              classes="text-white xxl:!text-3xl !font-[500] !text-[26px] sm:!text-[18px] md:!leading-[1.4] !leading-[1.6]"
            />
            <Description
              text={""}
              classes="grow-0 h-fit sm:!text-xs !text-white text-lg !font-normal"
            >
              <div
                dangerouslySetInnerHTML={{ __html: item.description }}
                className="xs:hidden"
              />
              <div className="hidden xs:block">
                {item.description.replaceAll("<br />", " ")}
              </div>
            </Description>
          </div>

          <Image
            blurDataURL="URL"
            placeholder="blur"
            height={800}
            className="h-[491px] lg:h-[354px] sm:h-[262px] object-contain"
            width={800}
            src={item.image}
            alt={item.title}
          />
        </div>
      ))}
    </div>
  );
};
