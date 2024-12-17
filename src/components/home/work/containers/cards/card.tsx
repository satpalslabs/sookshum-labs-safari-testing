/**
 * This file contains the each work card of our work section.
 */

// import dynamic from "next/dynamic";
import Image from "next/image";
import { dataItemType } from ".";
// const TextContainer = dynamic(() => import("./text-container"));

const WorkCard = ({ item }: { item: dataItemType }) => (
  <div
    style={{
      gridArea: `${item.rows}`,
    }}
    className="bg-innerContainer rounded-[50px] lg:rounded-[26px] shadow-buttonInset cursor-pointer overflow-hidden  p-4 sm:p-3 xs:p-2 relative col-span-1 sm:col-auto xs:[grid-area:auto!important] group"
  >
    <Image
      blurDataURL="URL"
      placeholder="blur"
      src={item.image_url}
      height={2200}
      width={800}
      alt="image"
      className="w-full h-full object-cover rounded-[32px] lg:rounded-[26px] transition-all duration-1000 group-hover:scale-105 work-image"
    />
    {/* <TextContainer item={item} /> */}
    <div className="bg-gradient-to-b from-[#00000000] to-[#1E1E1E] h-[35%] absolute bottom-0 w-full rounded-b-2xl z-0 left-0"></div>
  </div>
);

export default WorkCard;
