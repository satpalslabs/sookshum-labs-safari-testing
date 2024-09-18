/**
 * This component contains the first image of core services section.
 */

import Image from "next/image";
import React from "react";

const Design: React.FC = () => (
  <Image
    className="transition-all rotate-0  group-hover:rotate-6 w-[70%] xxl:w-fit xxl:h-[300px] md:h-56 lg:w-fit  sm:h-[150px] xs:mx-auto  xs:w-fit xs:h-[200px] flex justify-end xs:-mt-12 lg:mt-[-10%] sm:-mt-[6%] ml-[50%] translate-x-[-60%] xs:translate-x-[-10%]"
    width={1200}
    height={1200}
    src="/home/core-services/design.svg"
    alt="Design"
  />
);

export default Design;

{
  /* <div className="absolute z-10 top-[43%] xxl:right-[7%] xl:right-[5%] xs:right-[7%] xs:top-[44%]">
      <img
        width={400}
        height={400}
        className="w-fit md:h-4"
        src="/home/core-services/user-icon.svg"
        alt="core-service arrow"
      />
    </div> */
}
