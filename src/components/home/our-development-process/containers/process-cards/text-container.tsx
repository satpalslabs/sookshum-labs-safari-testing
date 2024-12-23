/**
 * This file contains the text section for each service card.
 */

import dynamic from "next/dynamic";
import { dataItemType } from ".";
import H3 from "@components/basic-components/headings/H3";
const Description = dynamic(
  () => import("@components/basic-components/description")
);

const TextContainer: React.FC<{
  item: dataItemType;
  index: number;
}> = ({ item, index }) => (
  <div className="px-4 lg:px-5 relative z-10 md:px-0 xs:px-4">
    <div className="flex px-4 flex-col gap-6 md:gap-5 md:px-5 sm:px-[17px] sm:gap-4 grow h-fit md:pr-3 sm:pr-[10.5px] xs:px-0">
      <div className="flex flex-col gap-[14px] md:gap-3 grow sm:gap-[5px] sm:pt-0">
        <H3
          style="!text-[19px] md:!text-base sm:!text-sm !text-white"
          text={item.title}
        />
        <Description
          children={null}
          text={item.description}
          classes={`${index == 3 ? "px-6" : ""} sm:px-0 !font-normal`}
        />
      </div>
    </div>
  </div>
);

export default TextContainer;
