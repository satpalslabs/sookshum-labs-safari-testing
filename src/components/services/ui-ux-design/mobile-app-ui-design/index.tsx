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
      "scale-[1.0] w-screen xs:scale-[1.4] xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[620px] h-[540px] lg:h-[451px] sm:h-[490px] xs:h-[450px] 2xs:scale-[2] xxl:bottom-[10%] bottom-[-1%] lg:bottom-[5%] sm:bottom-[10%] xs:bottom-[-0%] 2xs:bottom-[-20%] ",
    gradientDivStyle:
      "scale-[1.0] w-screen xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[620px] h-[540px] lg:h-[461px] sm:h-[490px] xs:h-[510px] 2xs:h-[580px]   xxl:bottom-[10%] bottom-[-1%] lg:bottom-[4%]  sm:bottom-[10%]  xs:bottom-[-0%] 2xs:bottom-[0%] ",
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
