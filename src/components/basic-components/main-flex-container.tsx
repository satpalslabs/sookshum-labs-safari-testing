import React from "react";
type props = {
  children: React.ReactNode;
};

const OuterFlexComponent: React.FC<props> = ({ children }) => {
  return (
    <div className="flex flex-col gap-[80px] md:gap-[60px] sm:gap-12 items-center">
      {children}
    </div>
  );
};

export default OuterFlexComponent;
