/**
 * This file contains the Header section of our industry experience section.
 */
import SectionHeader from "@components/basic-components/section-header";

const Header: React.FC = () => (
  <SectionHeader
    id="our-process"
    style="xxl:!w-[60%] !w-[70%] xs:!w-full"
    buttonText="Our Process"
    description="With hundreds of successful projects under our belt, our transparent and agile development process will steer your project from discovery to launch."
  >
    <div className="sm:text-wrap text-center leading-[1.4] capitalize">
      Our process for shopify development success.
    </div>
  </SectionHeader>
);

export default Header;
