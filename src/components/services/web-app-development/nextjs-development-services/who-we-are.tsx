import H1 from "@components/basic-components/headings/H1";
import H5 from "@components/basic-components/headings/H5";
import OuterComponent from "@components/basic-components/outer-component";
import React from "react";

const WhoWeAre: React.FC = () => {
  return (
    <div id="who-we-are">
      <OuterComponent>
        <div className="flex flex-col gap-3">
          <H5 style="!text-white !font-[600]" text={"Our Approach"} />
          <H1
            style="!font-[600] xxl:!text-[64px] !text-[48px] lg:!text-[42px] sm:!text-[36px] xs:!text-[28px] !leading-[1.3]"
            text="We're here to help you reach your goals and beyond. Digital transformation shouldn't be undertaken merely for its own sake; it's one of the most crucial tools for moving your business forward. We convert digital efforts into tangible business results. Let us support you in achieving success."
          />
        </div>
      </OuterComponent>
    </div>
  );
};

export default WhoWeAre;
