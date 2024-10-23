import H3 from "@components/basic-components/headings/H3";
import OuterComponent from "@components/basic-components/outer-component";
import React from "react";

const WhoWeAre: React.FC = () => {
  return (
    <OuterComponent>
      <H3
        style="!font-[600] !leading-[1.3]"
        text="We make your site more dynamic with Admin panel development. Our customized Admin Panels will help you simplify the management of your business. They’re very user-friendly and can completely transform how you manage your business. Focus on the important things when managing, not just doing everything yourself and wasting time and resources along the way."
      />
    </OuterComponent>
  );
};

export default WhoWeAre;
