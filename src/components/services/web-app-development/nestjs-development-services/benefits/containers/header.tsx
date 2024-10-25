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
    description="Discover the advantages of choosing NestJS for your software development needs and how it can enhance your business. "
  >
    <div className="sm:text-wrap text-center leading-[1.4] capitalize">
      Benefits of
      <span className="italic font-light"> NestJS </span>Software Development
    </div>
  </SectionHeader>
);

export default Header;
