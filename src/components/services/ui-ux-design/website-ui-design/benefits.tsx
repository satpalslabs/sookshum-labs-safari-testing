"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import data from "./data/benefits.json";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
import Description from "@components/basic-components/description";
import { Button } from "@mui/material";
import Card from "@components/basic-components/card";
import H2 from "@components/basic-components/headings/H2";
import Image from "next/image";
type benefit = {
  tab: string;
  "detail-data": string;
  image: string;
};

const benefitsData: benefit[] = data;
const Benefits = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        id="benefits"
        buttonText="Benefits "
        description="With our UI UX design company, proficient design approach, unique UI UX design services,and a track record of successfully designing 200+ digital products, we deliver experiences that align with your business goals."
        style="!w-[820px] sm:!w-[680px] xs:!w-full "
      >
        <div className="xs:w-full xs:text-wrap xs:text-center leading-[1.4]">
          Drive Impact with Top <br />{" "}
          <span className="italic font-light">UI UX Design </span>Company
        </div>
      </SectionHeader>
      <BenefitCards />
    </OuterFlexComponent>
  </OuterComponent>
);

export default Benefits;

const BenefitCards = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div
      className="flex flex-col gap-5 xxl:gap-8 w-full items-center"
      ref={ref}
    >
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <ActiveBenefit detailData={benefitsData[activeTab]} isInView={isInView} />
    </div>
  );
};

const Tabs: React.FC<{
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}> = (props) => (
  <div
    className={`flex w-full justify-between h-[70px] sm:h-[60px] items-center text-center overflow-x-auto lg:justify-start shrink-0 no-scrollbar `}
  >
    {benefitsData.map((item: benefit, ind: number) => (
      <Button
        className="!h-full !normal-case !font-poppins !text-primary !px-[40px] lg:!px-6 !relative !overflow-visible !shrink-0"
        key={ind}
        onClick={() => {
          props.setActiveTab(ind);
        }}
      >
        <div className="!text-white xxl:text-lg text-nowrap text-base font-poppins font-medium lg:text-sm">
          {item.tab}
        </div>
        {props.activeTab == ind && (
          <div className="h-[1px] bg-gradient-to-r from-black via-white to-black w-[120%] lg:w-[110%] absolute bottom-1"></div>
        )}
      </Button>
    ))}
  </div>
);

const ActiveBenefit: React.FC<{
  detailData: benefit;
  isInView: boolean;
}> = (props) => (
  <Card
    isInView={props.isInView}
    style=" flex-row gap-5 xxl:gap-8 max-w-full w-full p-12 lg:p-6 xs:flex-col"
  >
    <div className="xxl:w-[60.17%] w-[53.17%] sm:w-[52.4%] xs:w-full shrink-0 flex flex-col gap-1">
      <H2>
        <div
          className={`xxl:text-[24px] text-[20px] sm:text-base xs:text-sm  transition-all duration-300 leading-[1.3] font-medium`}
        >
          {props.detailData.tab}
        </div>
      </H2>
      <Description text={""} classes="">
        <div
          className="unreset leading-[1.3] xxl:!text-[20px] !text-[18px] lg:!text-sm sm:!text-[13px] xs:!text-xs grow-1 font-normal"
          dangerouslySetInnerHTML={{ __html: props.detailData["detail-data"] }}
        />
      </Description>
    </div>
    <Image
      height={400}
      width={400}
      alt="image"
      src={props.detailData.image}
      className="object-cover xxl:w-[39%] w-[47%] lg:w-[45%] sm:w-[46%] xs:w-full h-auto"
    />
  </Card>
);
