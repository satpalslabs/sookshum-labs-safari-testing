/**
 * This file contains the Header section of our industry experience section.
 */
import SectionHeader from "@components/basic-components/section-header";

const Header: React.FC = () => (
  <SectionHeader
    style="!w-[80%] xs:!w-full"
    buttonText="Our Process"
    description="Sookshum Labs digital product design and dashboard development process is a meticulously crafted journey that begins with a deep understanding of your objectives and user needs. From research and ideation to final deployment, We apply a structured and agile approach to ensure your digital product not only meets but exceeds expectations. "
  >
    <h2 className="sm:text-wrap text-center leading-[1.3]">
      Our Process For success
    </h2>
  </SectionHeader>
);

export default Header;
