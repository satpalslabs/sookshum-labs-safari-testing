import H1 from "@components/basic-components/headings/H1";
import H5 from "@components/basic-components/headings/H5";
import OuterComponent from "@components/basic-components/outer-component";
import React from "react";

const WhoWeAre: React.FC = () => {
  return (
    <OuterComponent>
      <div className="flex flex-col gap-3 xxl:pb-[90px] pb-[136px] lg:pb-0">
        <H1
          style="!font-[600] !text-[48px] lg:!text-[42px] sm:!text-[36px] xs:!text-[28px] !leading-[1.3]"
          text="Professionally designed and developed WordPress websites for growth and scale."
        />
        <H5
          style="!text-white !font-[400] !leading-[1.3] unreset"
          text={
            "<p>Having launched 1000’s of WordPress websites for both large and small organizations a like, we can say we have a deep expertise with WordPress. We excel at complex builds for high-traffic and mission-critical applications, as well as brochure sites for SMBs. Our tried-and-true project planning and discovery set the stage to deliver projects on time and within budget, regardless of their size.</p><p>In addition to building complex WordPress sites, we offer ongoing WordPress management and troubleshooting. Whether you have an urgent issue or have a new idea and need someone to build it, our team of WordPress experts is there to help.</p> "
          }
        />
      </div>
    </OuterComponent>
  );
};

export default WhoWeAre;
