/**
 * This file contains the cards of our work section.
 */

import dynamic from "next/dynamic";

import data from "../../data/index.json";
const WorkCard = dynamic(() => import("./card"));

export type dataItemType = {
  heading: string;
  description: string;
  image_url: string;
  type: string;
  rows: string;
};

const WorkCards: React.FC<{ type: string }> = ({ type }) => (
  <div className="grid grid-cols-2 gap-5 lg:gap-[18px] sm:gap-3 xs:grid-cols-1">
    {data.sections
      .filter((i) => i.type.includes(type))
      .map((dataItem: dataItemType, index: number) => (
        <WorkCard item={dataItem} key={index} index={index} />
      ))}
  </div>
);

export default WorkCards;
