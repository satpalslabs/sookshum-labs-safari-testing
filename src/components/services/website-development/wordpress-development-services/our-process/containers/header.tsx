/**
 * This file contains the Header section of our industry experience section.
 */
import SectionHeader from "@components/basic-components/section-header";

const Header: React.FC = () => (
  <SectionHeader
    style=""
    id="our-process"
    buttonText="Our Process"
    description="Efficiently tracking and optimizing development time for your ongoing WordPress projects."
  >
    <div className="sm:text-wrap text-center leading-[1.4] ">
      <span className="italic font-light">WordPress Development </span> Time
      Track for an Existing Project
    </div>
  </SectionHeader>
);

export default Header;
