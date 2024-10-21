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

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/landing-page/hero-background-image.webp",
  "contact-us": true,
  image: true,
  fallback: "",
  additionalDescription: null,
  buttonText: "Landing Page Design",
  gradientText: "Landing Page Design Services For High Conversions ",
  style: {
    sourceStyle:
      "xxl:left-[50%] left-[8%] xxl:scale-[1.1] lg:!h-[330px] sm:!h-[280px] xs:!h-[170px] xxl:top-[-18%] xxl:!h-[640px]  xxl:-translate-x-[50%] left-[15%] lg:left-[2%] xs:-left-[4%]",
    gradientDivStyle:
      "xxl:!h-[520px] xxl:left-[50%] xxl:-translate-x-[35%] !h-[550px] lg:!h-[380px] sm:!h-[340px] xs:!h-[220px] xs:!top-[-20%] !top-[-15%] xxl:!top-[-8%]",
  },
  aboutPage:
    "Our landing page design company will help you increase your online presence, start driving more leads and convert them into regular customers.",
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
  </div>
);

export default LandingPageUI_DesignComponent;
