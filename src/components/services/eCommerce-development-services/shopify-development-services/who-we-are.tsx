import H1 from "@components/basic-components/headings/H1";
import H5 from "@components/basic-components/headings/H5";
import OuterComponent from "@components/basic-components/outer-component";
import React from "react";

const WhoWeAre: React.FC = () => {
  return (
    <OuterComponent>
      <div className="flex flex-col gap-3 xxl:pb-[90px] pb-[136px] lg:pb-0">
        <H5 style="!text-white !font-[600]" text={"About US"} />
        <H1
          style="!font-[600] xxl:!text-[64px] !text-[48px] lg:!text-[42px] sm:!text-[36px] xs:!text-[28px] !leading-[1.3]"
          text="We’re a team of eCommerce experts dedicated to providing exceptional customer experiences for Shopify Plus brands."
        />
      </div>
    </OuterComponent>
  );
};

export default WhoWeAre;
