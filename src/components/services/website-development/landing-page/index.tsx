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
  fallback:"/services/website-development/landing-page/fallback.png",
  "contact-us": true,
  image: false,
  buttonText: "Website Development",
  additionalDescription: "",
  gradientText: "Innovative Web Solutions For The Modern Age",
  style: {
    sourceStyle:
      "xxl:left-[50%] xxl:scale-[1.45] scale-[1.3] h-[630px] xxl:h-[680px] lg:scale-[1.35] xs:scale-[1.8] lg:h-[300px] sm:h-[320px] xs:h-[180px] overflow-hidden xs:h-[230px] xxl:-translate-x-[12%] -top-[13%] xxl:-top-[17%] left-[15%] lg:left-[2%] lg:-top-[28%] xs:-left-[4%] xs:-top-[10%]",
    gradientDivStyle:
      "xxl:left-[40%] xxl:scale-[1.3] scale-[1.5] h-[530px] xxl:h-[550px] lg:scale-[1.35] xs:scale-[1] lg:h-[300px] sm:h-[320px] xs:h-[440px] overflow-hidden xs:h-[130px] xxl:-translate-x-[40%] -top-[13%] xxl:!-top-[13%] left-[15%] lg:left-[2%] lg:-top-[28%] xs:-left-[0%] xs:-top-[35%]",
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
