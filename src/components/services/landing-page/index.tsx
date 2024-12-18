import Testimonials from "@components/basic-components/testimonials";
import WorkTogether from "@components/basic-components/work-together";

import Hero from "./hero";
import CoreServices from "../reuseable-components/core-services";
import Cover from "./cover";
import Technologies from "./technologies";
import { HomeProps } from "@app/page";
import GoTopButton from "@components/basic-components/go-to-top";

function ServiceComponent({ isBot }: HomeProps) {
  return (
    <div className="relative ">
      <Hero />
      <CoreServices /> <Cover />
      <Technologies />
      {!isBot && <Testimonials />}
      <WorkTogether />
      <GoTopButton />
    </div>
  );
}

export default ServiceComponent;
