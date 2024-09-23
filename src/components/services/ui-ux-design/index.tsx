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
  fallback: "/services/ui-ux-design/fallback.png",
  additionalDescription: null,
  buttonText: "UI/UX Designing",
  gradientText: "Human-centred UI/UX product design services",
  style: {
    sourceStyle:
      "xxl:left-[50%] xxl:scale-[1.45] scale-[1.3] h-[630px] xxl:h-[680px] lg:scale-[1.35] xs:scale-[1.8] lg:h-[390px] md:h-[420px] sm:h-[380px] xs:h-[180px] overflow-hidden xs:!h-[150px] xxl:-translate-x-[12%] -top-[13%] xxl:-top-[17%] left-[15%] lg:left-[2%] lg:-top-[28%] xs:-left-[4%] xs:-top-[10%]",
    gradientDivStyle:
      "xxl:mt-[2%] lg:-mt-[8%] sm:-mt-[15%] lg:h-[570px] sm:h-[560px]",
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
