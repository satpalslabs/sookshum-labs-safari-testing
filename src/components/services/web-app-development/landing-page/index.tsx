import Services from "./services";
import Testimonials from "@components/basic-components/testimonials";
import ChooseUs from "./why-us";
import Technologies from "./technologies";
import OurProcess from "./our-process";
import LetsConnect from "./need-project";
import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import CoreServices from "@components/services/reuseable-components/core-services";
// import Faqs from "@components/services/reuseable-components/faqs";
import { HomeProps } from "@app/page";
import GoTopButton from "@components/basic-components/go-to-top";
import Work from "@components/home/work";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/web-app-development/landing-page/web-app-bg.webm",
  "contact-us": true,
  image: false,
  fallback: "/services/web-app-development/landing-page/fallback.webp",
  buttonText: "Web App Development",
  additionalDescription: "",
  gradientText: "<span class='hero-span'>Web App</span> Development Services",
  style: {
    sourceStyle:
      "xxl:left-[50%] xxl:scale-[1.45] scale-[2] h-[550px] xxl:h-[680px] lg:scale-[1.35] lg:h-[380px] md:h-[400px] sm:h-[380px] xs:h-[160px] xs:scale-[3.8] 2xs:scale-[3] 2xs:h-[150px] overflow-hidden   left-[15%] lg:left-[2%] lg:-top-[28%] xs:-left-[4%] xs:top-[5%]",
    gradientDivStyle:
      "xxl:mt-[1.6%] lg:-mt-[8%] sm:-mt-[12%] xs:!-mt-[10%] 2xs:!-mt-[9%] lg:!h-[550px] sm:!h-[560px] 2xs:!h-[500px] xs:!h-[580px]",
  },
  aboutPage:
    "Transform your ideas into powerful web applications with our expert web app development services.",
};

const LandingPageWebAppDevelopment: React.FC<HomeProps> = ({ isBot }) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <CoreServices /> <Services />
    <ChooseUs />
    <OurProcess />
    <Technologies />
    {!isBot && <Work />}
    {!isBot && <Testimonials />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"website-development-landing-page"} /> */}
    <LetsConnect />
    <GoTopButton />
  </div>
);

export default LandingPageWebAppDevelopment;
