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
  URL: "/services/ui-ux-design/website-ui-design/bg-image.png",
  "contact-us": true,
  image: true,
  fallback: "",
  additionalDescription: null,
  buttonText: "Website Design",
  gradientText: "Designing Exciting Websites That Generate Profit",
  style: {
    sourceStyle:
      "xxl:left-[50%] xxl:!h-[1040px] !h-[750px]  left-[8%] xxl:scale-[0.99] lg:!h-[500px] sm:!h-[420px] xs:!h-[220px] xxl:!top-[-69%] xs:!top-[-20%] !top-[-40%] xxl:!-translate-x-[50%] !-translate-x-[8%]  left-[15%] lg:left-[8%]",
    gradientDivStyle:
      "xxl:!h-[550px] xxl:left-[50%] xxl:-translate-x-[50%] !max-w-[1920px] !h-[590px] lg:!h-[450px] sm:!h-[390px] xs:!h-[180px] xs:!top-[2%] lg:!top-[-23%] sm:!top-[-29%] !top-[-8%] xxl:!top-[-8%] !bg-gradient-to-t !from-black !via-[#151515a7] !to-black",
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
