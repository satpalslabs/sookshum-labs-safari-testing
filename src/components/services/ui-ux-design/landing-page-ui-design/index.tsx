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
  URL: "/services/ui-ux-design/landing-page-ui-design/bg-image.webp",
  "contact-us": true,
  image: true,
  fallback: "",
  additionalDescription: null,
  buttonText: "Landing Page Design",
  gradientText: "Landing Page Design Services For High Conversions ",
  style: {
    sourceStyle:
      "scale-[1.0] w-screen xs:scale-[1.4] xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[820px] h-[740px] lg:h-[551px] sm:h-[590px] xs:h-[450px] 2xs:scale-[1.7] xxl:bottom-[10%] bottom-[-1%] lg:bottom-[5%] sm:bottom-[10%] xs:bottom-[-0%] 2xs:bottom-[-20%] ",
    gradientDivStyle:
      "scale-[1.0] w-screen xs:scale-[1.4] 2xs:scale-110 xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[820px] h-[740px] lg:h-[561px] sm:h-[590px] xs:h-[510px] 2xs:h-[580px]   xxl:bottom-[10%] bottom-[-1%] lg:bottom-[4%]  sm:bottom-[10%]  xs:bottom-[-0%] 2xs:bottom-[0%] ",
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
