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
          id="our-process"
          buttonText="Our Process"
          description="Our design process allows us to thoroughly explore each project, resulting in a website that is perfectly tailored to your needs."
          style="w-[80%] lg:!w-[740px] xs:!w-[400px] 3xs:!w-[310px]"
        >
          <div className="xs:w-full w-full sm:w-[80%] mx-auto leading-[1.4] text-wrap text-center !capitalize">
            Our approach combines research-based insights with creativity
          </div>
        </SectionHeader>
        <div className="flex flex-col w-full h-fit rounded-[32px] bg-innerContainer overflow-hidden border-[1.3px] !border-viewportBorder shadow-buttonInset">
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
      className={`group flex flex-col transition-all duration-1000 border-transparent border-y-[1.5px]  relative w-full  cursor-pointer  grayscale-0 overflow-hidden ${
        active && active == index
          ? "rounded-[0px] rounded-t-[32px] rounded-b-[32px] shadow-buttonInset border-viewportBorder "
          : active == index - 1
          ? "border-[0px]"
          : index > 0
          ? "border-t-viewportBorder hover:border-t-viewportBorder"
          : active == 0
          ? "rounded-[0px] rounded-t-[32px] rounded-b-[32px] shadow-buttonInset border-viewportBorder"
          : "rounded-[0px]"
      }`}
      onClick={() => {
        if (active == index) {
          setActive(null);
        } else {
          setActive(index);
        }
      }}
    >
      {/* <Card
        style={`w-full cursor-text !border-none  hover:!bg-none !shadow-none !duration-0 !p-0 !rounded-[0px] !bg-transparent !border-transparent `}
        isInView={true}
      > */}
      <div className={`w-full pb-8 lg:pb-[28px] sm:pb-6`}>
        <button className="flex w-full  justify-between items-center xs:items-start p-8 !pb-0 lg:p-[28px] sm:p-6">
          <H2>
            <div
              className={`text-[20px] sm:text-[18px] !text-white transition-all duration-300`}
            >{`${index + 1}. ${item.heading}`}</div>
          </H2>
        </button>
        <Collapse in={active == index} className="cursor-text">
          <div className="flex flex-col gap-8 p-8 pt-4 !pb-0 lg:p-[28px] lg:pt-3 sm:px-6">
            <Description
              children={null}
              text={item.description}
              classes="!text-[18px] lg:!text-sm sm:!text-[13px] !font-normal"
            />
            <div className="grid grid-cols-2 xs:grid-cols-1 xs:gap-5 gap-5 lg:gap-3 gap-y-8">
              {item.detail.map((detailPage: detail, index: number) => (
                <div key={index} className="flex flex-col gap-5 lg:gap-3">
                  <H4
                    text={detailPage.title}
                    style="!text-[20px] !text-white sm:!text-[18px]"
                  />
                  <div className="flex flex-col gap-3">
                    <Description
                      children={null}
                      text={detailPage.des}
                      classes="!text-[18px] lg:!text-sm sm:!text-[13px]  !font-normal"
                    />
                    {detailPage.deliverables && (
                      <Description
                        children={null}
                        text={"Deliverables"}
                        classes="!text-[20px] lg:!text-sm sm:!text-[13px] !text-white !font-medium"
                      />
                    )}
                    <Description
                      text={""}
                      classes="!text-[18px] lg:!text-sm sm:!text-[13px] !font-normal"
                    >
                      {detailPage.deliverables.split(".").length > 2 ? (
                        <div>
                          {detailPage.deliverables
                            .split(".")
                            .map((item, ind) => (
                              <li key={ind}>{item}.</li>
                            ))}
                        </div>
                      ) : (
                        <>
                          {detailPage.deliverables && (
                            <li>{detailPage.deliverables}</li>
                          )}
                        </>
                      )}
                    </Description>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Collapse>
      </div>
      {/* </Card> */}
    </div>
  );
};
