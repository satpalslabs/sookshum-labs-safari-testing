/**
 * This file contains the Header section of our industry experience section.
 */
import dynamic from "next/dynamic";
const SectionHeader = dynamic(
  () => import("@components/basic-components/section-header")
);

const Header: React.FC = () => (
  <SectionHeader
    id="benefits"
    style="max-w-[1004px] w-full lg:max-w-[804px] lg:w-full sm:max-w-[700px] xs:max-w-full"
    buttonText="Benefits"
    description="Manage content seamlessly, customize freely, and scale effortlessly across platforms."
  >
    <div className="sm:text-wrap text-center leading-[1.4] ">
      Benefits of
      <span className="italic font-light"> Payload </span>CMS
    </div>
  </SectionHeader>
);

export default Header;
