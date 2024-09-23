/**
 * This file contains the each text card of the text container in why choose us section.
 */


import dynamic from "next/dynamic";
import { dataItemType } from "./main-container";

const H6 = dynamic(() => import("@components/basic-components/headings/H6"));
const Description = dynamic(() => import("@components/basic-components/description"));

function TextCard({
  item,
  index,
  selectedItem,
  setSelectedItem,
}: {
  item: dataItemType;
  index: number;
  selectedItem: number;
  setSelectedItem: Function;
}) {
  return (
    <div
      className={`w-full flex flex-col gap-2 bg-innerContainer py-8 px-[33px] cursor-pointer rounded-[32px] h-[136px] md:h-[107px] md:pl-5 md:pr-2 md:rounded-[24px] md:gap-1 sm:py-5 sm:!h-fit xs:pl-4 shadow-buttonInset justify-center  transition-all duration-1000 hover:bg-gradientOnHover  border  hover:!border-borderPrimary overflow-hidden ${
        selectedItem == index
          ? "!border-borderPrimary bg-gradientOnHover"
          : "border-transparent"
      }`}
      onClick={() => setSelectedItem(index)}
    >
      <H6 classes="text-white" text={item.title} />
      {item.description && (
         <Description children={null}
          text={item.description}
          classes={`text-base transition-all !font-normal ease-in-out duration-600 md:text-[13px] sm:!text-xs`}
        />
      )}
    </div>
  );
}

export default TextCard;
