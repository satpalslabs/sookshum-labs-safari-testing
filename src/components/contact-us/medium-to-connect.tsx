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
  <Card style="mt-[43px] gap-6" isInView={props.isInView}>
    <div className="px-4 md:px-2 sm:px-[6px] md:flex-1 pb-8 xxl:pb-16 xs:pb-5 flex ">
      <Image
        width={600}
        height={600}
        className="h-[136px] lg:h-[132px] w-auto xxl:-mt-[10%] sm:h-[108px] xs:-mt-[16%] lg:-mt-[20%] sm:-mt-[10%] object-cover -mt-[15%]"
        alt="image"
        src={props.value["image-path"]}
      />
    </div>
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
              window.open("https://appointments.sookshum-labs.com/", "_blank");
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
  </Card>
);
