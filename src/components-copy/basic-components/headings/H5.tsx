import React from "react";
type props = { text: string; style: string };
const H5: React.FC<props> = ({ text, style }) => (
  <div
    className={`font-poppins leading-6 text-2xl md:leading-5 md:text-base sm:text-sm text-light font-medium ${style}`}
  >
    {text}
  </div>
);

export default H5;
