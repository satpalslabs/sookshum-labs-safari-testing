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
import GoTopButton from "@components/basic-components/go-to-top";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/mobile-app-devlopment/landing-page/mobile-app-bg.webm",
  fallback: "/services/mobile-app-devlopment/landing-page/fallback.webp",
  "contact-us": true,
  image: false,
  buttonText: "Mobile App Development",
  additionalDescription: "",
  gradientText:
    "Your App, Our Passion For <span class='hero-span'>Digital Innovation</span>",
  style: {
    sourceStyle:
      "xxl:left-[50%] xxl:scale-[1.45] scale-[1.3] h-[680px] xxl:h-[680px] lg:scale-[1.35] lg:h-[380px] md:h-[400px] sm:h-[380px] xs:h-[140px] xs:scale-[3.8] 2xs:scale-[3] 2xs:h-[180px] overflow-hidden  lg:left-[2%] lg:-top-[38%] xs:-left-[4%] xs:-top-[10%]",
    gradientDivStyle:
      " xxl:mt-[0.6%]  lg:-mt-[12%] sm:-mt-[12%] xs:-mt-[12%] lg:h-[560px] sm:h-[540px] 2xs:h-[520px] xs:h-[550px]",
  },
  aboutPage: "",
};

const LandingPageMobileAppDevelopment: React.FC<HomeProps> = ({ isBot }) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <CoreServices /> <ChooseUs />
    <OurProcess />
    <Technologies />
    <IndustryExperience />
    {isBot && <Work />}
    {isBot && <Testimonials />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"website-development-landing-page"} /> */}
    <LetsConnect />
    <GoTopButton />
  </div>
);

export default LandingPageMobileAppDevelopment;
