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
  URL: "/services/low-code-development/landing-page/bg-image.webp",
  "contact-us": true,
  fallback: "",
  image: true,
  buttonText: "Appsmith Development Services",
  additionalDescription: "",
  gradientText:
    "<span class='hero-span'>Appsmith</span> Development <br /> Services",
  gradientTextStyle: "w-[90%] lg:w-[80%] xs:!w-full",
  style: {
    sourceStyle:
      "scale-[1.0] xs:scale-[1.8] xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[620px] h-[540px] sm:h-[390px] xs:h-[350px] lg:h-[311px]  xxl:bottom-[10%] bottom-[-1%] lg:bottom-[18%] sm:bottom-[25%] xs:bottom-[18%]  ",
    gradientDivStyle:
      "scale-[1.0] xs:scale-[2] xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[620px] h-[540px] lg:h-[321px] sm:h-[400px] xs:h-[350px]  xxl:bottom-[10%] bottom-[-1%] lg:bottom-[16%]  sm:bottom-[25%]  xs:bottom-[15%] 2xs:bottom-[35%]",
  },
  aboutPage:
    "Leverage the power of Appsmith, the pioneering open-source low-code platform for developing custom work dashboards and automating workflows.",
};

const Appsmith_DevelopmentServices: React.FC<HomeProps> = ({ isBot }) => (
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
