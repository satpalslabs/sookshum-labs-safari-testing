/**
 * This file contains the testimonials section.
 */

import OuterComponent from "../outer-component";
import Header from "./containers/header";
import Slider from "./containers/slider";
function Testimonials() {
  return (
    <OuterComponent>
      <section
        className="flex flex-col gap-[50px] md:gap-[60px] sm:gap-12 xs:gap-8 items-center"
        data-nosnippet
      >
        <Header />
        <Slider />
      </section>
    </OuterComponent>
  );
}

export default Testimonials;
