import React from "react";
type props = { text: string; style: string };
const H1: React.FC<props> = ({ text, style }) => {
  return (
    <div
      className={`font-poppins leading-[84px] text-[72px] lg:leading-[62px] lg:text-[52px] sm:text-4xl xs:text-[28px] text-white font-semibold tracking-tight ${style}`}
    >
      {text}
    </div>
  );
};

export default H1;
