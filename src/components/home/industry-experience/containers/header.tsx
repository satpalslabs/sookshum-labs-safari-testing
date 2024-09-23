/**
 * This file contains the Header section of our industry experience section.
 */
import dynamic from "next/dynamic";
const SectionHeader = dynamic(() => import("@components/basic-components/section-header"));

const Header: React.FC = () => (
  <SectionHeader
    style=""
    buttonText="Industries we serve"
    description="Our team is dedicated to designing digital solutions that meet the unique demands of various sectors leveraging the latest technology to meet unique industry demands and drive innovation."
  >
    <div className="sm:text-wrap text-center leading-[34px]">
      Our diverse Industry{" "}
      <span className="italic font-light">Experiences?</span>
    </div>
  </SectionHeader>
);

export default Header;
