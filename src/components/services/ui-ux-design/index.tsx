import React from "react";
import Testimonials from "@components/basic-components/testimonials";
import WorkTogether from "@components/basic-components/work-together";
import Work from "./work";
import Services from "./services";
import ChooseUs from "./choose-us";
import OurProcess from "./our-process";
import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import CoreServices from "@components/services/reuseable-components/core-services";
import { HomeProps } from "@app/page";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/ui-ux-design/ui-ux-bg.webm",
  "contact-us": true,
  image: false,
  additionalDescription: null,
  buttonText: "UI/UX Designing",
  gradientText: "Human-centred UI/UX product design services",
  style: {
    sourceStyle: "xxl:left-[50%] xxl:-translate-x-[47%]",
    gradientDivStyle: "xxl:left-[50%] xxl:-translate-x-[47%]",
  },
  aboutPage:
    "We craft successful digital products that align user needs with business goals, using a human-centered design approach to bring them to life.",
};

const UiUxDesignComponent: React.FC<HomeProps> = (props) => (
  <div className="relative ">
    <Hero {...content_heroSection} />
    <CoreServices DataKey={"landing-page-services"} />
    <Services />
    <ChooseUs />
    <OurProcess />
    {!props.isBot && <Work />}
    {!props.isBot && <Testimonials />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"ui-ux-design"} /> */}
    <WorkTogether />
  </div>
);

export default UiUxDesignComponent;
