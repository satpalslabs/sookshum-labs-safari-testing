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
// import Faqs from "@components/services/reuseable-components/faqs";
import { HomeProps } from "@app/page";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/mobile-app-devlopment/mobile-app-bg.webm",
  fallback: "/services/mobile-app-devlopment/fallback.png",
  "contact-us": true,
  image: false,
  buttonText: "Mobile App Development",
  additionalDescription: "",
  gradientText: "Your App, Our Passion For Digital Innovation",
  style: {
    sourceStyle:
      "xxl:left-[50%] xxl:scale-[1.45] scale-[1.3] !h-[550px] xxl:!h-[680px] lg:!scale-[1.35] lg:!h-[380px] md:!h-[400px] sm:!h-[380px] xs:!h-[140px] xs:!scale-[3.8] 2xs:!scale-[3] 2xs:!h-[180px] overflow-hidden  xxl:-translate-x-[12%] -top-[13%] xxl:-top-[17%] left-[15%] lg:left-[2%] lg:-top-[28%] xs:-left-[4%] xs:-top-[10%]",
    gradientDivStyle:
      "xxl:mt-[2%] lg:!-mt-[8%] sm:!-mt-[12%] xs:!-mt-[10%] lg:!h-[550px] sm:!h-[560px] 2xs:!h-[500px] xs:!h-[550px]",
  },
  aboutPage: "",
};

const LandingPageMobileAppDevelopment: React.FC<HomeProps> = ({ isBot }) => (
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
