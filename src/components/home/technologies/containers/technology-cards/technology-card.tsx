"use client";

import H3 from "@components/basic-components/headings/H3";
import Description from "@components/basic-components/description";
import { dataItemType } from ".";
import { useRef } from "react";
import { useInView } from "@lib/use-in-view";

const TechnologyCard = ({
  item,
  index,
}: {
  item: dataItemType;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  return (
    <div
      ref={ref}
      className={`flex  justify-between items-center w-full transition-all  duration-1000 bg-transparent xs:h-fit py-2 ${
        item.image_position != "right" ? "flex-row-reverse" : ""
      } ${isInView ? "grayscale-0" : "grayscale"}
      xs:gap-2 xs:flex-col-reverse`}
    >
      <div
        className={`flex flex-col gap-5 lg:gap-4 md:gap-3  h-fit xs:pt-0`}
      >
        <H3 style="" text={item.title} />
        <Description
          children={null}
          text={item.description}
          classes={`${
            index == 0
              ? "w-[581px] md:w-[491px] sm:w-[384px]"
              : " w-[523px]  md:w-[413px] sm:w-[329px]"
          } xs:w-full !font-[300]`}
        />
      </div>
      <div
        className={`h-auto my-auto w-[505px] lg:h-[360px] lg:w-auto sm:w-fit sm:h-[300px] xs:h-[281px] xs:w-fit ${
          index == 0
            ? " -mr-[68px] lg:h-[450px] lg:-mr-0 sm:scale-105  xs:scale-100 xs:h-[390px] xs:mx-auto"
            : index == 1
            ? "-ml-3 xs:scale-100 xs:mx-auto"
            : " xs:scale-100 xs:mx-auto"
        }`}
      >
        <img
          src={item.image_url}
          width={800}
          height={800}
          alt=""
          className={`h-full w-full object-contain `}
        />
      </div>
    </div>
  );
};

export default TechnologyCard;
