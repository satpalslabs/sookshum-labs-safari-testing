/**
 * This file contains the industry experience section.
 */

import dynamic from "next/dynamic";

const Header = dynamic(() => import("./containers/header"));
const Slider = dynamic(() => import("./containers/slider"));

function IndustryExperience() {
  return (
    <section className="pl-[80px] lg:pl-10 xs:pl-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px] flex flex-col gap-[70px] md:gap-[50px] sm:gap-12 items-center bg-black overflow-hidden max-w-[1920px] mx-auto">
      <Header />
      <Slider />
    </section>
  );
}

export default IndustryExperience;
