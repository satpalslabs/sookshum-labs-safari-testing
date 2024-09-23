/**
 * This file contains the Header section of our development section.
 */

import dynamic from "next/dynamic";
const SectionHeader = dynamic(() => import("@components/basic-components/section-header"));

const Header = () => (
  <SectionHeader
    style=""
    buttonText="Process"
    description="We believe in a transparent and collaborative development process. From ideation to launch, we’ll keep you informed every step of the way."
  >
    <div className="sm:text-wrap text-center leading-[34px]">
      Our development <span className="italic font-light">process?</span>
    </div>
  </SectionHeader>
);

export default Header;
