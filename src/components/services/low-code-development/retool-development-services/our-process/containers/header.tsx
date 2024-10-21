/**
 * This file contains the Header section of our industry experience section.
 */
import SectionHeader from "@components/basic-components/section-header";

const Header: React.FC = () => (
  <SectionHeader
    style="xxl:!w-[50%] !w-[75%] lg:!w-[80%] sm:!w-[90%] xs:!w-full"
    buttonText="Our Process"
    description="Whether you want to consult and idea, add missing capabilities, quickly expand your team, or hand over a project - we’ve got your covered. "
  >
    <div className="text-wrap text-center leading-[1.3]">
      Our Streamlined Approach To Building Elegant{" "}
      <span className="italic font-light">Internal Software </span>
    </div>
  </SectionHeader>
);

export default Header;
