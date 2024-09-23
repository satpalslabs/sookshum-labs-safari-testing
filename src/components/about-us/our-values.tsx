"use client";
import  { useRef } from "react";
import data from "./data/our-values.json";
import { useInView } from "@lib/use-in-view";
const Card = dynamic(() => import('@components/basic-components/card'));import Description from "@components/basic-components/description";
import H5 from "@components/basic-components/headings/H5";
import H2 from "@components/basic-components/headings/H2";
import dynamic from "next/dynamic";
export type valuePoint = {
  icon: string;
  title: string;
  about: string;
};

const ourValuesData: valuePoint[] = data["our-values"];
const OurValues: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      className="px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px] flex flex-col gap-[36px]  items-center bg-black overflow-hidden max-w-[1920px] mx-auto"
    >
      <div
        className={`flex flex-col gap-6 lg:gap-3 xs:gap-2 items-center w-[70%] lg:w-[500px] xs:w-full xs:px-4 `}
      >
        <H2>
          <div>Our values</div>
        </H2>
        <div className="text-center">
          <Description
            children={null}
            text={
              "People, awareness and growth. The conceptual idea of the value system is a consistent trinity. Our people, being the main value of the company, come to effective growth while remaining purposeful."
            }
            classes={"!text-[22px] lg:!text-lg xs:!text-base !font-normal !leading-[1.3]"}
          />
        </div>
      </div>
      <section className={` ${isInView ? "grayscale-0" : "grayscale"} w-full `}>
        <div className="grid grid-cols-4 gap-5 sm:grid-cols-2 lg:gap-[18px] xs:grid-cols-1 xs:gap-[16px]">
          {ourValuesData?.map((value: valuePoint, index: number) => (
            <OurValueCard value={value} isInView={isInView} key={index} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default OurValues;

const OurValueCard: React.FC<{ value: valuePoint; isInView: boolean }> = (
  props
) => (
  <Card style="mt-[43px] gap-6 w-full" isInView={props.isInView}>
    <div className="px-4 md:px-2 sm:px-[6px] md:flex-1 pb-8 xxl:pb-16 xs:pb-5 flex ">
      <img
        className="h-[136px] lg:h-[132px] xxl:-mt-[19.3%] sm:h-[108px] xs:-mt-[16%] lg:-mt-[20%] sm:-mt-[10%] object-cover -mt-[30%]"
        alt=""
        src={props.value.icon}
      />
    </div>
    <div className=" flex flex-col px-4 md:px-2  xxl:-mt-[10%] -mt-[10%] sm:px-[6px] lg:-mt-10 xs:mt-0 grow h-fit gap-6 lg:gap-3 sm:h-auto sm:gap-[0.5rem]">
      <H5 text={props.value.title} style="!text-white leading-[1.3]" />
      <Description children={null} text={props.value.about} classes="text-lg !font-normal" />
    </div>
  </Card>
);
