import Services from "./our-services";
import Testimonials from "@components/basic-components/testimonials";
import ChooseUs from "./why-us";
import Work from "@components/home/work";
import LetsConnect from "./need-project";
import Benefits from "./benefits";
import Tools from "./tools";
import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import CoreServices from "@components/services/reuseable-components/core-services";
// import Faqs from "@components/services/reuseable-components/faqs";
import { HomeProps } from "@app/page";
import GoTopButton from "@components/basic-components/go-to-top";

const content_heroSection: HeroSection = {
  URL: "/services/low-code-development/landing-page/bg-image.webp",
  "contact-us": true,
  fallback: "",
  image: true,
  buttonText: "Low Code Development",
  additionalDescription: "",
  gradientText:
    "Your <span class='hero-span'>custom software.</span> Ready next week.",
  gradientTextStyle: "w-[90%] lg:w-[80%] xs:!w-full",
  style: {
    sourceStyle:
      "scale-[1.0] xs:scale-[1.8] xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[620px] h-[540px] sm:h-[390px] xs:h-[350px] lg:h-[311px]  xxl:bottom-[10%] bottom-[-1%] lg:bottom-[18%] sm:bottom-[25%] xs:bottom-[18%]  ",
    gradientDivStyle:
      "scale-[1.0] xs:scale-[2] xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[620px] h-[540px] lg:h-[321px] sm:h-[400px] xs:h-[350px]  xxl:bottom-[10%] bottom-[-1%] lg:bottom-[16%]  sm:bottom-[25%]  xs:bottom-[15%] 2xs:bottom-[35%]",
  },
  aboutPage:
    "We are a digital product studio obsessed with building software that delights your users. We design, build, and deliver your custom solutions - fast.",
};

const LandingPageLowCodeDevelopment: React.FC<HomeProps> = ({ isBot }) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <CoreServices /> <Services />
    <Benefits />
    <ChooseUs />
    <Tools />
    {!isBot && <Work />}
    {!isBot && <Testimonials />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"website-development-landing-page"} /> */}
    <LetsConnect />
    <GoTopButton />
  </div>
);

export default LandingPageLowCodeDevelopment;
