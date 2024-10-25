/**
 * This file contains the Header section of testimonials section.
 */

import SectionHeader from "@components/basic-components/section-header";

const Header: React.FC = () => (
  <SectionHeader
    style=""
    id="testimonials"
    buttonText="Testimonials"
    description="Don’t just take our word for it. Explore what our happy clients have to say about their experience working with our agency."
  >
    <div className="sm:text-wrap sm:w-full text-center lg:w-[650px] lg:text-wrap leading-[1.4] capitalize">
      There are reason people are{" "}
      <span className="italic font-light">raving </span>
      about us.
    </div>
  </SectionHeader>
);

export default Header;
