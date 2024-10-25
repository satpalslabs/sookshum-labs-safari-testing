/**
 * This file contains the why choose us section.
 */

import OuterComponent from "@components/basic-components/outer-component";
import dynamic from "next/dynamic";

const MainContainer = dynamic(() => import("./containers/main-container"));
const Header = dynamic(() => import("./containers/header"));

const ChooseUs: React.FC = () => {
  return (
      <OuterComponent>
        <div className="flex flex-col gap-[70px] md:gap-[60px] sm:gap-12 xs:gap-8 items-center">
          <Header />
          <MainContainer />
        </div>
      </OuterComponent>
  );
};

export default ChooseUs;
