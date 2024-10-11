import H1 from "@components/basic-components/headings/H1";
import H5 from "@components/basic-components/headings/H5";
import OuterComponent from "@components/basic-components/outer-component";
import React from "react";

const WhoWeAre: React.FC = () => {
  return (
    <OuterComponent>
      <div className="flex flex-col gap-3">
        <H5 style="!text-white !font-[600]" text={"Our Approach"} />
        <H1
          style="!font-[600] xxl:!text-[64px] !text-[48px] lg:!text-[42px] sm:!text-[36px] xs:!text-[28px] !leading-[1.3]"
          text="We’re here to get you where you want to go and beyond. Digital shouldn’t be done just for the sake of digital, but because it’s the one of the most important tools to drive your business forward. We turn digital into business results. Let us help you succeed."
        />
      </div>
    </OuterComponent>
  );
};

export default WhoWeAre;
