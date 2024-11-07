/**
 * This file contains the Header section of our industry experience section.
 */
import SectionHeader from "@components/basic-components/section-header";

const Header: React.FC = () => (
  <SectionHeader
    id="our-process"
    style=""
    buttonText="Our Process"
    description="Having successfully delivered hundreds of projects, our transparent and agile development process will guide your project from discovery to launch."
  >
    <div className="sm:text-wrap text-center leading-[1.4] ">
      Our Process for <span className="italic font-light">Ecommerce </span>{" "}
      Success.
    </div>
  </SectionHeader>
);

export default Header;
