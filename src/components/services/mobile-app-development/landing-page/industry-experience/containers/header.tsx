/**
 * This file contains the Header section of our industry experience section.
 */
import SectionHeader from "@components/basic-components/section-header";

const Header: React.FC = () => (
  <SectionHeader
    style="xxl:!w-[60%] !w-[80%] xs:!w-full"
    buttonText="Industries we serve"
    description="As a leading mobile app development company with a focus on cutting-edge technology advancements, serves businesses across various industries with cutting-edge digital solutions, improving their business operations."
  >
    <div className="text-wrap text-center leading-[1.2] w-full tracking-tight">
      Industries benefiting from our
      <span className="italic font-light"> mobile app development </span>
      services
    </div>
  </SectionHeader>
);

export default Header;
