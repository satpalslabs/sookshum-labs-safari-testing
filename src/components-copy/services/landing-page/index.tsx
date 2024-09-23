import Testimonials from "@components/basic-components/testimonials";
import WorkTogether from "@components/basic-components/work-together";
import React from "react";
import Hero from "./hero";
import CoreServices from "../reuseable-components/core-services";
import Cover from "./cover";
import Technologies from "./technologies";
import { HomeProps } from "@app/page";

function ServiceComponent({isBot}:HomeProps) {
  return (
    <div className="relative ">
      <Hero />
      <CoreServices DataKey={"landing-page-services"} />
      <Cover />
      <Technologies />
      {!isBot && <Testimonials />}
      <WorkTogether />
    </div>
  );
}

export default ServiceComponent;
