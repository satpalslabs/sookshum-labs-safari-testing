"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useState } from "react";
import data from "./data/technologies.json";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
import { Button } from "@mui/material";
import Image from "next/image";
import H6 from "@components/basic-components/headings/H6";

interface industries {
  tab: string;
  technologies: technology[];
}

type technology = {
  icon: string;
  name: string;
};
const technologies: industries[] = data;
const Technologies = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <OuterComponent>
      <OuterFlexComponent>
        <SectionHeader
          id="technologies"
          buttonText="Technologies"
          description="As a dedicated offshore Flutter app development company, we leverage the latest tools and technologies to create robust, secure, and innovative solutions that reflect your brand's essence and enhance business resilience."
          style="w-[880px] lg:!w-[700px] sm:!w-full"
        >
          <div className="w-[900px] sm:w-full text-wrap text-center mx-auto leading-[1.4]">
            Tools And Technologies we use for Robust
            <span className="italic font-light"> Flutter App</span> Development
          </div>
        </SectionHeader>
        <div className="flex flex-col gap-[60px] lg:gap-[30px] w-full">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <DetailView active={activeTab} />
        </div>
      </OuterFlexComponent>
    </OuterComponent>
  );
};

export default Technologies;

const Tabs: React.FC<{
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}> = (props) => (
  <div
    className={`flex gap-[10px] max-w-full justify-center h-[70px] sm:h-[60px] items-center text-center overflow-x-auto lg:justify-start shrink-0 no-scrollbar`}
  >
    {technologies.map((industry: industries, ind: number) => (
      <Button
        className="!h-full !normal-case !font-poppins !text-primary !px-[40px] !relative !overflow-visible !shrink-0"
        key={ind}
        onClick={() => {
          props.setActiveTab(ind);
        }}
      >
        <div className="!text-white text-nowrap">{industry.tab}</div>
        {props.activeTab == ind && (
          <div className="h-[1px] bg-gradient-to-r from-black via-white to-black w-[120%] absolute bottom-1"></div>
        )}
      </Button>
    ))}
  </div>
);

const DetailView: React.FC<{ active: number }> = ({ active }) => (
  <div className="flex flex-wrap max-w-full justify-center gap-5 xs:gap-3">
    {technologies[active].technologies.map((technology: technology) => (
      <div
        className={
          "flex flex-col justify-between w-[160px] h-[160px] lg:w-[110px] lg:h-[110px] text-center items-center rounded-[27px] lg:rounded-[17px] p-6 lg:py-3 lg:px-3 shrink-0 border-borderDarkButton [backdrop-filter:blur(100px)] text-secondary border-solid border bg-darkButton shadow-buttonInset"
        }
        key={technology.name}
      >
        <Image
          blurDataURL="URL"
          placeholder="blur"
          height="800"
          width="800"
          src={technology.icon}
          className="w-[70px] h-[70px] lg:w-[43px] lg:h-[43px] object-contain xs:w-[36px] xs:h-[36px]"
          alt=""
        />
        <H6
          text={technology.name}
          classes={
            "text-nowrap grow-0 !text-lg !text-white lg:!text-[14px] tracking-tight"
          }
        />
      </div>
    ))}
  </div>
);
