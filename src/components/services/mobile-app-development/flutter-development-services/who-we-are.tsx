import H1 from "@components/basic-components/headings/H1";
import H5 from "@components/basic-components/headings/H5";
import OuterComponent from "@components/basic-components/outer-component";
import React from "react";

const WhoWeAre: React.FC = () => {
  return (
    <OuterComponent>
      <div className="flex flex-col gap-3 xxl:pb-[90px] pb-[136px] lg:pb-0">
        <H1
          style="!font-[600] xxl:!text-[64px] !text-[48px] lg:!text-[42px] sm:!text-[36px] xs:!text-[28px] !leading-[1.3]"
          text="If you’re looking for a skilled, reliable Flutter development agency, Our dedicated team of experts has extensive experience creating custom mobile apps for a wide range of businesses and sectors."
        />
        <H5 style="!text-white !font-[400] !leading-[1.3]" text={"When you partner with us, you get comprehensive, ongoing support throughout the development process and beyond. Our commitment to tranparency and open communication ensures that your "} />
      </div>
    </OuterComponent>
  );
};

export default WhoWeAre;
