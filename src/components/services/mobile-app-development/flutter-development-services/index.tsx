import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import Testimonials from "@components/basic-components/testimonials";
import { HomeProps } from "@app/page";
import WhoWeAre from "./who-we-are";
import WhyUs from "./why-us";
import LetsConnect from "./need-project";
import OurProcess from "./our-process";
import Benefits from "./benefits";
import Technologies from "./technologies";
import Work from "./work";
import OurServices from "./our-services";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/mobile-app-devlopment/flutter-development-services/bg-image.png",
  image: true,
  buttonText: "Flutter App Development",
  "contact-us": true,
  additionalDescription: "",
  gradientText: "Flutter App Development Services",
  fallback: "",
  style: {
    sourceStyle:
      "xxl:left-[50%] xxl:!h-[700px] left-[8%] xxl:scale-[1] lg:!h-[330px] sm:!h-[280px] xs:!h-[170px] xxl:top-[-21%] xxl:-translate-x-[50%] left-[15%] lg:left-[2%] xs:-left-[4%]",
    gradientDivStyle:
      "xxl:!h-[530px] xxl:left-[50%] xxl:-translate-x-[35%] !h-[550px] lg:!h-[380px] sm:!h-[340px] xs:!h-[220px] xs:!top-[-20%] !top-[-15%] xxl:!top-[-9%]",
  },
  aboutPage:
    "We build top-notch quality Flutter Appps fast and on-budget. <br/> We have been working with Flutter longer than anyone.",
};

const Flutter_DevelopmentServices: React.FC<HomeProps> = ({ isBot }) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <WhoWeAre />
    <WhyUs />
    <OurServices />
    <Technologies />
    <OurProcess />
    <Benefits />
    {!isBot && <Work />}
    {!isBot && <Testimonials />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"ecommerce-development-landing-page"}/> */}
    <LetsConnect />
  </div>
);

export default Flutter_DevelopmentServices;
