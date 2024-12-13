/**
 * This file contains the Header section of why choose us section.
 */

import dynamic from "next/dynamic";
const SectionHeader = dynamic(
  () => import("@components/basic-components/section-header")
);

const Header = () => (
  <SectionHeader
    style=""
    id="why-us"
    buttonText="Why us?"
    description="We craft digital experiences that drive results. We'll help you achieve your business goals, from increased brand awareness to skyrocketing sales."
  >
    <div className="sm:text-wrap text-center leading-[1.4] capitalize bg-clip-text">
      Why work with <span className="italic font-light">us?</span>
    </div>
  </SectionHeader>
);

export default Header;
