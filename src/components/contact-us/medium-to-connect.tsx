"use client";
import { useRef } from "react";
import data from "./data/medium-to-connect.json";
import { useInView } from "@lib/use-in-view";
const Card = dynamic(() => import("@components/basic-components/card"));
import Description from "@components/basic-components/description";
import H5 from "@components/basic-components/headings/H5";
import DarkButton from "@components/basic-components/button";
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import Image from "next/image";
export type Medium = {
  title: string;
  description: string;
  "button-text": string;
  "image-path": string;
};

const mediums: Medium[] = data.mediums;
const Mediums: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <OuterComponent>
      <section
        id="medium-to-connect"
        ref={ref}
        className={` ${isInView ? "grayscale-0" : "grayscale"} w-full `}
      >
        <div className="grid grid-cols-2 gap-5 lg:gap-[18px] xs:grid-cols-1 xs:gap-[16px]">
          {mediums?.map((value: Medium, index: number) => (
            <MediumCard value={value} isInView={isInView} key={index} />
          ))}
        </div>
      </section>
    </OuterComponent>
  );
};

export default Mediums;

const MediumCard: React.FC<{ value: Medium; isInView: boolean }> = (props) => (
  <div
    className={`relative w-full group h-fit mt-[43px] z-0 cursor-pointer   rounded-[32px] sm:rounded-[20px]  p-[1px] bg-viewportBorder transition-all hover:bg-gradient-to-br  hover:from-borderPrimary hover:via-transparent hover:to-borderPrimary duration-1000 ${
      props.isInView
        ? `bg-viewportBorder  grayscale-0 `
        : "bg-transparent grayscale"
    }`}
  >
    {/* <Card style="mt-[43px] gap-6" isInView={props.isInView}> */}
    <div className=" absolute z-40 px-4 md:px-2 sm:px-[6px] md:flex-1 pb-8 xxl:pb-16 xs:pb-5 flex ">
      <Image
        width={600}
        height={600}
        className="h-[136px] lg:h-[132px] w-auto xxl:-mt-[45%] sm:h-[108px] xs:-mt-[45%] -mt-[45%] sm:-mt-[30%] object-cover "
        alt="image"
        src={props.value["image-path"]}
      />
    </div>
    <div className="w-full h-full relative z-20 overflow-hidden rounded-[32px] bg-black sm:rounded-[20px] ">
      <div
        className={`w-full h-full bg-innerContainer p-4 pb-8 sm:p-[9px] sm:pb-[14px] lg:p-[14px] lg:pb-[23px] relative shadow-buttonInset rounded-[32px] sm:rounded-[20px] flex flex-col  pt-[125px] lg:pt-[98px] sm:pt-[91px] grow gap-6`}
      >
        <div className=" flex flex-col px-4 md:px-2 sm:px-[6px] grow h-fit gap-6 sm:h-auto sm:gap-[0.5rem]">
          <H5 text={props.value.title} style="!text-white" />
          <div className="flex flex-col gap-4">
            <Description
              children={null}
              text={props.value.description}
              classes=""
            />
            <div
              id={
                props.value["button-text"].includes("meeting")
                  ? "meeting"
                  : "chatwithus"
              }
              className="w-fit cursor-pointer"
              onClick={() => {
                if (props.value["button-text"].includes("meeting")) {
                  window.open(
                    "https://appointments.sookshum-labs.com/",
                    "_blank"
                  );
                } else {
                  if (window.$zoho && window.$zoho.salesiq) {
                    window.$zoho.salesiq.floatwindow.visible("show");
                  }
                }
              }}
            >
              <DarkButton text={props.value["button-text"]} style="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute z-[40] bg-transparent transition-all duration-1000 top-0 left-0 w-full h-full group-hover:block group-hover:bg-gradientOnHover rounded-[32px] sm:rounded-[20px]"></div>
  </div>
);
