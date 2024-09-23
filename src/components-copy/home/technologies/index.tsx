/**
 * This file contains the technology we use section.
 */

import dynamic from "next/dynamic";

const TechnologyCards = dynamic(() => import("./containers/technology-cards"));
const Header = dynamic(() => import("./containers/header"));

const Technologies: React.FC = () => (
  <section className="px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px] flex flex-col gap-[104px] md:gap-[60px] sm:gap-12  items-center bg-black overflow-hidden max-w-[1920px] mx-auto">
    <Header />
    <TechnologyCards />
  </section>
);

export default Technologies;
