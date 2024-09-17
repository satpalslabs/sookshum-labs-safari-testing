/**
 * This component contains each card of slider.
 */

import Description from "@components/basic-components/description";
import H6 from "@components/basic-components/headings/H6";
import React from "react";
import { industryType } from ".";
import CheckIcon from "@components/basic-components/check-icon";

const Industry = ({
  industry,
  isInView,
}: {
  industry: industryType;
  isInView: boolean;
}) => (
  <div
    className={`p-4 pt-6 w-fit bg-innerContainer shadow-buttonInset rounded-[32px] transition-all duration-1000 hover:bg-gradientOnHover  border border-transparent cursor-pointer hover:!border-borderPrimary overflow-hidden flex flex-col gap-[44px] pb-8 lg:p-3 lg:rounded-[26px] sm:gap-3 h-full grow ${
      isInView
        ? "!border-viewportBorder  grayscale-0"
        : "border-transparent grayscale"
    }`}
  >
    <img
      height={400}
      width={400}
      src={industry.image}
      alt=""
      className="h-[80px] w-fit lg:h-[50px] object-contain float-left"
    />
    <div className="p-4 flex flex-col gap-[18px] xs:p-1 grow">
      <H6 classes="text-white" text={industry.title} />
      <Description
        children={null}
        text={industry.description}
        classes="w-full sm:px-3 xs:px-0 text-[18px] !font-normal"
      />
      <ul className="flex flex-col gap-2 text-white list-disc text-lg lg:text-sm xs:pl-0 font-poppins font-medium grow">
        {industry.points.map((point: string, index: any) => (
          <div className="flex gap-3" key={index}>
            <div className="flex shrink-0 items-center justify-center w-[22px] h-[22px] lg:w-[22px] lg:h-[22px] lg:p-1 bg-primary rounded-full">
              <CheckIcon />
            </div>
            <Description
              children={null}
              classes="!text-white leading-[1.4] text-base !font-normal"
              text={point}
            />
          </div>
        ))}
      </ul>
    </div>
  </div>
);

export default Industry;
