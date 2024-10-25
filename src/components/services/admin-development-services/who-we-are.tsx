import H3 from "@components/basic-components/headings/H3";
import OuterComponent from "@components/basic-components/outer-component";
import React from "react";

const WhoWeAre: React.FC = () => {
  return (
    <div id="who-we-are">
      <OuterComponent>
        <H3
          style="!font-[600] !leading-[1.3]"
          text="We enhance your site’s dynamism through tailored Admin panel development. Our custom Admin Panels simplify business management, offering user-friendly interfaces that can revolutionize your operations. By prioritizing what truly matters, you can streamline management tasks and avoid wasting time and resources on unnecessary manual processes."
        />
      </OuterComponent>
    </div>
  );
};

export default WhoWeAre;
