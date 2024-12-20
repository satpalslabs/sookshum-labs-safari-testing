"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useRef } from "react";
import data from "./data/our-services.json";
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

const services: card[] = data;
const OurServices: React.FC = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        id="our-services"
        buttonText="Our-services"
        description="Check out our CMS Services designed to provide you with the smoothest content management experience possible. We offer extensive Headless CMS consultancy for increased efficiency and customizable content experience.  "
        style=" max-w-[1004px] w-full lg:max-w-[804px] lg:w-full sm:max-w-[700px] xs:max-w-full"
      >
        <div className=" leading-[1.4] text-wrap text-center tracking-[-0.02em] capitalize">
          Our Next-Generation{" "}
          <span className="italic font-light">Headless CMS Development</span>{" "}
          solutions
        </div>
      </SectionHeader>
      <MainContainer />
    </OuterFlexComponent>
  </OuterComponent>
);

export default OurServices;

const MainContainer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className="grid grid-cols-3 sm:gap-3 lg:gap-4 gap-5 w-full xs:grid-cols-1"
    >
      {services.map((item: card, index: number) => (
        <Card key={index} style="mt-0 pb-4" isInView={isInView}>
          <div className="flex flex-col justify-between lg:p-3 p-4 gap-[68px] lg:gap-8 sm:gap-7 xs:gap-3 h-full">
            <Image
              blurDataURL="URL"
              placeholder="blur"
              height={300}
              className="w-[120px] lg:w-[80px] h-[120px] lg:h-[80px]"
              width={300}
              src={item.image}
              alt={item.title}
            />
            <div className="flex flex-col gap-4 lg:gap-3 sm:gap-2 grow">
              <H6
                text={item.title}
                classes="!text-white xxl:text-3xl !font-[500] !text-[20px] sm:!text-[14px] md:!leading-[1.4] lg:tracking-tight !leading-[1.6]"
              />
              <Description
                children={null}
                text={item.description}
                classes="grow h-fit !text-whiteTextPrimary sm:!text-xs text-lg !font-normal"
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
