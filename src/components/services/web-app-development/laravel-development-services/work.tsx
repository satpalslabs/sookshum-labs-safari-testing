/**
 * This file contains the cards of our work section.
 */

import OuterFlexComponent from "@components/basic-components/main-flex-container";
import OuterComponent from "@components/basic-components/outer-component";
import SectionHeader from "@components/basic-components/section-header";
import WorkCards from "@components/home/work/containers/cards";

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
        style="lg:w-[650px] mx-auto"
        buttonText="Work"
        description="Immerse yourself in a showcase of our latest and greatest projects. Get inspired by what's possible."
      >
        <div className="w-full lg:w-full text-wrap text-center mx-auto">
          How Our
          <span className="italic font-normal"> Clients </span>
          Are Leading The Change
        </div>
      </SectionHeader>
      <WorkCards type="" />
    </OuterFlexComponent>
  </OuterComponent>
);

export default Work;
