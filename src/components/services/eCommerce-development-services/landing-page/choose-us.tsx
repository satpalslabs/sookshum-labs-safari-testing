"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useInView } from "framer-motion";
import { useRef } from "react";
import data from "./data/choose-us.json";
import Description from "@components/basic-components/description";
import H6 from "@components/basic-components/headings/H6";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
import Image from "next/image";
type ChooseUs = {
  heading: string;
  description: string;
  image_url: string;
};
const chooseUsData: ChooseUs[] = data.services;
const ChooseUs = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        id="why-us"
        buttonText="Why choose us?"
        description="Trusted expertise, innovative solutions, and a proven track record of delivering exceptional ecommerce experiences that drive business growth."
        style="w-[794px] xs:w-full mx-auto"
      >
        <div className="w-full xs:w-full text-wrap text-center mx-auto leading-[1.4]">
          Why <span className="italic font-light">Choose us</span> for Ecommerce
          Development Services?
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
      className="grid grid-cols-3 sm:grid-cols-2 gap-4 w-full xs:grid-cols-1"
    >
      {chooseUsData.map((ChooseUsCard: ChooseUs, index: number) => (
        <div
          className={`flex gap-4 pb-8 sm:!col-span-1  lg:pb-6 flex-col sm:flex-col sm:text-left shadow-buttonInset bg-innerContainer rounded-[32px] lg:rounded-[26px] md:gap-3 sm:gap-3 transition-all duration-1000 hover:bg-gradientOnHover  border border-transparent cursor-pointer hover:!border-borderPrimary overflow-hidden ${
            isInView
              ? "!border-viewportBorder  grayscale-0"
              : "border-transparent grayscale"
          }`}
          key={index}
        >
          <div className={`w-full overflow-hidden`}>
            <Image
              src={ChooseUsCard.image_url}
              height={400}
              width={400}
              alt="image"
              className={`object-contain mx-auto xxl:h-[413px] h-[313px] lg:h-[221px] sm:h-[261px] xs:h-[239px] `}
            />
          </div>
          <div className="px-4 lg:px-5 grow md:px-0 xs:px-4">
            <div className="flex px-4 flex-col gap-6 md:gap-5 md:px-5 sm:px-[17px] sm:gap-4 grow h-fit md:pr-3 sm:pr-[10.5px] xs:px-0">
              <div className="flex flex-col gap-[14px] md:gap-3 grow sm:gap-[5px] sm:pt-0">
                <H6 classes="text-white" text={ChooseUsCard.heading} />
                <Description
                  children={null}
                  text={ChooseUsCard.description}
                  classes={
                    "text-base tracking-tight sm:px-0 leading-[1.4] xxl:text-lg !font-normal"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
