/**
 * This file contains the cards of our work section.
 */

import dynamic from "next/dynamic";

import data from "../../../home/work/data/index.json";
import SectionHeader from "@components/basic-components/section-header";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
const WorkCard = dynamic(() => import("../../../home/work/containers/cards/card"));

export type dataItemType = {
  heading: string;
  description: string;
  image_url: string;
  type: string;
  rows: string;
};

const Work: React.FC = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        style="lg:w-[650px]"
        buttonText="Work"
        description="Explore our showcase of our recent projects to see tha solutions we’ve recently brought to life."
      >
        <div className="w-[80%] lg:w-full text-wrap text-center mx-auto">
          See our recent{" "}
          <span className="italic font-light">UI/UX Design Projects.</span>
        </div>
      </SectionHeader>
      <div className="grid grid-cols-2 gap-5 lg:gap-[18px] sm:gap-3 xs:grid-cols-1">
        {data.sections.map((dataItem: dataItemType, index: number) => (
          <WorkCard item={dataItem} key={index} />
        ))}
      </div>
    </OuterFlexComponent>
  </OuterComponent>
);

export default Work;
