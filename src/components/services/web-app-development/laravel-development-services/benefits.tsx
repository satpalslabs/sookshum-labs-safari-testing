"use client";
const Card = dynamic(() => import("@components/basic-components/card"));
import SectionHeader from "@components/basic-components/section-header";

import benefits from "./data/benefits.json";
import H6 from "@components/basic-components/headings/H6";
import { Collapse } from "@mui/material";
import Description from "@components/basic-components/description";
import { useState } from "react";
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
type BenefitType = {
  title: string;
  description: string;
  image: string;
};

const data: BenefitType[] = benefits;
const Faqs: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  return (
    <div id="benefits">
      <OuterComponent>
        <OuterFlexComponent>
          <SectionHeader
            buttonText="Benefits "
            description="Discover the top use cases where Laravel shines for performance, scalability, and seamless user experiences."
            style="w-[1000px] w-full xs:px-10"
          >
            <div className="xs:w-full xs:text-wrap xs:text-center leading-[1.4] capitalize">
              The Power Of The{" "}
              <span className="italic font-light">Laravel </span>
              Framework
            </div>
          </SectionHeader>
          <div className="flex flex-col gap-3">
            {data?.map((faq: BenefitType, index: number) => (
              <Benefit
                benefit={faq}
                active={activeFaq == index}
                index={index}
                key={index}
                setActive={setActiveFaq}
              />
            ))}
          </div>
        </OuterFlexComponent>
      </OuterComponent>
    </div>
  );
};

export default Faqs;

type props = {
  benefit: BenefitType;
  active: boolean;
  index: number;
  setActive: React.Dispatch<React.SetStateAction<number | null>>;
};
const Benefit: React.FC<props> = ({ benefit, active, index, setActive }) => {
  return (
    <Card style="w-full cursor-text !p-0 !rounded-[32px]" isInView={true}>
      <div className={`w-full pb-8 lg:pb-[28px] sm:pb-6`}>
        <button
          className="flex w-full justify-between items-center p-8 !pb-0 lg:p-[28px] sm:p-6"
          onClick={() => {
            if (active) {
              setActive(null);
            } else {
              setActive(index);
            }
          }}
        >
          <div className="flex gap-5 items-center">
            <img className="w-8 h-8" src={benefit.image} alt={benefit.title} />
            <H6 classes="!text-white xs:text-left" text={benefit.title} />
          </div>
          <div className="relative">
            <Icon style={`transition-all`} />
            <Icon
              style={`transition-all absolute top-0 left-0 ${
                active ? "rotate-[180deg]" : "rotate-90"
              }`}
            />
          </div>
        </button>
        <Collapse in={active} className="cursor-text">
          <Description
            children={null}
            text={benefit.description}
            classes="text-lg p-8 pt-4 !pb-0 lg:p-[28px] lg:pt-3 sm:px-6 !font-normal"
          />
        </Collapse>
      </div>
    </Card>
  );
};

const Icon: React.FC<{ style: string }> = ({ style }) => (
  <svg
    width="16"
    height="3"
    className={style}
    viewBox="0 0 16 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1.71875H15"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
