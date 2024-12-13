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
  gradientText:
    "Streamline Workflows and Enhance Productivity with <span class='hero-span'>Retool Development</span> ",
  fallback: "",
  style: {
    sourceStyle:
      "scale-[1.0] xs:scale-[1.8] xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[920px] h-[840px] sm:h-[490px] xs:h-[350px] lg:h-[611px]  xxl:bottom-[10%] bottom-[-1%] lg:bottom-[0%] sm:bottom-[25%] xs:bottom-[18%]  ",
    gradientDivStyle:
      "scale-[1.0] xs:scale-[2] xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[920px] h-[840px] lg:h-[621px] sm:h-[490px] xs:h-[350px]  xxl:bottom-[10%] bottom-[-1%] lg:bottom-[0%]  sm:bottom-[25%] xs:bottom-[15%] 2xs:bottom-[35%] ",
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
