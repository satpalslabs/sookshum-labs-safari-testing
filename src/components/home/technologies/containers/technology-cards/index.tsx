/**
 * This file contains the all cards of technology we use section..
 */

import dynamic from "next/dynamic";
import data from "../../data/index.json";
const TechnologyCard = dynamic(() => import("./technology-card"));

export type dataItemType = {
  title: string;
  description: string;
  image_position: string;
  image_url: string;
  style: any;
};

const TechnologyCards: React.FC = () => (
  <div className="flex flex-col w-full xs:gap-12 sm:gap-6">
    {data.sections.map((dataItem: dataItemType, index: number) => (
      <TechnologyCard item={dataItem} index={index} key={index} />
    ))}
  </div>
);

export default TechnologyCards;
