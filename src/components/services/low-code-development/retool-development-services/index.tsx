import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import Testimonials from "@components/basic-components/testimonials";
import { HomeProps } from "@app/page";
import EverythingYouNeed from "./everything-you-need";
import ChooseUs from "./choose-us";
import LetsConnect from "./need-project";
import OurServices from "./our-services";
import Benefits from "./benefits";
import OurProcess from "./our-process";
import Work from "@components/home/work";
import GoTopButton from "@components/basic-components/go-to-top";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/low-code-development/retool-development-services/bg-image.png",
  image: true,
  buttonText: "Retool Development",
  "contact-us": true,
  additionalDescription: "",
  gradientText: "Streamline Workflows and Enhance Productivity with Retool Development",
  fallback: "",
  style: {
    sourceStyle:
      " xxl:!h-[950px] sm:!h-[550px] lg:!h-[700px] xxl:!scale-[1] xxl:left-[50%] xxl:!-translate-x-[50%]  xxl:!top-[-38%] !top-[-28%] !h-[850px] !ml-0 xs:!h-[400px] xs:!scale-[1.5] xs:!top-[-15%] sm:!top-[-40%] lg:!top-[-30%]",
    gradientDivStyle:
      "xxl:!h-[630px] xxl:!min-w-screen !h-[650px] lg:!h-[550px] sm:!h-[440px] xs:!h-[320px] sm:!top-[-25%] xs:!top-[-16%] xxl:!top-[-3%] !top-[-14%] xxl:!top-[-8%] ",
  },
  aboutPage:
    "We provide expert Retool development services that help businesses harness the full potential of the Retool low-code platform. Our services enable the creation of custom applications, streamline workflows, and enhance productivity.",
};

const Retool_DevelopmentServices: React.FC<HomeProps> = ({ isBot }) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <EverythingYouNeed />
    <ChooseUs />
    <OurServices />
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

export default Retool_DevelopmentServices;
