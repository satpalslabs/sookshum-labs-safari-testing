


import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
// import Faqs from "@components/services/reuseable-components/faqs";
import { HomeProps } from "@app/page";
import About from "./about";
import POC from "./poc";
import LetsConnect from "./need-project";
import Testimonials from "@components/basic-components/testimonials";
import Work from "./work";
import CoreServices from "./core-services";
import ChooseUs from "./choose-us";
import Pros_Cons from "./pros-cons";

const content_heroSection: HeroSection = {
  URL: "/services/landing-page/hero-background-image.webp",
  "contact-us": true,
  fallback:"",
  image: true,
  buttonText: "Appsmith Development Services",
  additionalDescription: "",
  gradientText: "Appsmith Development <br /> Services",
  gradientTextStyle: "w-[90%] lg:w-[80%] xs:!w-full",
  style: {
    sourceStyle:
      "xxl:left-[50%] xxl:h-[700px]  left-[8%] xxl:scale-[1.1] xxl:top-[-18%] xxl:-translate-x-[50%] left-[15%] lg:left-[2%] xs:-left-[4%]",
    gradientDivStyle: "xxl:!h-[560px] xxl:left-[50%] xxl:-translate-x-[35%]  !h-[550px] lg:!h-[450px] sm:!h-[350px] xs:!h-[240px] xs:!top-[-20%] !top-[-15%] xxl:!top-[-6%]",
  },
  aboutPage:
    "Leverage the power of Appsmith, the first ever open-source low-code internal tool builder for creating custom work dashboards and automated workflows. ",
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
  </div>
);

export default Appsmith_DevelopmentServices;
