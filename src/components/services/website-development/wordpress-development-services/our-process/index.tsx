/**
 * This file contains the industry experience section.
 */

import dynamic from "next/dynamic";

const Header = dynamic(() => import("./containers/header"));
const Slider = dynamic(() => import("./containers/slider"));

function OurProcess() {
  return (
    <section id="our-process" className="px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px] flex flex-col items-center gap-[70px] md:gap-[60px] sm:gap-12 xs:gap-8 bg-black overflow-visible max-w-[1920px] mx-auto">
      <Header />
      <Slider />
    </section>
  );
}

export default OurProcess;
