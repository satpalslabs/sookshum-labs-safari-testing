

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
  fallback:"",
  image: true,
  buttonText: "Low Code Development",
  additionalDescription: "",
  gradientText: "Your custom software. Ready next week.",
  gradientTextStyle: "w-[90%] lg:w-[80%] xs:!w-full",
  style: {
    sourceStyle:
      "xxl:!left-[30%] xxl:!h-[700px] xxl:!scale-[1.1] !h-[700px] !-top-[20%] xxl:top-[-18%] xxl:!-translate-x-[30%] lg:!h-[550px] sm:!h-[450px] xs:!h-[320px] xs:!-top-[4%] xs:!scale-[2]",
    gradientDivStyle: "xxl:left-[50%] xxl:-translate-x-[50%] xxl:!h-[560px] xxl:left-[50%] !h-[560px] lg:!h-[450px] sm:!h-[360px] xs:!h-[280px]  xs:!top-[-20%] !top-[-15%] xxl:!top-[-8%]",
  },
  aboutPage:
    "We are a digital product studio obsessed with building software that delights your users. We design, build, and deliver your custom solutions - fast.",
};

const LandingPageLowCodeDevelopment: React.FC<HomeProps> = ({isBot}) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <CoreServices DataKey={"landing-page-services"} />
    <Services />
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
