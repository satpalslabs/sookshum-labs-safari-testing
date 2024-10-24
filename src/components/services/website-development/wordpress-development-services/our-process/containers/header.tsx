/**
 * This file contains the Header section of our industry experience section.
 */
import SectionHeader from "@components/basic-components/section-header";

const Header: React.FC = () => (
  <SectionHeader
    style=""
    buttonText="Our Process"
    description="Efficiently tracking and optimizing development time for your ongoing WordPress projects."
  >
    <div className="sm:text-wrap text-center leading-[1.3]">
      <span className="italic font-light">WordPress Development </span> Time
      Track For An Existing Project
    </div>
  </SectionHeader>
);

export default Header;
