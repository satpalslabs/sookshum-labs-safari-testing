
import Testimonials from "@components/basic-components/testimonials";
import WorkTogether from "@components/basic-components/work-together";
import Work from "./work";
import Services from "./services";
import ChooseUs from "./choose-us";
import OurProcess from "./our-process";
import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import CoreServices from "@components/services/reuseable-components/core-services";
import { HomeProps } from "@app/page";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/ui-ux-design/ui-ux-bg.webm",
  "contact-us": true,
  image: false,
  fallback:"/services/ui-ux-design/fallback.png",
  additionalDescription: null,
  buttonText: "UI/UX Designing",
  gradientText: "Human-centred UI/UX product design services",
  style: {
    sourceStyle:
    "xxl:left-[50%] xxl:scale-[1.25] scale-[1.3] h-[630px] xxl:h-[680px] lg:scale-[1.35] xs:scale-[1.8] lg:h-[300px] sm:h-[320px] xs:h-[180px] overflow-hidden xs:h-[230px] xxl:-translate-x-[12%] -top-[13%] xxl:!-top-[25%] left-[15%] lg:left-[2%] lg:-top-[28%] xs:-left-[4%] xs:-top-[10%] xxl:left-[50%] xxl:-translate-x-[47%]",
  gradientDivStyle:
    "xxl:left-[50%] xxl:scale-[1.3] scale-[1.5] h-[530px] xxl:h-[600px] lg:scale-[1.35] xs:scale-[1] lg:h-[300px] sm:h-[320px] xs:h-[440px] overflow-hidden xs:h-[130px] xxl:-translate-x-[12%] -top-[13%] xxl:!-top-[10%] left-[15%] lg:left-[2%] lg:-top-[28%] xs:-left-[0%] xs:-top-[35%] xxl:left-[50%] xxl:-translate-x-[47%]",
  },
  aboutPage:
    "We craft successful digital products that align user needs with business goals, using a human-centered design approach to bring them to life.",
};

const UiUxDesignComponent: React.FC<HomeProps> = (props) => (
  <div className="relative ">
    <Hero {...content_heroSection} />
    <CoreServices DataKey={"landing-page-services"} />
    <Services />
    <ChooseUs />
    <OurProcess />
    {!props.isBot && <Work />}
    {!props.isBot && <Testimonials />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"ui-ux-design"} /> */}
    <WorkTogether />
  </div>
);

export default UiUxDesignComponent;
