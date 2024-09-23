/**
 * This file contains the text container of our work section.
 */

import { dataItemType } from ".";
// import H5 from "@components/basic-components/headings/H5";
// const H6 = dynamic(() => import("@components/basic-components/headings/H6"));

const TextContainer = ({ item }: { item: dataItemType }) => (
  <div className="px-4 lg:px-3 md:px-2 grow xs:px-4 absolute bottom-6 z-66">
    <div className="bg-black_gradient h-[162px] w-full rounded-b-2xl rotate-180 lg:hidden md:block sm:hidden"></div>
    <div className="flex px-4 flex-col gap-6 md:gap-5 md:px-4 sm:pl-[17px] sm:gap-4 grow h-fit md:pr-3 sm:pr-[1px] xs:px-0">
      <div className="flex flex-col gap-[14px] md:gap-3 grow sm:gap-[5px] sm:pt-0 w-[490px] sm:w-[85%]">
        {/* Tempurary disabled */}
        {/* <H5 style="text-white" text={item.heading} />
        <H6
          text={item.description}
          classes="!font-[400] text-white leading-[33px] sm:text-xs"
        /> */}
      </div>
    </div>
  </div>
);

export default TextContainer;
