"use client";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
import OuterComponent from "@components/basic-components/outer-component";
import SectionHeader from "@components/basic-components/section-header";
import data from "./data/processs-data.json";
import H4 from "@components/basic-components/headings/H4";
import Description from "@components/basic-components/description";
import { useRef, useState } from "react";
import { useInView } from "@lib/use-in-view";
import Card from "@components/basic-components/card";
import H6 from "@components/basic-components/headings/H6";
import { Collapse } from "@mui/material";
import H2 from "@components/basic-components/headings/H2";
interface process {
  heading: string;
  description: string;
  detail: detail[];
}
type detail = {
  title: string;
  des: string;
  deliverables: string;
};
const process_data: process[] = data;
const OurProcess: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <OuterComponent>
      <OuterFlexComponent>
        <SectionHeader
          buttonText="Our Process"
          description="Thanks to our design process, we dive deeply into each project. The result is a website that’s perfectly suited to your needs."
          style="w-[990px] lg:!w-[740px] xs:!w-[400px] 3xs:!w-[310px]"
        >
          <div className="xs:w-full w-full sm:w-[80%] mx-auto leading-[1.4] text-wrap text-center !capitalize">
            Our approach combines research-based insights with creativity
          </div>
        </SectionHeader>
        <div className="flex flex-col w-full h-fit rounded-[32px] overflow-hidden border-[1.3px] !border-viewportBorder shadow-buttonInset">
          {process_data?.map((faq: process, index: number) => (
            <FAQ
              item={faq}
              active={activeFaq}
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

export default OurProcess;

type props = {
  item: process;
  active: number | null;
  index: number;
  setActive: React.Dispatch<React.SetStateAction<number | null>>;
};
const FAQ: React.FC<props> = ({ item, active, index, setActive }) => {
  return (
    <div
      className="group relative w-full shadow-buttonInset bg-innerContainer flex flex-col transition-all duration-1000 cursor-pointer  grayscale-0"
      onClick={() => {
        if (active == index) {
          setActive(null);
        } else {
          setActive(index);
        }
      }}
    >
      <Card
        style={`w-full cursor-text  hover:!bg-none !shadow-none !duration-0 !p-0 !rounded-[0px] !bg-innerContainer !border-transparent overflow-hidden ${
          active && active == index
            ? "!rounded-[0px] !rounded-t-[32px] !rounded-b-[32px] !shadow-buttonInset !border-viewportBorder "
            : active == index - 1
            ? "!border-[0px]"
            : index > 0
            ? "!border-t-viewportBorder hover:!border-t-viewportBorder"
            : active == 0
            ? "!rounded-[0px] !rounded-t-[32px] !rounded-b-[32px] !shadow-buttonInset !border-viewportBorder"
            : "!rounded-[0px]"
        }`}
        isInView={true}
      >
        <div className={`w-full pb-8 lg:pb-[28px] sm:pb-6`}>
          <button className="flex w-full  justify-between items-center xs:items-start p-8 !pb-0 lg:p-[28px] sm:p-6">
            <H2>
              <div
                className={`text-[32px] lg:text-[24px] ${
                  index == active && "text-[48px] lg:text-[32px]"
                } transition-all duration-300`}
              >{`${index + 1}. ${item.heading}`}</div>
            </H2>
          </button>
          <Collapse in={active == index} className="cursor-text">
            <div className="flex flex-col gap-8 p-8 pt-4 !pb-0 lg:p-[28px] lg:pt-3 sm:px-6">
              <Description
                children={null}
                text={item.description}
                classes="!text-[20px] lg:!text-sm sm:!text-[13px] !text-white !font-normal"
              />
              <div className="grid grid-cols-2 xs:grid-cols-1 xs:gap-5 gap-5 lg:gap-3 gap-y-8">
                {item.detail.map((detailPage: detail) => (
                  <div className="flex flex-col gap-5 lg:gap-3">
                    <H4 text={detailPage.title} style="lg:!text-[20px]" />
                    <div className="flex flex-col gap-3">
                      <Description
                        children={null}
                        text={detailPage.des}
                        classes="!text-[20px] lg:!text-sm sm:!text-[13px] !text-white !font-normal"
                      />
                      {detailPage.deliverables && (
                        <Description
                          children={null}
                          text={"Deliverables"}
                          classes="!text-[20px] lg:!text-sm sm:!text-[13px] !text-primary !font-normal"
                        />
                      )}
                      <Description
                        children={null}
                        text={detailPage.deliverables}
                        classes="!text-[20px] lg:!text-sm sm:!text-[13px] !text-white !font-normal"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Collapse>
        </div>
      </Card>
    </div>
  );
};
