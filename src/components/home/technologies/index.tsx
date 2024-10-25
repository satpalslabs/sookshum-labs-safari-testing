/**
 * This file contains the technology we use section.
 */

import OuterComponent from "@components/basic-components/outer-component";
import dynamic from "next/dynamic";

const TechnologyCards = dynamic(() => import("./containers/technology-cards"));
const Header = dynamic(() => import("./containers/header"));

const Technologies: React.FC = () => (
    <OuterComponent>
      <div className="flex flex-col gap-[104px] md:gap-[60px] sm:gap-12  items-center ">
        <Header />
        <TechnologyCards />
      </div>
    </OuterComponent>
);

export default Technologies;
