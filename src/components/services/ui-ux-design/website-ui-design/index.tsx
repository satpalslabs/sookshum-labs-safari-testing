import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import { HomeProps } from "@app/page";
import Testimonials from "@components/basic-components/testimonials";
import WhoWeAre from "./who-we-are";
import WhyUs from "./why-us";
import OurServices from "./our-services";
import OurProcess from "./our-process";
import LetsConnect from "./need-project";
import Work from "./work";
import Benefits from "./benefits";
import GoTopButton from "@components/basic-components/go-to-top";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/ui-ux-design/website-ui-design/bg-image.webp",
  "contact-us": true,
  image: true,
  fallback: "",
  additionalDescription: null,
  buttonText: "Website Design",
  gradientText: "Designing Exciting Websites That Generate Profit",
  style: {
    sourceStyle:
      "scale-[1.0] w-screen xs:scale-[1.4] xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[620px] h-[540px] lg:h-[451px] sm:h-[490px] xs:h-[450px] 2xs:scale-[1.7] xxl:bottom-[10%] bottom-[-1%] lg:bottom-[5%] sm:bottom-[10%] xs:bottom-[-0%] 2xs:bottom-[-20%] ",
    gradientDivStyle:
      "scale-[1.0] w-screen xs:scale-[1.4] 2xs:scale-110 xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[620px] h-[540px] lg:h-[461px] sm:h-[490px] xs:h-[510px] 2xs:h-[580px]   xxl:bottom-[10%] bottom-[-1%] lg:bottom-[4%]  sm:bottom-[10%]  xs:bottom-[-0%] 2xs:bottom-[0%] ",
  },
  aboutPage:
    "With our experience in developing hundreds of websites, we understand how to create a site that effectively balances business requirements and creativity.",
};

const WebsiteUI_DesignComponent: React.FC<HomeProps> = (props) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <WhoWeAre />
    <WhyUs />
    <OurServices />
    <OurProcess />
    <Benefits />
    {!props.isBot && <Work />}
    {!props.isBot && <Testimonials />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"ui-ux-design"} /> */}
    <LetsConnect />
    <GoTopButton />

  </div>
);

export default WebsiteUI_DesignComponent;
