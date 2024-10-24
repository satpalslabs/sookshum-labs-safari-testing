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
// import Faqs from "@components/services/reuseable-components/faqs";
import { HomeProps } from "@app/page";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/website-development/landing-page/website-bg.webm",
  fallback: "/services/website-development/landing-page/fallback.webp",
  "contact-us": true,
  image: false,
  buttonText: "Website Development",
  additionalDescription: "",
  gradientText: "Innovative Web Solutions For The Modern Age",
  style: {
    sourceStyle:
      "xxl:left-[50%] xxl:scale-[1.45] scale-[1.3] !h-[550px] xxl:!h-[680px] lg:!scale-[1.35] lg:!h-[380px] md:!h-[400px] sm:!h-[380px] xs:!h-[140px] xs:!scale-[3.8] 2xs:!scale-[2.9] 2xs:!h-[180px] overflow-hidden  xxl:-translate-x-[12%] -top-[13%] xxl:-top-[17%] left-[15%] lg:left-[2%] lg:-top-[28%] xs:-left-[4%] xs:-top-[10%]",
    gradientDivStyle:
      "xxl:mt-[0.6%] lg:!-mt-[8%] sm:!-mt-[12%] xs:!-mt-[10%] lg:!h-[550px] sm:!h-[560px] 2xs:!h-[500px] xs:!h-[550px]",
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
