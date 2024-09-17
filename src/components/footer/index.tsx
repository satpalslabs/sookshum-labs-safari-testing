/**
 * This component contains the Footer section.
 */
import dynamic from "next/dynamic";
import type React from "react";
// Footer's sub-sections
const BottomSection = dynamic(() => import("./containers/bottom-section"));
const TopSection = dynamic(() => import("./containers/top-section"));

const Footer: React.FC = () => (
  <div className="pt-[80px] md:pt-[40px]">
    <footer className="bg-layoutBackground sticky bottom-0 xs:relative z-0 pt-[25px] overflow-hidden font-poppins  w-full ">
      <div className="max-w-[1920px] mx-auto gap-[70px] flex flex-col justify-between items-center sm:gap-3 xs:gap-5 px-[81px] lg:px-10 lg:pt-[34px]  xs:!px-5">
        <TopSection />
        <BottomSection />
      </div>
    </footer>
  </div>
);

export default Footer;
