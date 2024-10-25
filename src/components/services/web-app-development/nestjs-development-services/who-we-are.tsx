import H1 from "@components/basic-components/headings/H1";
import OuterComponent from "@components/basic-components/outer-component";
import React from "react";

const WhoWeAre: React.FC = () => {
  return (
    <div id="who-we-are">
      <OuterComponent>
        <H1
          style="!font-[600] xxl:!text-[54px] !text-[48px] !tracking-normal lg:!text-[42px] sm:!text-[36px] xs:!text-[28px] !leading-[1.3]"
          text="Unleash the full potential of your web applications with our NestJS development services. Our team leverages the capabilities of NestJS, a cutting-edge Node.js framework, to create scalable, efficient, and maintainable web solutions customized to meet your unique requirements. Whether it's API development or server-side rendering, we guarantee that your application will perform seamlessly while providing an outstanding user experience."
        />
      </OuterComponent>
    </div>
  );
};

export default WhoWeAre;
