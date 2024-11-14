import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import { HomeProps } from "@app/page";
import Discover from "./discover";
import WhyUs from "./why-us";
import OurServices from "./our-services";
import OurProcess from "./our-process";
import Work from "./work";
import Testimonials from "@components/basic-components/testimonials";
import LetsConnect from "./need-project";
import GoTopButton from "@components/basic-components/go-to-top";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/ui-ux-design/mobile-app-ui-design/bg-image.webp",
  "contact-us": true,
  image: true,
  fallback: "",
  additionalDescription: null,
  buttonText: "Mobile App UI/UX",
  gradientText: "Mobile App User Interface & Experience Design",
  style: {
    sourceStyle:
      "xxl:left-[50%] xxl:!h-[1040px] !h-[750px]  left-[8%] xxl:scale-[0.99] lg:!h-[500px] sm:!h-[420px] xs:!h-[220px] xxl:!top-[-69%] xs:!top-[-20%] !top-[-40%] xxl:!-translate-x-[50%] !-translate-x-[8%] xs:!scale-[2] left-[15%] lg:left-[8%]",
    gradientDivStyle:
      "xxl:!h-[550px] xxl:left-[50%] xxl:-translate-x-[35%] !h-[580px] lg:!h-[450px] sm:!h-[390px] xs:!h-[180px] xs:!top-[2%] lg:!top-[-23%] sm:!top-[-28.4%] !top-[-8%] xxl:!top-[-8%] !bg-gradient-to-t !from-black !via-[#151515a7] !to-black",
  },
  aboutPage:
    "With our structured approach and step-by-step process, we consistently exceed expectations. Our team goes beyond merely delivering a product; we collaborate to create exceptional solutions that offer continuously evolving experiences.",
};

const MobileAppUI_DesignComponent: React.FC<HomeProps> = (props) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <Discover />
    <WhyUs />
    <OurServices />
    <OurProcess />
    {!props.isBot && <Work />}
    {!props.isBot && <Testimonials />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"ui-ux-design"} /> */}
    <LetsConnect />
    <GoTopButton />

  </div>
);

export default MobileAppUI_DesignComponent;
