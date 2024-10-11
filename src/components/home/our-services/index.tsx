/**
 * This file contains the our-services section.
 */

import OuterComponent from "@components/basic-components/outer-component";
import dynamic from "next/dynamic";

const ServiceCards = dynamic(() => import("./containers/service-cards"));
const Header = dynamic(() => import("./containers/header"));

const OurServices: React.FC = () => (
  <OuterComponent>
    <div className="flex flex-col gap-[70px] md:gap-[60px] sm:gap-12 items-center">
      <Header />
      <ServiceCards />
    </div>
  </OuterComponent>
);

export default OurServices;
