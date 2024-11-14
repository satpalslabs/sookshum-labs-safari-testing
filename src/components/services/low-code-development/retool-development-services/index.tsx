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
  URL: "/services/low-code-development/retool-development-services/bg-image.webp",
  image: true,
  buttonText: "Retool Development",
  "contact-us": true,
  additionalDescription: "",
  gradientText: "Streamline Workflows and Enhance Productivity with Retool Development",
  fallback: "",
  style: {
    sourceStyle:
      "xxl:!left-[30%] xxl:!h-[800px] xxl:!scale-[1.1] !h-[700px] !-top-[20%] xxl:!top-[-38%] xxl:!-translate-x-[30%] lg:!h-[550px] lg:!top-[-40%] sm:!h-[450px] xs:!h-[320px] xs:-top-[4%] xs:!scale-[2]",
    gradientDivStyle: "xxl:left-[50%] xxl:-translate-x-[50%] xxl:!h-[560px] xxl:left-[50%] !h-[560px] lg:!h-[450px] sm:!h-[360px] xs:!h-[240px]  lg:!top-[-30%]  xs:!top-[-20%] !top-[-15%] xxl:!top-[-6%]",
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
