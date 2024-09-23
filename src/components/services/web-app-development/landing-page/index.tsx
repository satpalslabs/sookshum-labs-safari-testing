
import Services from "./services";
import Testimonials from "@components/basic-components/testimonials";
import ChooseUs from "./why-us";
import Work from "./work";
import Technologies from "./technologies";
import OurProcess from "./our-process";
import LetsConnect from "./need-project";
import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import CoreServices from "@components/services/reuseable-components/core-services";
// import Faqs from "@components/services/reuseable-components/faqs";
import { HomeProps } from "@app/page";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/web-app-development/landing-page/web-app-bg.webm",
  "contact-us": true,
  image: false,
  fallback:"/services/web-app-development/landing-page/fallback.png",
  buttonText: "Web App Development",
  additionalDescription: "",
  gradientText: "Web App Development Services",
  style: {
    sourceStyle:
    "xxl:left-[50%] xxl:scale-[1.45] scale-[1.3] h-[630px] xxl:h-[680px] lg:scale-[1.35] xs:scale-[1.8] lg:h-[300px] sm:h-[320px] xs:h-[180px] overflow-hidden xs:h-[230px] xxl:-translate-x-[12%] -top-[13%] xxl:-top-[17%] left-[15%] lg:left-[2%] lg:-top-[28%] xs:-left-[4%] xs:-top-[10%]",
  gradientDivStyle:
    "xxl:left-[50%] xxl:scale-[1.3] scale-[1.5] h-[530px] xxl:h-[550px] lg:scale-[1.35] xs:scale-[1] lg:h-[300px] sm:h-[320px] xs:h-[440px] overflow-hidden xs:h-[130px] xxl:-translate-x-[12%] -top-[13%] xxl:!-top-[15%] left-[15%] lg:left-[2%] lg:-top-[28%] xs:-left-[0%] xs:-top-[35%]",
  },
  aboutPage:
    "Transform your ideas into powerful web applications with our expert web app development services.",
};

const LandingPageWebAppDevelopment: React.FC<HomeProps> = ({isBot}) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <CoreServices DataKey={"landing-page-services"} />
    <Services />
    <ChooseUs />
    <OurProcess />
    <Technologies />
    {!isBot && <Work />}
    {!isBot && <Testimonials />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"website-development-landing-page"} /> */}
    <LetsConnect />
  </div>
);

export default LandingPageWebAppDevelopment;
