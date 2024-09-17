"use client";
import DarkButton from "@components/basic-components/button";
import Description from "@components/basic-components/description";
import H2 from "@components/basic-components/headings/H2";
import PrimaryButton from "@components/basic-components/primary-buttom";
import React from "react";
import { useRef } from "react";
import { useInView } from "@lib/use-in-view";
import { dataItemType } from ".";

function Technology({ item }: { item: dataItemType }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  return (
    <div
      ref={ref}
      className={`flex justify-between h-fit w-full py-[90px] transition-all  duration-1000 bg-transparent xs:h-fit ${
        item["image-position"] != "right" ? "flex-row-reverse" : ""
      } ${isInView ? "grayscale-0" : "grayscale"}
    xs:flex-col-reverse xs:gap-8 xs:pt-0 xs:pb-[60px] items-center`}
    >
      <div
        className={`w-fit ${
          item["image-position"] == "right" ? "" : "max-w-[80%] w-full sm:max-w-full"
        } `}
      >
        <div className={`flex flex-col w-fit gap-5  lg:gap-4 grow-0 md:gap-3  h-fit xs:text-left xs:items-start xs:pt-0 ${
          item["image-position"] == "right" ? "max-w-[90%] md:max-w-full pr-3" : "max-w-[80%] md:max-w-[95%] sm:max-w-full xs:w-full xs:float-left float-right"
        }`}>
          <DarkButton
            text={item["top-heading-button"]}
            style={` xs:!float-left !font-normal ${
              item["image-position"] == "right" ? "!float-left " : "!float-left"
            }`}
          />
          <H2>
            <div
              className={`xs:w-full max-w-full leading-tight text-wrap
               ${
                 item["image-position"] == "right"
                   ? "float-left w-[716px] lg:w-[548px] md:w-[411px]"
                   : "float-left w-[616px] lg:w-[588px] md:w-[441px] sm:w-[98%] xs:w-full"
               }`}
              dangerouslySetInnerHTML={{ __html: item.heading }}
            />
          </H2>
          <Description
            children={null}
            text={item.description}
            classes={` xs:w-full  xs:float-left w-full"
            }`}
          />
          <PrimaryButton
            style="mt-[60px] xs:mt-[42px] !bg-darkOrange shadow-shadowOrange"
            text="Learn more"
            icon={false}
            link={item.link}
          />
        </div>
      </div>
      <div className="grow sm:max-w-[50%] xs:max-w-full">
        <img
          className="h-auto max-h-full w-full xs:mx-auto my-auto"
          alt=""
          src={item["image-path"]}
        />
      </div>
    </div>
  );
}

export default Technology;
