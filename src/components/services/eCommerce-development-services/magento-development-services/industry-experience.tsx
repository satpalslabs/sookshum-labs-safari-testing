"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import data from "./data/industry.experience.json";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
import { Button } from "@mui/material";
import H2 from "@components/basic-components/headings/H2";
import Description from "@components/basic-components/description";
import Image from "next/image";
import DarkButton from "@components/basic-components/button";

interface industries {
  tab: string;
  detail: {
    image: string;
    heading: string;
    description: string;
  };
}

const industries_data: industries[] = data;
const IndustryExperience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div id="industry-experience">
      <OuterComponent>
        <OuterFlexComponent>
          <SectionHeader
            buttonText="Industries We Serve"
            description="Our team is committed to creating digital solutions tailored to the specific needs of different sectors, utilizing the latest technology to address industry challenges and foster innovation."
            style="w-[780px] lg:!w-[700px] xs:!w-full"
          >
            <div className="w-[800px] xs:w-full xs:text-wrap text-center mx-auto leading-[1.4] capitalize">
              Our diverse Industry{" "}
              <span className="italic font-light">Experiences?</span>
            </div>
          </SectionHeader>
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <DetailView activeTab={activeTab} setActiveTab={setActiveTab} />
        </OuterFlexComponent>
      </OuterComponent>
    </div>
  );
};

export default IndustryExperience;

const Tabs: React.FC<{
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}> = (props) => (
  <div
    className={`flex gap-[10px] w-fit max-w-full h-[70px] sm:h-[60px] items-center text-center overflow-auto shrink-0 no-scrollbar`}
  >
    {industries_data.map((industry: industries, ind: number) => (
      <Button
        className="!h-full !normal-case !font-poppins !text-primary !px-[40px] !relative !overflow-visible !shrink-0"
        onClick={() => {
          props.setActiveTab(ind);
        }}
        key={ind}
      >
        <div className="!text-white text-nowrap">{industry.tab}</div>
        {props.activeTab == ind && (
          <div className="h-[1px] bg-gradient-to-r from-black via-white to-black w-[120%] absolute bottom-1"></div>
        )}
      </Button>
    ))}
  </div>
);

const DetailView: React.FC<{
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  return (
    <div
      ref={ref}
      className={`w-full flex xs:flex-col gap-[60px] lg:gap-[30px] sm:gap-5 transition-all duration-1000 ${
        isInView ? "grayscale-0" : "grayscale"
      }`}
    >
      <div className="w-[50%] xs:w-full shrink-0 flex justify-center">
        <Image
          alt=""
          width="1800"
          height="1800"
          src={industries_data[props.activeTab].detail.image}
          className=" h-[614px] lg:h-[426px] sm:h-[390px] xs:h-fit xs:w-full xs:scale-[1.18]  object-contain"
          blurDataURL="URL"
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col gap-[62px] lg:gap0">
        <div className="flex flex-col gap-3">
          <H2>
            <div className="text-wrap tracking-[-0.02em] leading-[1.2] font-semibold text-[36px] lg:text-[32px] sm:text-2xl">
              {industries_data[props.activeTab].detail.heading}
            </div>
          </H2>
          <Description classes="" text="">
            <div
              className="text-[20px] lg:text-[18px] sm:text-[14px] xs:text-xs leading-[1.4] text-white unreset"
              dangerouslySetInnerHTML={{
                __html: industries_data[props.activeTab].detail.description,
              }}
            />
          </Description>
        </div>
        {/* Temporary disabled */}
        {/* <DarkButton text="Learn more" style="" /> */}
      </div>
    </div>
  );
};
