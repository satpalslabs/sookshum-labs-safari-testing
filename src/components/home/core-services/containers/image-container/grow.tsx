/**
 * This component contains the third image of core services section.
 */
import Image from "next/image";
import React from "react";

const Grow: React.FC = () => (
  <Image
    className="transition-all rotate-0  group-hover:rotate-6 w-[70%] xxl:w-fit xxl:h-[300px] md:h-56 lg:w-fit  sm:h-[150px] xs:mx-auto  xs:w-fit xs:h-[200px] flex justify-end xs:-mt-12 lg:mt-[-6%] ml-[50%] translate-x-[-60%] xs:translate-x-[-10%]"
    width={1200}
    height={1200}
    src="/home/core-services/grow.png"
    alt="Grow"
  />
);

export default Grow;
