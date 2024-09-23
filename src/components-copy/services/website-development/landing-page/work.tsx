/**
 * This file contains the cards of our work section.
 */

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
  <section className="px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px] flex flex-col gap-[70px] md:gap-[60px] sm:gap-12   items-center bg-black overflow-hidden max-w-[1920px] mx-auto">
    <SectionHeader
      style="lg:w-[650px]"
      buttonText="Work"
      description="We have helped over 400 companies to elevate their business with top-notch technology solutions."
    >
      <div className="w-full lg:w-full text-wrap text-center mx-auto">
        How our
        <span className="italic font-normal"> clients </span>
        are leading the change
      </div>
    </SectionHeader>
    <WorkCards type="" />
  </section>
);

export default Work;
