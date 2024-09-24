/**
 * This file contains each service card of our-services section.
 */

import Image from "next/image";
import { dataItemType } from ".";
import dynamic from "next/dynamic";

const TextContainer = dynamic(() => import("./text-container"));

const ServiceCard = ({
  item,
  isInView,
}: {
  item: dataItemType;
  isInView: boolean;
}) => (
  <div
    className={`group flex flex-col gap-2 pb-8 min-h-fit lg:pb-6 bg-innerContainer rounded-[32px] lg:rounded-[26px] sm:gap-3 shadow-buttonInset transition-all duration-1000 hover:bg-gradientOnHover border border-transparent cursor-pointer hover:!border-borderPrimary overflow-hidden sm:w-[49%] xs:w-full ${
      isInView
        ? "!border-viewportBorder grayscale-0"
        : "border-transparent grayscale"
    }`}
  >
    <div className="w-full xll:h-[136px] lg:h-[221px] sm:h-[261px] flex items-center justify-center xs:h-[239px] h-[334px] xxl:h-[354px] overflow-hidden">
      <Image
        loading="eager"
        src={item.image_url}
        alt={"Service Image"} // Provide meaningful alt text
        layout="fill" // Use 'fill' to cover the parent container
        objectFit="cover" // Maintain aspect ratio and cover
        className="object-cover" // Ensure the image covers the space correctly
      />
    </div>
    <TextContainer item={item} />
  </div>
);

export default ServiceCard;
