/**
 * This file contains the Header section of our industry experience section.
 */
import SectionHeader from "@components/basic-components/section-header";

const Header: React.FC = () => (
  <SectionHeader
  id="our-process"
    style="xxl:!w-[50%] !w-[75%] lg:!w-[80%] sm:!w-[90%] xs:!w-full"
    buttonText="Our Process"
    description="Leverage Retool to create custom applications that automate processes, integrate systems, and enhance efficiency."
  >
    <div className="text-wrap text-center leading-[1.4] capitalize">
      Our Streamlined Approach To Building Elegant{" "}
      <span className="italic font-light">Internal Software </span>
    </div>
  </SectionHeader>
);

export default Header;
