/**
 * This file contains the our work section.
 */
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./containers/header"));
const WorkCards = dynamic(() => import("./containers/cards"));

const Work: React.FC = () => (
  <section className="px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px] flex flex-col gap-[104px] md:gap-[60px] sm:gap-12 items-center bg-black overflow-hidden max-w-[1920px] mx-auto" data-nosnippet>
    <Header />
    <WorkCards type="" />
  </section>
);

export default Work;
