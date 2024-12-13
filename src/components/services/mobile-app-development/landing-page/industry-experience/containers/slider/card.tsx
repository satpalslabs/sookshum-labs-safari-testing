/**
 * This component contains each card of slider.
 */

import Description from "@components/basic-components/description";
import H6 from "@components/basic-components/headings/H6";

import { industryType } from ".";
import CheckIcon from "@components/basic-components/check-icon";
import Image from "next/image";
import Card from "@components/basic-components/card";

const Industry = ({
  industry,
  isInView,
}: {
  industry: industryType;
  isInView: boolean;
}) => (
  <Card isInView={isInView} style="!pb-0 h-full">
    <div className="p-1 !h-full flex flex-col gap-4 lg:gap-3 sm:gap-2 ">
      <Image
        height={400}
        width={400}
        src={industry.image}
        alt="image"
        className="h-[80px] lg:h-[60px] max-w-fit object-contain float-left"
      />
      <div className="p-3 xs:p-0 grow">
        <H6 classes="!text-white" text={industry.title} />
        <Description
          children={null}
          text={industry.description}
          classes="w-full text-[18px] !font-normal"
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
  </Card>
);

export default Industry;
