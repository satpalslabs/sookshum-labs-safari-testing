/**
 * This file contains the our work section.
 */
import OuterComponent from "@components/basic-components/outer-component";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./containers/header"));
const WorkCards = dynamic(() => import("./containers/cards"));

const Work: React.FC = () => (
  <OuterComponent>
    <div
      className="flex flex-col gap-[104px] md:gap-[60px] sm:gap-12 items-center"
      data-nosnippet
    >
      <Header />
      <WorkCards type="" />
    </div>
  </OuterComponent>
);

export default Work;
