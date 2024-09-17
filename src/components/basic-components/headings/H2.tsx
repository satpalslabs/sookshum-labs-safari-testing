import React from "react";
type props = {
  children: React.ReactNode;
};
const H2: React.FC<props> = ({ children }) => (
  <div className="font-poppins leading-[72px] text-5xl lg:leading-[42px] lg:text-[42px] sm:text-4xl xs:text-[28px] text-white font-medium text-nowrap">
    {children}
  </div>
);

export default H2;
