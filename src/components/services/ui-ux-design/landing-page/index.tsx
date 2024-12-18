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
import GoTopButton from "@components/basic-components/go-to-top";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/ui-ux-design/landing-page/ui-ux-bg.webm",
  "contact-us": true,
  image: false,
  fallback: "/services/ui-ux-design/landing-page/fallback.webp",
  additionalDescription: null,
  buttonText: "UI/UX Designing",
  gradientText:
    "Human-centred <span class='hero-span'>UI/UX product design</span> services",
  style: {
    sourceStyle:
      "xxl:left-[50%] xxl:scale-[1.45] scale-[2] h-[550px] xxl:h-[680px] lg:scale-[1.35] lg:h-[380px] md:h-[400px] sm:h-[380px] xs:h-[160px] xs:scale-[3.8] 2xs:scale-[3] 2xs:h-[150px] overflow-hidden  left-[15%] lg:left-[2%] lg:-top-[28%] xs:-left-[4%] xs:-top-[0%]",
    gradientDivStyle:
      "xxl:mt-[0.6%] lg:-mt-[8%] sm:-mt-[12%] xs:-mt-[8%] 2xs:-mt-[5%] lg:h-[550px] sm:h-[560px] 2xs:h-[480px] 3xs:h-[560px] xs:h-[580px]",
  },
  aboutPage:
    "We craft successful digital products that align user needs with business goals, using a human-centered design approach to bring them to life.",
};

const UiUxDesignComponent: React.FC<HomeProps> = (props) => (
  <div className="relative ">
    <Hero {...content_heroSection} />
    <CoreServices /> <Services />
    <ChooseUs />
    <OurProcess />
    {props.isBot && <Work />}
    {props.isBot && <Testimonials />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"ui-ux-design"} /> */}
    <WorkTogether />
    <GoTopButton />
  </div>
);

export default UiUxDesignComponent;
