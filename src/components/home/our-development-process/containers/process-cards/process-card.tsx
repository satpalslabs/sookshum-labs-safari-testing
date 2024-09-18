/**
 * This file contains the process card of our development section.
 */

import dynamic from "next/dynamic";
import { dataItemType } from ".";
const TextContainer = dynamic(() => import("./text-container"));

const DevelopmentProcessCard = ({
  item,
  index,
  isInView,
}: {
  item: dataItemType;
  index: number;
  isInView: boolean;
}) => (
  <div
    style={{
      gridColumn: `span ${item.cols} / span ${item.cols}`,
    }}
    className={`flex gap-4 pb-8 sm:!col-span-1  lg:pb-6 ${
      index == 3 ? "flex-row text-center items-center h-[394px]" : "flex-col"
    } sm:flex-col sm:text-left shadow-buttonInset bg-innerContainer rounded-[32px] lg:rounded-[26px] md:gap-3 sm:gap-3 transition-all duration-1000 hover:bg-gradientOnHover  border border-transparent cursor-pointer hover:!border-borderPrimary overflow-hidden ${
      isInView
        ? "!border-viewportBorder  grayscale-0"
        : "border-transparent grayscale"
    }`}
  >
    {/* <div
        className={`w-full h-[208px] `}
      > */}
    <div
      className={`w-full  xll:h-[136px] lg:h-[221px] sm:h-[261px] xs:h-[239px] ${
        index == 3 ? "h-full" : "h-[208px] xxl:h-[300px]"
      } overflow-hidden`}
    >
      <img
        src={item.image_url}
        height={400}
        width={400}
        alt=""
        className={`${index == 3 ? "h-full w-fit mx-auto sm:w-full " : "h-fit sm:h-full w-full"} object-cover `}
      />
    </div>
    <TextContainer item={item} index={index} />
  </div>
);

export default DevelopmentProcessCard;
