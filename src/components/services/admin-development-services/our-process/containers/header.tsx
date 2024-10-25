/**
 * This file contains the Header section of our industry experience section.
 */
import SectionHeader from "@components/basic-components/section-header";

const Header: React.FC = () => (
  <SectionHeader
    style="!w-[80%] xs:!w-full"
    buttonText="Our Process"
    description="At Sookshum Labs, our digital product design and dashboard development process is a thoughtfully crafted journey that starts with a thorough understanding of your goals and user requirements. From research and ideation to final deployment, we utilize a structured and agile approach to ensure your digital product not only meets but surpasses expectations."
  >
    <div className="sm:text-wrap text-center leading-[1.4] capitalize">
      Our Process For success
    </div>
  </SectionHeader>
);

export default Header;
