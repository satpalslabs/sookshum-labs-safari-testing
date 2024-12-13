/**
 * This file contains the Header section of our development section.
 */

import dynamic from "next/dynamic";
const SectionHeader = dynamic(
  () => import("@components/basic-components/section-header")
);

const Header = () => (
  <SectionHeader
    style=""
    id="our-development-process"
    buttonText="Process"
    description="We believe in a transparent and collaborative development process. From ideation to launch, we’ll keep you informed every step of the way."
  >
    <div className="sm:text-wrap text-center leading-[1.4] capitalize bg-clip-text">
      Our development <span className="italic font-light">process?</span>
    </div>
  </SectionHeader>
);

export default Header;
