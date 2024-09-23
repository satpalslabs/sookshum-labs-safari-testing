/**
 * This component contains each card of slider.
 */

import Description from "@components/basic-components/description";
import H6 from "@components/basic-components/headings/H6";
import React from "react";
import { industryType } from ".";
import Card from "@components/basic-components/card";

const Industry = ({
  industry,
  isInView,
}: {
  industry: industryType;
  isInView: boolean;
}) => (
  <Card isInView={isInView} style="!h-full flex flex-col gap-4 lg:gap-3 sm:gap-2 !pb-0">
    <img
      height={400}
      width={400}
      src={industry.image}
      alt=""
      className="h-[179px] w-fit lg:h-[112px] pl-3 pb-2 pt-1 object-contain float-left sm:max-w-[100px]"
    />
    <div className="p-4 flex flex-col gap-[10px] xs:p-1 ">
      <H6 classes="text-white" text={industry.title} />
      <Description
        children={null}
        text={industry.description}
        classes="w-full sm:px-3 xs:px-0 !font-normal"
      />
      <ul className="flex flex-col gap-2 text-white list-disc pl-3 text-lg lg:text-sm xs:pl-4 font-poppins font-medium">
        {industry.points.map((point: string, index: any) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  </Card>
);

export default Industry;
