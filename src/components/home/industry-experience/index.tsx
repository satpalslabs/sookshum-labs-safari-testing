/**
 * This file contains the industry experience section.
 */

import dynamic from "next/dynamic";

const Header = dynamic(() => import("./containers/header"));
const Slider = dynamic(() => import("./containers/slider"));

function IndustryExperience() {
  return (
    <section className="flex flex-col gap-[70px] md:gap-[60px] sm:gap-12 xs:gap-8 px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px]  items-center bg-black overflow-hidden max-w-[1920px] mx-auto">
      <Header />
      <Slider />
    </section>
  );
}

export default IndustryExperience;
