/**
 * This file contains the each work card of our work section.
 */

import dynamic from "next/dynamic";
import { dataItemType } from ".";
const TextContainer = dynamic(() => import("./text-container"));

const WorkCard = ({ item, index }: { item: dataItemType; index: number }) => (
  <div
    style={{
      gridArea: `${item.rows}`,
    }}
    className="bg-innerContainer rounded-[50px] lg:rounded-[26px] shadow-buttonInset cursor-pointer overflow-hidden  p-4 sm:p-3 xs:p-2 relative col-span-1 sm:col-auto xs:[grid-area:auto!important]"
  >
    <img
      src={item.image_url}
      height={2200}
      width={800}
      alt=""
      className="w-full h-full object-cover rounded-[32px] lg:rounded-[26px]"
    />
    <div className="bg-gradient-to-b from-[#00000000] to-[#1E1E1E] h-[35%] absolute bottom-0 w-full rounded-b-2xl z-0"></div>
    <TextContainer item={item} />

  </div>
);

export default WorkCard;
