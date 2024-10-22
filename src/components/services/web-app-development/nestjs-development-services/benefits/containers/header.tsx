/**
 * This file contains the Header section of our industry experience section.
 */
import dynamic from "next/dynamic";
const SectionHeader = dynamic(
  () => import("@components/basic-components/section-header")
);

const Header: React.FC = () => (
  <SectionHeader
    style="!w-[900px] lg:!w-full"
    buttonText="Benefits"
    description="Discover the advantages of choosing NestJs for your software development needs and how it can benefit your business. "
  >
    <div className="sm:text-wrap text-center leading-[34px] capitalize">
      Benefits of
      <span className="italic font-light"> NestJs </span>Software Development
    </div>
  </SectionHeader>
);

export default Header;
