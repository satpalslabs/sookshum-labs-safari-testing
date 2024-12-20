"use client";
import Description from "@components/basic-components/description";
import H2 from "@components/basic-components/headings/H2";
import { useEffect } from "react";
import Image from "next/image";
import { animation } from "@components/services/landing-page/cover/scroll-animation";
const Cover: React.FC = () => {
  useEffect(() => {
    animation();
  });
  return (
    <div
      className=" bg-black overflow-visible max-w-[1440px] mx-auto w-full h-full "
      id="cover"
    >
      <div
        id="animationDiv"
        className="relative p-[5rem] py-[310px] lg:py-[292px] sm:py-[148px] md:py-[195px] xs:py-[151px] z-[2] text-center lg:p-[2.5rem] lg:box-border md:gap-[16.125rem] md:p-[1.875rem] sm:gap-[1.875rem] sm:p-[1.25rem] h-full max-w-[1920px] mx-auto"
      >
        <>
          <PencilIon />
          <PuzzleIcon />
        </>
        <TextContainer />
        <>
          <RocketIcon />
        </>
      </div>
    </div>
  );
};

export default Cover;

// Text container in Center
const TextContainer: React.FC = () => (
  <div className="w-full  flex flex-col justify-center items-center !text-white gap-[0.625rem] ">
    <H2>
      <div className="text-wrap hero-text">
        Looking For Expert
        <span className="italic font-light"> Directus CMS </span> <br />
        Development Services?
      </div>
    </H2>
    <Description
      children={null}
      text="Hire Directus developers from our Directus CMS Development company, Sookshum Labs. Our team of expert Directus developers provides the best Directus Development services tailored to your unique business needs. We also have custom Directus solutions or want to enhance your existing Directus CMSl our Directus developers have covered you. With our years of expertise and valuable experience, we ensure the smooth and effortless integration and customization of Directus CMS for your business. Contact us to hire Directus developers for your valuable and worthwhile project. "
      classes=" max-w-[990px] text-[20px]  lg:text-[20px] md:text-[20px] sm:text-base xs:text-am tracking-tight lg:max-w-[858px] lg:max-w-[858px] sm:max-w-[690px] w-full font-light text-white p-0 xs:tracking-normal"
    />
  </div>
);

// Top Icon -- 1
const PencilIon: React.FC = () => (
  <div className="  absolute w-[6.094rem] left-[8.81%] top-[20.75%] lg:left-[51px] lg:top-[76px] sm:top-[30px] xs:top-[50px] sm:right-[46px] h-[6.094rem] object-contain lg:w-[5.375rem] md:w-[4.125rem] ">
    <div className="relative w-full h-[200px] lg:h-[150px] sm:h-[100px] xs:h-[80px] overflow-visible">
      <Image
        width="200"
        height="200"
        className="absolute animate-top transition-all duration-700 ease-linear top-[25%] w-[92px] h-[92px] lg:w-[84px] sm:w-[76px] xs:w-[57px] lg:h-auto  rounded-[28px] lg:rounded-[24px] xs:rounded-[20px] rotate-[31.38deg]"
        alt="image"
        src="/services/landing-page/cover/pencil.png"
      />
    </div>
  </div>
);

// Top Icon --2
const PuzzleIcon: React.FC = () => (
  <div className="  w-[5.369rem] right-[8.05%] lg:right-[41px] lg:top-[106px] sm:top-[60px] top-[29.75%] xs:top-[60px] absolute h-[5.369rem] object-contain lg:w-[5.375rem] md:w-[4.125rem] ">
    <div className="relative w-full h-[200px] lg:h-[100px] sm:h-[80px] xs:h-[80px]">
      <Image
        width="200"
        height="200"
        alt="image"
        className="absolute animate-top transition-all duration-700 w-[92px] lg:w-[75px] xs:w-[48px]  h-auto ease-linear top-[25%] rotate-[-15deg]"
        src="/services/low-code-development/appsmith-development-services/core-services/puzzle.png"
      />
    </div>
  </div>
);

// Bottom icon--1
const RocketIcon: React.FC = () => (
  <div className=" w-[6.244rem] transition-all duration-[1s] absolute h-fit bottom-[17%] lg:bottom-[50px] sm:bottom-[10px] xs:bottom-[60px] rotate-[-8.8deg] right-[41.1%] xs:right-[100px] sm:left-auto object-contain lg:w-[5.375rem] md:w-[4.125rem] ">
    <div className="relative w-full h-[100px] lg:h-[150px] sm:h-[100px] xs:h-[80px]">
      <Image
        width="200"
        height="200"
        className="absolute animate-bottom transition-all duration-700 ease-linear w-[72px] h-[72px] lg:w-[62px] lg:h-[62px]  xs:w-[52px]  xs:h-[52px] bottom-[25%] lg:rounded-[19px] rounded-[22px]"
        alt="image"
        src="/services/web-app-development/laravel-development-services/why-us/rocket.png"
      />
    </div>
  </div>
);
