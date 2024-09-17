/**
 * This file contains the Header section of why choose us section.
 */

import SectionHeader from "@components/basic-components/section-header";

const Header = () => (
  <SectionHeader
    style=""
    buttonText="Why us?"
    description="We craft digital experiences that drive results. We'll help you achieve your business goals, from increased brand awareness to skyrocketing sales."
  >
    <div className="sm:text-wrap text-center leading-[34px]">
      Why work with <span className="italic font-light">us?</span>
    </div>
  </SectionHeader>
);

export default Header;
