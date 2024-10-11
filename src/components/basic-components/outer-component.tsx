import React from "react";
type props = {
  children: React.ReactNode;
};

const OuterComponent: React.FC<props> = ({ children }) => {
  return (
    <div className="px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px] max-w-[1920px] w-full overflow-hidden mx-auto">
      {children}
    </div>
  );
};

export default OuterComponent;
