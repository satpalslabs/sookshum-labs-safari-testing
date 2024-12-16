import { cn } from "@lib/utls";
import React from "react";

const OuterComponent: React.FC<any> = ({ children, style = "" }) => {
  return (
    <div
      className={cn(
        `px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px] max-w-[1920px] w-full overflow-hidden mx-auto ${style}`
      )}
    >
      {children}
    </div>
  );
};

export default OuterComponent;
