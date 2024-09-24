"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useInView } from "framer-motion";
import  { useRef } from "react";
import data from "./data/choose-us.json";
import Image from "next/image";
const Card = dynamic(() => import('@components/basic-components/card'));import H4 from "@components/basic-components/headings/H4";
import Description from "@components/basic-components/description";
import dynamic from "next/dynamic";
type ChooseUs = {
  image_url: string;
  heading: string;
  description: string;
};
const chooseUsData: ChooseUs[] = data.cards;
const ChooseUs = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      className="px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px] flex flex-col gap-[80px] md:gap-[60px] sm:gap-12 items-center bg-black overflow-hidden max-w-[1920px] mx-auto"
    >
      <SectionHeader
        buttonText="Why choose us?"
        description="Choose us for exceptional UI/UX design tailored to your needs. We blend creativity with strategy to deliver intuitive, impactful designs that drive user engagement and business growth."
        style="w-[784px] xs:w-full"
      >
        <div className="w-[80%] xs:w-full text-wrap text-center mx-auto">
          How we can help you <span className="italic font-light">Succeed</span>
        </div>
      </SectionHeader>
      <ChooseUsCards isInView={isInView} />
    </section>
  );
};

export default ChooseUs;

const ChooseUsCards: React.FC<{ isInView: boolean }> = ({ isInView }) => (
  <div className="grid grid-cols-3 sm:grid-cols-2 gap-4 w-full xs:grid-cols-1">
    {chooseUsData.map((ChooseUsCard: ChooseUs, index: number) => (
      <Card key={index} style="mt-0" isInView={isInView}>
        <div className="flex flex-col gap-[60px] px-4 pt-4 lg:px-2 lg:pt-2 sm:gap-[32px]">
          <div className="w-[80px] h-[80px] sm:w-[52px] sm:h-[52px] relative">
            <Image  blurDataURL="URL"  placeholder="blur" 
 fill alt="" src={ChooseUsCard.image_url} />
          </div>
          <div className="flex flex-col gap-5 lg:gap-3 sm:gap-2">
            <H4 style="" text={ChooseUsCard.heading} />
            <Description
              children={null}
              text={ChooseUsCard.description}
              classes="grow text-lg !font-normal"
            />
          </div>
        </div>
      </Card>
    ))}
  </div>
);
