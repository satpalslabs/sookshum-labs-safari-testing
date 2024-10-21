import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import Services from "./services";
import Testimonials from "@components/basic-components/testimonials";
import Work from "./work";
import { HomeProps } from "@app/page";
import WhoWeAre from "./who-we-are";
import Benefits from "./benefits";
import ChooseUs from "./choose-us";
import OurProcess from "./our-process";
import LetsConnect from "./need-project";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/web-app-development/laravel-development-services/bg-image.png",
  image: true,
  buttonText: "Laravel Development",
  "contact-us": true,
  additionalDescription: "",
  gradientText:
    "Take Your Product from Vision to Launch with Expert Laravel developers",
  fallback: "",
  style: {
    sourceStyle:
      "xxl:!left-[23%] xxl:!h-[650px] !left-[8%] lg:!h-[330px] sm:!h-[280px] xs:!h-[200px] xxl:!top-[-18%] xs:!top-[-5%] xs:!scale-[2.4] xxl:!translate-x-[0%] xxl:!ml-0 !ml-[18%] !scale-[1.5] lg:!scale-[1.5] xs:!ml-[30%] lg:!ml-[25%] xxl:!scale-[1.45] lg:!left-[2%]",
    gradientDivStyle:
      "xxl:!h-[630px] xxl:!left-[20%] xxl:!-translate-x-[0%] xxl:!min-w-screen !h-[650px] lg:!h-[380px] sm:!h-[340px] xs:!h-[220px] xs:!top-[-20%] xxl:!top-[-3%] !top-[-14%] xxl:!top-[-8%]",
  },
  aboutPage:
    "More than just a dev team, we provide the strategy and expertise needed to launch your product.",
};

const Laravel_DevelopmentServices: React.FC<HomeProps> = ({ isBot }) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <WhoWeAre />
    <ChooseUs />
    <Services />
    <OurProcess />
    <Benefits />
    {!isBot && <Work />}
    {!isBot && <Testimonials />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"ecommerce-development-landing-page"}/> */}
    <LetsConnect />
  </div>
);

export default Laravel_DevelopmentServices;
