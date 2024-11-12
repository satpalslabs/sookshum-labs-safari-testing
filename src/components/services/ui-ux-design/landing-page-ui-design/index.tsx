import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import { HomeProps } from "@app/page";
import Testimonials from "@components/basic-components/testimonials";
import OurProcess from "./our-process";
import LetsConnect from "./need-project";
import Work from "./work";
import Discover from "./discover";
import PredictableResults from "./predictable-results";
import Capabilities from "./capability";
import WhyUs from "./why-us";
import OurServices from "./our-services";
import GoTopButton from "@components/basic-components/go-to-top";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/ui-ux-design/landing-page-ui-design/bg-image.png",
  "contact-us": true,
  image: true,
  fallback: "",
  additionalDescription: null,
  buttonText: "Landing Page Design",
  gradientText: "Landing Page Design Services For High Conversions ",
  style: {
    sourceStyle:
      "xxl:left-[50%] xxl:!-translate-x-[50%]  xxl:!h-[1040px] !h-[750px]  left-[8%] xxl:scale-[0.99] lg:!h-[500px] sm:!h-[420px] xs:!h-[220px] xxl:!top-[-69%] xs:!top-[-20%] !top-[-40%] !-translate-x-[8%] xs:!scale-[2] left-[15%] lg:left-[8%]",
    gradientDivStyle:
      "xxl:!h-[550px] xxl:left-[50%] xxl:-translate-x-[35%] !h-[580px] lg:!h-[450px] sm:!h-[390px] xs:!h-[180px] xs:!top-[2%] lg:!top-[-23%] sm:!top-[-28.4%] !top-[-8%] xxl:!top-[-8%] !bg-gradient-to-t !from-black !via-[#151515a7] !to-black",
  },
  aboutPage:
    "Our landing page design agency will enhance your online presence, help you attract more leads, and convert them into loyal customers.",
};

const LandingPageUI_DesignComponent: React.FC<HomeProps> = (props) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <Discover />
    <Capabilities />
    <WhyUs />
    <OurServices />
    <OurProcess />
    <PredictableResults />
    {!props.isBot && <Work />}
    {!props.isBot && <Testimonials />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"ui-ux-design"} /> */}
    <LetsConnect />
    <GoTopButton />

  </div>
);

export default LandingPageUI_DesignComponent;
