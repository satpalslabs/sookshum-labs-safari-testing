import H1 from "@components/basic-components/headings/H1";
import H5 from "@components/basic-components/headings/H5";
import OuterComponent from "@components/basic-components/outer-component";
import React from "react";

const WhoWeAre: React.FC = () => {
  return (
    <OuterComponent>
      <H1
        style="!font-[600] xxl:!text-[54px] !text-[48px] !tracking-normal lg:!text-[42px] sm:!text-[36px] xs:!text-[28px] !leading-[1.3]"
        text="Unlock the potential of your web applications with our NestJs development services. Our team harnesses the power of NestJs a progressive Node.js framework, to build scalable, efficient, and maintainable web solutions tailored to your specific needs. From API development to server-side rendering, we ensure your application performs flawlessly while delivering an exceptional user experience."
      />
    </OuterComponent>
  );
};

export default WhoWeAre;
