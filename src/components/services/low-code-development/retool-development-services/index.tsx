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
      "xxl:!left-[45%] xxl:!w-[950px] !left-[50%] xxl:!top-[-8%] !top-[-8%] !h-[650px] !translate-x-[4%] !ml-0 !scale-[1] !w-[700px] xs:!w-full xs:!top-[-30%] xs:!left-0 lg:!left-[22%] sm:!left-[10%] sm:!top-[-40%] lg:!top-[-30%]",
    gradientDivStyle:
      "xxl:!h-[630px] xxl:!left-[20%] xxl:!-translate-x-[0%] xxl:!min-w-screen !h-[650px] lg:!h-[480px] sm:!h-[440px] xs:!h-[220px] xs:!top-[-20%] xxl:!top-[-3%] !top-[-14%] xxl:!top-[-8%] ",
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
