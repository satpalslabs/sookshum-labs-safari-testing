/**
 * This file contains the our development section.
 */

import OuterComponent from "@components/basic-components/outer-component";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./containers/header"));
const DevelopmentProcessCards = dynamic(
  () => import("./containers/process-cards")
);

const DevelopmentProcess = () => (
  <OuterComponent>
    <div className="flex flex-col gap-[70px] md:gap-[60px] sm:gap-12 xs:gap-8 items-center">
      <Header />
      <DevelopmentProcessCards />
    </div>
  </OuterComponent>
);

export default DevelopmentProcess;
