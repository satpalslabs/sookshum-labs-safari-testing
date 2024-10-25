"use client";
const Card = dynamic(() => import("@components/basic-components/card"));
import SectionHeader from "@components/basic-components/section-header";

import FAQS from "./data/faqs.json";
import H6 from "@components/basic-components/headings/H6";
import { Collapse } from "@mui/material";
import Description from "@components/basic-components/description";
import { useState } from "react";
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
type FaqType = {
  question: string;
  answer: string;
};
interface Data {
  [key: string]: FaqType[]; // Index signature to allow string indexing
}
const data: Data = FAQS;
const Faqs: React.FC<{ DataKey: keyof Data }> = ({ DataKey }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(2);
  const faqData = data[DataKey as keyof Data];

  return (
    <OuterComponent>
      <OuterFlexComponent>
        <SectionHeader
          buttonText="FAQs"
          description="We craft digital experiences that drive results. We'll help you achieve your business goals, from increased brand awareness to skyrocketing sales."
          style="w-[1000px] w-full xs:px-10"
        >
          <h2 className="xs:w-full xs:text-wrap xs:text-center leading-[1.4] capitalize">
            Got questions? We've got{" "}
            <span className="italic font-light">answers! </span>
          </h2>
        </SectionHeader>
        <div className="flex flex-col gap-3">
          {faqData?.map((faq: FaqType, index: number) => (
            <FAQ
              faq={faq}
              active={activeFaq == index}
              index={index}
              key={index}
              setActive={setActiveFaq}
            />
          ))}
        </div>
      </OuterFlexComponent>
    </OuterComponent>
  );
};

export default Faqs;

type props = {
  faq: FaqType;
  active: boolean;
  index: number;
  setActive: React.Dispatch<React.SetStateAction<number | null>>;
};
const FAQ: React.FC<props> = ({ faq, active, index, setActive }) => {
  return (
    <Card style="w-full cursor-text !p-0 !rounded-[32px]" isInView={true}>
      <div className={`w-full pb-8 lg:pb-[28px] sm:pb-6`}>
        <button
          className="flex w-full justify-between items-center xs:items-start p-8 !pb-0 lg:p-[28px] sm:p-6"
          onClick={() => {
            if (active) {
              setActive(null);
            } else {
              setActive(index);
            }
          }}
        >
          <H6 classes="text-white xs:text-left" text={faq.question} />
          <div className="relative">
            <Icon style={`transition-all xs:mt-1`} />
            <Icon
              style={`transition-all absolute top-0 left-0 ${
                active ? "rotate-[180deg]" : "rotate-90"
              } xs:mt-1`}
            />
          </div>
        </button>
        <Collapse in={active} className="cursor-text">
          <Description
            children={null}
            text={faq.answer}
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
