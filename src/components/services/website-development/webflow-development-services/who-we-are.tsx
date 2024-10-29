import H1 from "@components/basic-components/headings/H1";
import OuterComponent from "@components/basic-components/outer-component";
import Image from "next/image";
import React from "react";

const WhoWeAre: React.FC = () => {
  return (
    <OuterComponent>
      <div className="flex items-center gap-3 xxl:pb-[90px] pb-[136px] lg:pb-0">
        <H1
          style="!font-[600] !text-[48px] lg:!text-[42px] sm:!text-[36px] xs:!text-[28px] !leading-[1.3] grow"
          text="Your Website development doesn’t need to become an engineering challenge.  "
        />
        <Image
          alt=""
          width="2200"
          height="2200"
          src={
            "/services/website-development/webflow-development-services/webflow.png"
          }
          className="w-[300px] h-auto lg:w-[242px] xs:hidden"
          blurDataURL="URL"
          placeholder="blur"
        />
      </div>
    </OuterComponent>
  );
};

export default WhoWeAre;
