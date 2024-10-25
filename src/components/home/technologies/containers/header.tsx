/**
 * This file contains the header of technology we use section..
 */
import dynamic from "next/dynamic";
const SectionHeader = dynamic(
  () => import("@components/basic-components/section-header")
);

const Header = () => (
  <SectionHeader
    style=""
    id="technologies"
    buttonText="Technologies"
    description="We leverage cutting-edge technologies to deliver innovative, high-performance solutions that drive success and exceed your expectations"
  >
    <div className="leading-[1.4] capitalize">
      Technologies we <span className="italic font-light">use?</span>
    </div>
  </SectionHeader>
);

export default Header;
