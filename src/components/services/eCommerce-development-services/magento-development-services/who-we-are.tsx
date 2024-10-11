import Description from "@components/basic-components/description";
import H1 from "@components/basic-components/headings/H1";
import OuterComponent from "@components/basic-components/outer-component";
import Image from "next/image";
import React from "react";

const WhoWeAre: React.FC = () => {
  return (
    <OuterComponent>
      <FlexComponent />
    </OuterComponent>
  );
};

export default WhoWeAre;

const FlexComponent: React.FC = () => (
  <div className="flex xs:flex-col gap-[60px] lg:gap-[30px] sm:gap-3 xs:gap-6">
    <div className="w-2/4 xxl:w-[40%] relative lg:w-[522px] sm:w-[340px] shrink-0 xs:w-full">
      <Image
        alt=""
        width="611"
        height="506"
        src="/services/e-commerce-development/magento-development-services/who-we-are/magento-hero.webp"
        className="w-full xxl:h-[600px] sm:absolute xs:relative lg:w-[522px] sm:w-[388px] xs:w-full sm:scale-110 xs:scale-105 left-2 lg:-ml-[22px] xs:-ml-[10px] shrink-0 object-contain"
        blurDataURL="URL"
        placeholder="blur"
      />
    </div>
    <div className="gap-3 relative z-30">
      <H1
        text="Who We Are"
        style="!font-[500] lg:!text-[42px] sm:!text-[36px] xs:!text-[28px]"
      />
      <Description classes="" text="">
        <div className="text-[20px] lg:text-[14px] sm:text-[13px] xs:text-xs leading-[1.4] text-white">
          We are a U.S.-based, enterprise-grade eCommerce agency rooted in the
          Rocky Mountain region, comprised of senior-level engineers who are
          specialists, not generalists. With deep expertise in our respective
          niches, we understand the importance of stying ahead in an
          ever-evolving digital landscape. Your partner should be more than a
          service provider; they should be an expert advisor, proactively
          recommending and implementing cutting-edge solutions that drive your
          growth while eliminating operational headaches.
          <br />
          <br />
          If you’re a brand or retailer seeking more specialized expertise from
          your agency, it’s time to partner with a team that truly knows how to
          deliver.
        </div>
      </Description>
    </div>
  </div>
);
