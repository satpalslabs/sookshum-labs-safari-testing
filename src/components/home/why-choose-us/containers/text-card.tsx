/**
 * This file contains the each text card of the text container in why choose us section.
 */

import dynamic from "next/dynamic";
import { dataItemType } from "./main-container";

const Description = dynamic(
  () => import("@components/basic-components/description")
);

const TextCard: React.FC<{
  item: dataItemType;
  index: number;
  selectedItem: number;
  setSelectedItem: Function;
}> = ({ item, index, selectedItem, setSelectedItem }) => (
  <div
    className={`relative w-full group z-0 max-h-fit cursor-pointer overflow-hidden rounded-[32px] sm:rounded-[20px]  p-[1px] transition-all hover:bg-gradient-to-br  hover:from-borderPrimary hover:via-transparent hover:to-borderPrimary duration-1000 ${
      selectedItem == index
        ? `bg-gradient-to-br from-borderPrimary via-transparent   grayscale-0 `
        : " bg-viewportBorder  grayscale"
    }`}
    onClick={() => setSelectedItem(index)}
  >
    <div className="w-full h-fit relative z-50 overflow-hidden rounded-[32px] bg-black sm:rounded-[20px] ">
      <div
        className={`w-full min-h-full h-fit bg-innerContainer p-4 pb-8 sm:p-[9px] sm:!py-[14px] lg:p-[14px] lg:pb-[20px] relative shadow-buttonInset rounded-[32px] sm:rounded-[20px] flex flex-col gap-2 md:gap-1 py-8 px-[33px] cursor-pointer  md:h-[107px] md:pl-5 md:pr-2 md:rounded-[24px]   sm:!h-fit xs:pl-4 justify-center  transition-all duration-1000 overflow-hidden`}
      >
        <div className="font-poppins text-[19px] leading-[1.4] md:text-base sm:text-sm text-h3_heading font-medium">
          {item.title}
        </div>
        {item.description && (
          <Description
            children={null}
            text={item.description}
            classes={`text-base transition-all !font-normal ease-in-out duration-600 md:text-[13px] sm:!text-xs`}
          />
        )}
      </div>
    </div>
    <div
      className={`absolute z-[999] bg-transparent transition-all duration-1000 top-0 left-0 w-full h-full  ${
        selectedItem == index
          ? `bg-gradientOnHover `
          : "  hover:bg-gradientOnHover"
      }`}
    ></div>
  </div>
);

export default TextCard;
