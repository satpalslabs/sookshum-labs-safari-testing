/**
 * This file contains the header of our-service section.
 */

import dynamic from "next/dynamic";
const SectionHeader = dynamic(() => import("@components/basic-components/section-header"));

const Header: React.FC = () => (
  <SectionHeader
    style=""
    id="our-services"
    buttonText="Services"
    description="We'll help you define your brand, build a powerful online presence, and reach your target audience effectively."
  >
    <div className="leading-[1.4] capitalize">
      How we can help <span className="italic font-light">you?</span>
    </div>
  </SectionHeader>
);

export default Header;
