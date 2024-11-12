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
import GoTopButton from "@components/basic-components/go-to-top";

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
      "xxl:!left-[20%] xxl:!h-[700px] h-[600px]  xxl:scale-[1] lg:!scale-[1.2] !top-[-20%] lg:!h-[430px] sm:!h-[380px] xs:!h-[270px] xs:!top-[-15%] xs:!scale-[2] xxl:top-[-21%] xxl:!-translate-x-[20%] lg:!top-[-40%] ",
    gradientDivStyle:
      "xxl:!h-[530px] !h-[550px] lg:!h-[400px] lg:!top-[-30%] sm:!h-[380px] xs:!h-[220px] xs:!top-[-20%] !top-[-15%] xxl:!top-[-9%]",
  },
  aboutPage:
    "We deliver high-quality Flutter apps quickly and within budget. With extensive experience in Flutter development, we are among the pioneers in the field.",
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
    <GoTopButton />

  </div>
);

export default Flutter_DevelopmentServices;
