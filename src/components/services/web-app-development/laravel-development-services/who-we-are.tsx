import H1 from "@components/basic-components/headings/H1";
import H5 from "@components/basic-components/headings/H5";
import OuterComponent from "@components/basic-components/outer-component";
import React from "react";

const WhoWeAre: React.FC = () => {
  return (
    <OuterComponent>
      <div className="flex flex-row xs:flex-col gap-5">
        <H1
          style="w-full !font-[600] xxl:!text-[64px] !text-[48px] lg:!text-[42px] sm:!text-[36px] xs:!text-[28px] !leading-[1.3]"
          text="We help SaaS and enterprise teams succeed with Laravel"
        />
        <div className="w-full text-2xl md:text-xl leading-[38.4px] md:leading-8 tracking-[-0.02em]">
          <p>
            Whether you need a firm to build your idea, support an existing
            codebase, or augment your engineering team, we’ve got you.
          </p>
          <p className="my-5">Our disciplines include: </p>
          <ul className="list-disc ps-8">
            <li>Application engineering</li>
            <li>Architecture and roadmapping</li>
            <li>Project management</li>
            <li>DevOps and infrastructure</li>
            <li>UX/UI design</li>
            <li>QA engineering</li>
            <li>Complex troubleshooting</li>
          </ul>
        </div>
      </div>
    </OuterComponent>
  );
};

export default WhoWeAre;
