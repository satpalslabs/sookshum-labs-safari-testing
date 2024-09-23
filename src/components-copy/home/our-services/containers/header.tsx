/**
 * This file contains the header of our-service section.
 */

import SectionHeader from "@components/basic-components/section-header";

const Header: React.FC = () => (
  <SectionHeader
    style=""
    buttonText="Service"
    description="We'll help you define your brand, build a powerful online presence, and reach your target audience effectively."
  >
    <div>
      How we can help <span className="italic font-light">you?</span>
    </div>
  </SectionHeader>
);

export default Header;
