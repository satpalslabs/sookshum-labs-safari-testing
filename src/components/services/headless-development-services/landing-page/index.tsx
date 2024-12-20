import Testimonials from "@components/basic-components/testimonials";
import Hero from "./hero";
import { HomeProps } from "@app/page";
import GoTopButton from "@components/basic-components/go-to-top";
import WhyUs from "./why-us";
import Work from "@components/home/work";
import OurServices from "./our-services";
import OurProcess from "./our-process";
import Benefits from "./benefits";
import LetsConnect from "./need-project";
import Cover from "./cover";

function HeadlessCMSDevelopmentComponent({ isBot }: HomeProps) {
  return (
    <div className="relative ">
      <Hero />
      <Cover />
      <WhyUs />
      <OurServices />
      <OurProcess />
      <Benefits />
      {!isBot && <Testimonials />}
      <Work />
      <LetsConnect />
      <GoTopButton />
    </div>
  );
}

export default HeadlessCMSDevelopmentComponent;
