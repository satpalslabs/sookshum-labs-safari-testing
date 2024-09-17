import React from "react";

type textType = {
  text: string;
  style: string;
};
const H4: React.FC<textType> = ({ text, style }) => (
  <div
    className={`font-poppins leading-6 text-[26px] md:leading-5 md:text-xl sm:text-sm text-whiteTextPrimary font-medium ${style}`}
  >
    {text}
  </div>
);

export default H4;
