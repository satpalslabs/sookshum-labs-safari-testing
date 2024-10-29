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
        id="work"
        style=""
        buttonText="Work"
        description="Explore our showcase of our recent projects to see the solutions we’ve recently brought to life."
      >
        <div className="leading-[1.4] capitalize">
          See our recent <span className="italic font-light">Projects.</span>
        </div>
      </SectionHeader>
      <WorkCards type="" />
    </OuterFlexComponent>
  </OuterComponent>
);

export default Work;
