


import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
// import Faqs from "@components/services/reuseable-components/faqs";
import { HomeProps } from "@app/page";
import About from "./about";
import POC from "./poc";
import LetsConnect from "./need-project";
import Testimonials from "@components/basic-components/testimonials";
import Work from "@components/home/work";
import CoreServices from "./core-services";
import ChooseUs from "./choose-us";
import Pros_Cons from "./pros-cons";
import GoTopButton from "@components/basic-components/go-to-top";

const content_heroSection: HeroSection = {
  URL: "/services/low-code-development/appsmith-development-services/bg-image.png",
  "contact-us": true,
  fallback:"",
  image: true,
  buttonText: "Appsmith Development Services",
  additionalDescription: "",
  gradientText: "Appsmith Development <br /> Services",
  gradientTextStyle: "w-[90%] lg:w-[80%] xs:!w-full",
  style: {
    sourceStyle:
      " xxl:!h-[910px] sm:!h-[550px] lg:!h-[600px] xxl:!scale-[1] xxl:left-[50%] xxl:!-translate-x-[50%]  xxl:!top-[-38%] !top-[-28%] !h-[850px] !ml-0 xs:!h-[300px] xs:!scale-[1.5] xs:!top-[-20%] sm:!top-[-40%] lg:!top-[-30%]",
    gradientDivStyle:
      "xxl:!h-[630px] xxl:!min-w-screen !h-[650px] lg:!h-[450px] sm:!h-[440px]  xs:!h-[380px] xs:!scale-[1.5] xs:!top-[-30%] sm:!top-[-25%] xxl:!top-[-3%] !top-[-14%] xxl:!top-[-8%] ",
  },
  aboutPage:
    "Leverage the power of Appsmith, the pioneering open-source low-code platform for developing custom work dashboards and automating workflows.",
};

const Appsmith_DevelopmentServices: React.FC<HomeProps> = ({isBot}) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <About />
    <POC />
    <CoreServices />
    <ChooseUs />
    <Pros_Cons />
    {!isBot && <Work />}
    {!isBot && <Testimonials />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"website-development-landing-page"} /> */}
    <LetsConnect />
    <GoTopButton />

  </div>
);

export default Appsmith_DevelopmentServices;
