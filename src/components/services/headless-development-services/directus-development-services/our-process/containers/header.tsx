/**
 * This file contains the Header section of our industry experience section.
 */
import SectionHeader from "@components/basic-components/section-header";

const Header: React.FC = () => (
  <SectionHeader
    id="our-process"
    style=" max-w-[1004px] w-full lg:max-w-[804px] lg:w-full sm:max-w-[700px] xs:max-w-full"
    buttonText="Our Process"
    description="Our Directus development process starts with defining data models, content types, and permissions in the admin panel. We integrate authentication (e.g., JWT, OAuth), set up APIs, and build a custom frontend using frameworks like React, connecting via REST or GraphQL. Rigorous testing ensures quality, and deployment on platforms like AWS or Heroku guarantees scalability, security, and optimized performance."
  >
    <div className="sm:text-wrap text-center leading-[1.4] ">
      Our <span className="italic font-light">Directus </span> Development
      Process.
    </div>
  </SectionHeader>
);

export default Header;
