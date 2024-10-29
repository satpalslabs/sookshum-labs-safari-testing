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
          text="If you're seeking a skilled and dependable Flutter development agency, our dedicated team of experts brings extensive experience in crafting custom mobile apps for various businesses and industries."
        />
        <H5
          style="!text-white !font-[400] !leading-[1.3]"
          text={
            "When you partner with us, you receive comprehensive and continuous support throughout the development process and beyond. Our dedication to transparency and open communication guarantees that your needs are always met."
          }
        />
      </div>
    </OuterComponent>
  );
};

export default WhoWeAre;
