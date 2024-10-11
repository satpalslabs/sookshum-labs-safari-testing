/**
 * This file contains the Header section of our industry experience section.
 */
import SectionHeader from "@components/basic-components/section-header";

const Header: React.FC = () => (
  <SectionHeader
    style=""
    buttonText="Our Process"
    description="Having successfully delivered hundreds of projects, our transparent and agile development process will guide your project from discovery to launch."
  >
    <div className="sm:text-wrap text-center leading-[34px]">
      Our process for shopify development success.
    </div>
  </SectionHeader>
);

export default Header;
