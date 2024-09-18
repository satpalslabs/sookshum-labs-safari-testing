import React from "react";

import Services from "./our-services";
import Testimonials from "@components/basic-components/testimonials";
import ChooseUs from "./why-us";
import Work from "./work";
import LetsConnect from "./need-project";
import Benefits from "./benefits";
import Tools from "./tools";
import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import CoreServices from "@components/services/reuseable-components/core-services";
import Faqs from "@components/services/reuseable-components/faqs";
import { HomeProps } from "@app/page";

const content_heroSection: HeroSection = {
  URL: "/services/website-development/landing-page/hero-background-image.png",
  "contact-us": true,
  fallback:"",
  image: true,
  buttonText: "Low Code Development",
  additionalDescription: "",
  gradientText: "Your custom software. Ready next week.",
  gradientTextStyle: "w-[90%] lg:w-[80%] xs:!w-full",
  style: {
    sourceStyle:
      "xxl:left-[50%] xxl:h-[700px]  left-[8%] xxl:scale-[1.1] xxl:top-[-18%] xxl:-translate-x-[50%] left-[15%] lg:left-[2%] xs:-left-[4%]",
    gradientDivStyle: "xxl:!h-[560px] xxl:left-[50%] xxl:-translate-x-[35%]  !h-[550px] lg:!h-[450px] sm:!h-[350px] xs:!h-[240px] xs:!top-[-20%] !top-[-15%] xxl:!top-[-6%]",
  },
  aboutPage:
    "We are a digital product studio obsessed with building software that delights your users. We design, build, and deliver your custom solutions - fast.",
};

const LandingPageLowCodeDevelopment: React.FC<HomeProps> = ({isBot}) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <CoreServices DataKey={"landing-page-services"} />
    <Services />
    <Benefits />
    <ChooseUs />
    <Tools />
    {!isBot && <Work />}
    {!isBot && <Testimonials />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"website-development-landing-page"} /> */}
    <LetsConnect />
  </div>
);

export default LandingPageLowCodeDevelopment;
