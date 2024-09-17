import React from "react";
import Services from "./services";
import Testimonials from "@components/basic-components/testimonials";
import ChooseUs from "./why-us";
import Work from "./work";
import Technologies from "./technologies";
import OurProcess from "./our-process";
import IndustryExperience from "./industry-experience";
import LetsConnect from "./lets-connect";
import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import CoreServices from "@components/services/reuseable-components/core-services";
import Faqs from "@components/services/reuseable-components/faqs";
import { HomeProps } from "@app/page";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/website-development/landing-page/website-bg.webm",
  "contact-us": true,
  image: false,
  buttonText: "Website Development",
  additionalDescription: "",
  gradientText: "Innovative Web Solutions For The Modern Age",
  style: {
    sourceStyle:
      "xxl:left-[50%] xxl:scale-[1.75] scale-[1.5] h-[430px] xxl:h-[480px] lg:scale-[1.35] xs:scale-[2.3] lg:h-[300px] sm:h-[320px] xs:h-[180px] overflow-hidden xs:h-[130px] xxl:-translate-x-[12%] -top-[13%] xxl:-top-[17%] left-[15%] lg:left-[2%] lg:-top-[28%] xs:-left-[4%] xs:-top-[10%]",
    gradientDivStyle:
      "xxl:left-[50%] xxl:scale-[1.75] scale-[1.5] h-[430px] xxl:h-[480px] lg:scale-[1.35] xs:scale-[2.3] lg:h-[300px] sm:h-[320px] xs:h-[180px] overflow-hidden xs:h-[130px] xxl:-translate-x-[12%] -top-[13%] xxl:-top-[17%] left-[15%] lg:left-[2%] lg:-top-[28%] xs:-left-[4%] xs:-top-[10%]",
  },
  aboutPage: "",
};

const LandingPageWebSiteDevelopment: React.FC<HomeProps> = ({ isBot }) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <CoreServices DataKey={"landing-page-services"} />
    <Services />
    <ChooseUs />
    <OurProcess />
    <IndustryExperience />
    <Technologies />
    {!isBot && <Work />}
    {!isBot && <Testimonials />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"website-development-landing-page"} /> */}
    <LetsConnect />
  </div>
);

export default LandingPageWebSiteDevelopment;
