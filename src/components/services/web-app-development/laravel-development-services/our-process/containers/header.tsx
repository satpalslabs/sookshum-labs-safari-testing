/**
 * This file contains the Header section of our industry experience section.
 */
import SectionHeader from "@components/basic-components/section-header";

const Header: React.FC = () => (
  <SectionHeader
    style="xxl:!w-[80%] !w-[80%] lg:!w-[90%] sm:!w-[80%] xs:!w-full"
    buttonText="Our Process"
    description="We adhere to a proven development methodology to ensure timely project delivery. This involves thorough planning during the initial stages, setting clear milestones, and providing regular updates throughout the process."
  >
    <div className="sm:text-wrap sm:w-[90%] xs:!w-full text-center leading-[1.4] capitalize">
      <span className="italic font-light">Laravel </span> Development process
    </div>
  </SectionHeader>
);

export default Header;
