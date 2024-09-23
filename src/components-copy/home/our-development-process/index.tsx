/**
 * This file contains the our development section.
 */

import dynamic from "next/dynamic";

const Header = dynamic(() => import("./containers/header"));
const DevelopmentProcessCards = dynamic(
  () => import("./containers/process-cards")
);

const DevelopmentProcess = () => (
  <section className="px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px] flex flex-col gap-[70px] md:gap-[60px] sm:gap-12 xs:gap-8 items-center bg-black overflow-hidden max-w-[1920px] mx-auto">
    <Header />
    <DevelopmentProcessCards />
  </section>
);

export default DevelopmentProcess;
