/**
 * This file contains the industry experience section.
 */

import dynamic from "next/dynamic";

const Header = dynamic(() => import("./containers/header"));
const Slider = dynamic(() => import("./containers/slider"));

function OurServices() {
  return (
    <section id="our-services" className="flex flex-col gap-[70px] md:gap-[60px] sm:gap-12 xs:gap-8 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px]  items-center bg-black max-w-[1920px] mx-auto overflow-visible">
      <Header />
      <Slider />
    </section>
  );
}

export default OurServices;
