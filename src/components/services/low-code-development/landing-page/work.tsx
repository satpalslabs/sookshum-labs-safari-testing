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
  <div id="work">
    <OuterComponent>
      <OuterFlexComponent>
        <SectionHeader
          style="lg:w-[650px] sm:w-[50%]"
          buttonText="Work"
          description="We have helped over 400 companies to elevate their business with top-notch technology solutions."
        >
          <div className="w-full lg:w-full text-wrap text-center mx-auto leading-[1.4] capitalize">
            How Our
            <span className="italic font-normal"> Clients </span>
            Are Leading The Change
          </div>
        </SectionHeader>
        <WorkCards type="" />
      </OuterFlexComponent>
    </OuterComponent>
  </div>
);

export default Work;
