/**
 * This file contains the our-services section.
 */

import dynamic from "next/dynamic";

const ServiceCards = dynamic(() => import("./containers/service-cards"));
const Header = dynamic(() => import("./containers/header"));

const OurServices: React.FC = () => (
  <section className="px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px] flex flex-col gap-[70px] md:gap-[60px] sm:gap-12 items-center bg-black overflow-hidden max-w-[1920px] mx-auto">
    <Header />
    <ServiceCards />
  </section>
);

export default OurServices;
