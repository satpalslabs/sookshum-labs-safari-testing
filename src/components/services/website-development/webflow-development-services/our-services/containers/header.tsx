/**
 * This file contains the Header section of our industry experience section.
 */
import dynamic from "next/dynamic";
const SectionHeader = dynamic(
  () => import("@components/basic-components/section-header")
);

const Header: React.FC = () => (
  <SectionHeader
    id="our-services"
    style=""
    buttonText="Our Services"
    description="A Complete Webflow end-to-end solution, no matter your needs."
  >
    <div className="sm:text-wrap text-center leading-[1.4] capitalize">
      Our <span className="italic font-light">Webflow</span> Development
      Services
    </div>
  </SectionHeader>
);

export default Header;
