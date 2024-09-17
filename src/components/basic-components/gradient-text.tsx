import React from "react";
type gradientText = {
  text: string;
  classes: string;
};

const GradientText: React.FC<gradientText> = ({ text, classes }) => (
  <div
    className={`bg-gradientText bg-clip-text text-transparent text-[86px] 2xs:text-[30px] sm:text-[48px] lg:text-[57px] lg:leading-[72px] font-poppins font-[600] leading-[111px] 2xs:leading-[46px] sm:leading-[76px] lg:leading-[92px]w-full tracking-tight relative ${classes}`}
  >
    {text}
  </div>
);

export default GradientText;
