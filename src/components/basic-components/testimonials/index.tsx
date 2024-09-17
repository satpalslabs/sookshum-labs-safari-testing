/**
 * This file contains the testimonials section.
 */

import Header from "./containers/header";
import Slider from "./containers/slider";
function Testimonials() {
  return (
    <section
      className="px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px] flex flex-col gap-[50px] md:gap-[60px] sm:gap-12 xs:gap-8 items-center bg-black overflow-hidden max-w-[1920px] w-full mx-auto"
      data-nosnippet>
      <Header />
      <Slider />
    </section>
  );
}

export default Testimonials;
