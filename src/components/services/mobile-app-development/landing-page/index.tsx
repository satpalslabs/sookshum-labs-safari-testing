import React from "react";

import Testimonials from "@components/basic-components/testimonials";
import ChooseUs from "./why-us";
import Work from "./work";
import Technologies from "./technologies";
import OurProcess from "./our-process";
import IndustryExperience from "./industry-experience";
import LetsConnect from "./need-project";
import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import CoreServices from "@components/services/reuseable-components/core-services";
import Faqs from "@components/services/reuseable-components/faqs";
import { HomeProps } from "@app/page";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/mobile-app-devlopment/mobile-app-bg.webm",
  "contact-us": true,
  image: false,
  buttonText: "Mobile App Development",
  additionalDescription: "",
  gradientText: "Your App, Our Passion For Digital Innovation",
  style: {
    sourceStyle:
      "xxl:left-[50%] xxl:scale-[1.8] scale-[1.5] h-[430px] xxl:h-[480px] lg:scale-[1.35] xs:scale-[2.3] lg:h-[300px] sm:h-[320px] xs:h-[180px] overflow-hidden xs:h-[130px] xxl:-translate-x-[13.2%] -top-[13%] xxl:-top-[20%] left-[15%] lg:left-[2%] lg:-top-[28%] xs:-left-[4%] xs:-top-[10%]",
    gradientDivStyle:
      "xxl:left-[50%] xxl:scale-[1.8] scale-[1.5] h-[430px] xxl:h-[480px] lg:scale-[1.35] xs:scale-[2.3] lg:h-[300px] sm:h-[320px] xs:h-[180px] overflow-hidden xs:h-[130px] xxl:-translate-x-[13.2%] -top-[13%] xxl:-top-[20%] left-[15%] lg:left-[2%] lg:-top-[28%] xs:-left-[4%] xs:-top-[10%]",
  },
  aboutPage: "",
};

const LandingPageMobileAppDevelopment: React.FC<HomeProps> = ({isBot}) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <CoreServices DataKey={"landing-page-services"} />
    <ChooseUs />
    <OurProcess />
    <Technologies />
    <IndustryExperience />
    {!isBot && <Work />}
    {!isBot && <Testimonials />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"website-development-landing-page"} /> */}
    <LetsConnect />
  </div>
);

export default LandingPageMobileAppDevelopment;
