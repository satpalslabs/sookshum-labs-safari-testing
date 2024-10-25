/**
 * This file contains the Header section of our industry experience section.
 */
import dynamic from "next/dynamic";
const SectionHeader = dynamic(
  () => import("@components/basic-components/section-header")
);

const Header: React.FC = () => (
  <SectionHeader
    style=""
    buttonText="Our Services"
    description="We offer web app development services tailored to any business or industry, delivering custom solutions that build user trust and convert visitors into paying customers. "
  >
    <div className="sm:text-wrap text-center leading-[1.4] capitalize">
      Flutter App Development Services{" "}
      <span className="italic font-light">We Offer?</span>
    </div>
  </SectionHeader>
);

export default Header;
