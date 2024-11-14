import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import { HomeProps } from "@app/page";
import Testimonials from "@components/basic-components/testimonials";
import OurServices from "./our-services";
import OurProcess from "../website-ui-design/our-process";
import LetsConnect from "./need-project";
import Work from "./work";
import Discover from "./discover";
import WhyUs from "./why-us";
import PredictableResults from "./predictable-results";
import GoTopButton from "@components/basic-components/go-to-top";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/ui-ux-design/web-app-design/bg-image.webp",
  "contact-us": true,
  image: true,
  fallback: "",
  additionalDescription: null,
  buttonText: "Web App Design",
  gradientText: "Web App Design That Puts Your Users First",
  style: {
    sourceStyle:
      "xxl:!left-[50%] xxl:!scale-[1.1] lg:!h-[630px] sm:!h-[480px] xs:!h-[170px] xxl:top-[-35%] xxl:!h-[740px] !h-[720px] xs:!scale-[2] xs:!top-[10%] !top-[-30%] lg:!top-[-50%]  xxl:!-translate-x-[50%]",
    gradientDivStyle:
      "xxl:!h-[540px] xxl:left-[50%] xxl:-translate-x-[35%] !h-[550px] lg:!h-[480px] lg:!top-[-30%] sm:!h-[380px] xs:!scale-[2] xs:!top-[10%] xs:!h-[180px] xs:!top-[-20%] !top-[-15%] xxl:!top-[-8%]",
  },
  aboutPage:
    "With extensive experience designing dozens of products, we possess the expertise to create complex designs that are both well-considered and highly efficient.",
};

const WebAppUI_DesignComponent: React.FC<HomeProps> = (props) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <Discover />
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

export default WebAppUI_DesignComponent;
