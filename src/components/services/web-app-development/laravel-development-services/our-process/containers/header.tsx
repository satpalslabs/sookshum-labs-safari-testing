/**
 * This file contains the Header section of our industry experience section.
 */
import SectionHeader from "@components/basic-components/section-header";

const Header: React.FC = () => (
  <SectionHeader
    style="xxl:!w-[1000px] lg:!w-[90%] sm:!w-[80%] xs:!w-full"
    buttonText="Our Process"
    description="We follow a well-established development methodology to deliver the project in a timely manner. This includes planning it well at the initial stages and setting the milestones. It also includes providing regular updates. "
  >
    <div className="sm:text-wrap sm:w-[90%] xs:!w-full text-center leading-[34px]">
      <span className="italic font-light">Laravel </span> Development process
    </div>
  </SectionHeader>
);

export default Header;
