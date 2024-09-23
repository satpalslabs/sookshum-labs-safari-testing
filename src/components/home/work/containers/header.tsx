/**
 * This file contains the header of our work section.
 */

import dynamic from "next/dynamic";
const SectionHeader = dynamic(() => import("@components/basic-components/section-header"));

const Header: React.FC = () => (
  <SectionHeader
    style=""
    buttonText="Work"
    description="Explore our showcase of our recent projects to see tha solutions we’ve recently brought to life."
  >
    <div>
      See our recent <span className="italic font-light">Projects.</span>
    </div>
  </SectionHeader>
);

export default Header;
