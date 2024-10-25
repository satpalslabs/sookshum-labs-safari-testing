/**
 * This file contains the header of our work section.
 */

import dynamic from "next/dynamic";
const SectionHeader = dynamic(() => import("@components/basic-components/section-header"));

const Header: React.FC = () => (
  <SectionHeader
    style=""
    id="work"
    buttonText="Work"
    description="Explore our showcase of our recent projects to see the solutions we’ve recently brought to life."
  >
    <div className="leading-[1.4] capitalize">
      See our recent <span className="italic font-light">Projects.</span>
    </div>
  </SectionHeader>
);

export default Header;
