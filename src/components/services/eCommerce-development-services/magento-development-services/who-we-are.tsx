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
        alt="image"
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
          At Sookshum Labs, we are a dedicated team of Magento development
          experts with years of experience in delivering robust eCommerce
          solutions. We specialize in creating customized Magento stores that
          drive sales and enhance user experience. Our skilled developers and
          designers work closely with you to understand your unique business
          needs, ensuring every project is tailored to your goals. Committed to
          innovation and excellence, we leverage the latest technologies and
          best practices to optimize your online store.
          <br />
          <br />
          Partner with us to unlock the full potential of your Magento platform
          and elevate your eCommerce success.
        </div>
      </Description>
    </div>
  </div>
);
