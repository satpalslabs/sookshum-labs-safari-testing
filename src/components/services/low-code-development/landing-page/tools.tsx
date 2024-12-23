"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import data from "./data/tools.json";
import H6 from "@components/basic-components/headings/H6";
const Card = dynamic(() => import("@components/basic-components/card"));
import Image from "next/image";
import { Collapse } from "@mui/material";
import Description from "@components/basic-components/description";
import { RightAngleArrow } from "@components/header/containers/services";
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";

type Tool = {
  name: string;
  description: string;
  image_url: string;
};
const tools: Tool[] = data.tools;
const Tools = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        id="tools"
        buttonText="Tools "
        description="Want us to build a no-code app for you from scratch? You are one click away!"
        style="w-[624px] lg:w-[491px] lg:mx-auto xs:w-full"
      >
        <div className="w-full lg:w-[637px] sm:w-full xs:w-[70%] xs:text-balance lg:leading-[1.2] text-wrap tracking-tight text-center mx-auto leading-[1.4] ">
          Our Arsenal Of Magic Tools
        </div>
      </SectionHeader>
      <ToolsDetailComponent />
    </OuterFlexComponent>
  </OuterComponent>
);

export default Tools;

const ToolsDetailComponent: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(1);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      className={` ${
        isInView ? "grayscale-0" : "grayscale"
      } flex gap-10 xxl:gap-[100px] transition-all duration-500 xs:flex xs:flex-col xs:gap-5 w-full pt-[88px] pb-[75px] lg:pt-[43px] lg:pb-[56px] sm:py-0 `}
    >
      <div className="xxl:max-w-[40%] max-w-[46.5%] xs:max-w-full">
        <Card isInView={isInView} style=" shrink-0 h-fit">
          <div className="grid grid-cols-3 gap-5 w-full">
            {data.icons.map((icon: string, index: number) => (
              <Image
                blurDataURL="URL"
                placeholder="blur"
                alt="Tools"
                width="2200"
                height="2200"
                src={icon}
                key={index}
                className="rounded-full "
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex flex-col justify-between">
        {tools.map((tool: Tool, index: number) => (
          <ToolCollapseContainer
            tool={tool}
            active={activeFaq == index}
            index={index}
            key={index}
            setActive={setActiveFaq}
          />
        ))}
      </div>
    </section>
  );
};

type props = {
  tool: Tool;
  active: boolean;
  index: number;
  setActive: React.Dispatch<React.SetStateAction<number | null>>;
};
const ToolCollapseContainer: React.FC<props> = ({
  tool,
  active,
  index,
  setActive,
}) => {
  return (
    <div className={`w-full pb-8 lg:pb-[28px] sm:pb-6`}>
      <button
        className="flex w-full justify-between items-center xs:items-start  !pb-0 lg:p-[28px] sm:p-6"
        onClick={() => {
          if (active) {
            setActive(null);
          } else {
            setActive(index);
          }
        }}
      >
        <H6 classes="!text-white xs:text-left" text={tool.name} />
        <RightAngleArrow
          className={`stroke-white transition-all ${active && "rotate-90"}`}
        />
      </button>
      <Collapse in={active} className="cursor-text">
        <Description
          children={null}
          text={tool.description}
          classes="text-lg p-8 pl-0 pt-4 !pb-0 lg:p-[28px] lg:pt-3 sm:px-6 !font-normal"
        />
      </Collapse>
    </div>
  );
};
