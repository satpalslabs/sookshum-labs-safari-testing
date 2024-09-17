import DarkButton from "@components/basic-components/button";
import GradientText from "@components/basic-components/gradient-text";
import PrimaryButton from "@components/basic-components/primary-buttom";
import React from "react";
import { HeroSection } from ".";

const GradientSection: React.FC<HeroSection> = (props) => (
  <div className="w-full xxl:w-[80%] relative z-20 mt-[32px] lg:mt-[77px] px-[81px] h-fit overflow-hidden sm:px-5 md:px-[20px] lg:px-10 2xs:px-5 pt-[72px] pb-[65] lg:pt-[0px] sm:pb-8 sm:pt-0 xs:pt-0 xs:pb-16 max-w-[1920px] mx-auto">
    <div className=" flex flex-col items-center justify-center w-full text-center gap-[30px] lg:gap-4 xs:gap-3">
      <DarkButton text={props.buttonText} style="" />
      {props.additionalDescription && (
        <div
          className={`text-[32px] lg:text-[28px] sm:text-base xs:text-xs w-full font-poppins font-semibold tracking-[0.06em] leading-[40px] text-center xs:text-wrap xs:px-4`}
        >
          {props.additionalDescription}
        </div>
      )}
      <GradientText
        text={props.gradientText}
        classes={`sm:text-[48px] sm:w-full xs:text-[32px] xxl:w-[80%] xxl:mx-auto ${props.gradientTextStyle}`}
      />
      <div
        className={`lg:text-[28px] sm:text-base xs:text-xs w-full font-poppins font-medium leading-[1.3] text-center xs:text-wrap xs:px-4 ${
          props.additionalDescription && props.aboutPage
            ? "xl:px-[100px] text-[32px]"
            : "text-[30px] lg:text-[23px] sm:text-base leading-[1.1] xs:!px-0 xs:text-[11.5px]"
        }
          } `}
      >
        {props.aboutPage}
      </div>
      {props["contact-us"] && (
        <PrimaryButton
          icon={true}
          text="Request a quote"
          style="xs:mt-[32px] mt-[50px] lg:mt-[28px] sm:mt-[20px]"
          link="/contact"
        />
      )}
    </div>
  </div>
);

export default GradientSection;
