/**
 * This component contains each core service card.
 */

import dynamic from "next/dynamic";
const ImageContainer = dynamic(() => import("./image-container"));
const TextContainer = dynamic(() => import("./text-container"));

import { dataItem } from "..";
import Card from "@components/basic-components/card";
const ServiceCard = ({
  isInView,
  item,
}: {
  isInView: boolean;
  item: dataItem;
}) => (
  <div
    className={`group mt-[73px] p-4 pb-8 sm:p-[9px] sm:pb-[14px] lg:p-[14px] lg:pb-[23px] relative shadow-buttonInset bg-innerContainer rounded-[32px] sm:rounded-[20px] flex flex-col transition-all duration-1000 hover:bg-gradientOnHover border-[1.5px] cursor-pointer hover:border-borderPrimary ${
      isInView
        ? "border-viewportBorder  grayscale-0"
        : "border-transparent grayscale"
    } `}
  >
    <div className="xxl:-mt-[15%] xl:-mt-[25%] lg:-mt-[20%] md:-mt-[15%] sm:-mt-[15%] xs:-mt-[4%] xs:-translate-y-[18%] w-full h-[150px] xl:h-[200px] lg:[100px] md:[83px] sm:h-[78px]  2xs:h-[60px]">
      <ImageContainer imageId={item.id} />
    </div>
    <TextContainer item={item} />
  </div>
);

export default ServiceCard;
