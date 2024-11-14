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
      "scale-[1.0] xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[620px] h-[540px] sm:h-[390px] xs:h-[350px] lg:h-[311px]  xxl:bottom-[10%] bottom-[-1%] lg:bottom-[18%] sm:bottom-[25%] xs:bottom-[15%]  ",
    gradientDivStyle:
      "scale-[1.0] xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[620px] h-[540px] lg:h-[321px] sm:h-[400px] xs:h-[350px]  xxl:bottom-[10%] bottom-[-1%] lg:bottom-[16%]  sm:bottom-[25%]  xs:bottom-[15%] ",
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
