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
      "scale-1 w-[2040px] xxl:h-[800px]  h-[800px] xxl:top-0 translate-y-[-40%] xxl:left-[50%] lg:left-[50%] lg:w-[1500px] lg:translate-x-[-50%]  xxl:translate-x-[-50%] sm:h-[560px] top-[50px] lg:h-[600px] md:h-[600px] lg:translate-y-[-50%] xs:w-[650px] xs:translate-y-[-10%] xs:h-[1300px] xs:max-h-[1800px] xs:object-cover xs:scale-1",
    gradientDivStyle:
      " sm:h-[560px] top-0  mt-0 xxl:h-[740px] h-[800px] xxl:translate-y-0 translate-y-[-20%]  xs:translate-y-[-10%] xs:h-[600px] xs:max-h-[1800px]",
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
