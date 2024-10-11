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
  fallback: "/services/ui-ux-design/fallback.webp",
  additionalDescription: null,
  buttonText: "UI/UX Designing",
  gradientText: "Human-centred UI/UX product design services",
  style: {
    sourceStyle:
      "xxl:left-[50%] xxl:!scale-[1.45] !scale-[2] !h-[550px] xxl:!h-[680px] lg:!scale-[1.35] lg:!h-[380px] md:!h-[400px] sm:!h-[380px] xs:!h-[160px] xs:!scale-[3.8] 2xs:!scale-[3] 2xs:!h-[150px] overflow-hidden  xxl:-translate-x-[12%] -top-[13%] xxl:-top-[17%] left-[15%] lg:left-[2%] lg:-top-[28%] xs:-left-[4%] xs:-top-[10%]",
    gradientDivStyle:
      "xxl:mt-[0.6%] lg:!-mt-[8%] sm:!-mt-[12%] xs:!-mt-[8%] 2xs:!-mt-[5%] lg:!h-[550px] sm:!h-[560px] 2xs:!h-[480px] 3xs:!h-[560px] xs:!h-[580px]",
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
