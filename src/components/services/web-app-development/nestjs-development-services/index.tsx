import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import Testimonials from "@components/basic-components/testimonials";
import { HomeProps } from "@app/page";
import WhoWeAre from "./who-we-are";
import ChooseUs from "./choose-us";
import OurServices from "./our-services";
import OurProcess from "./our-process";
import LetsConnect from "./need-project";
import Work from "./work";
import Benefits from "./benefits";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/web-app-development/laravel-development-services/bg-image.png",
  image: true,
  buttonText: "NestJS App Development",
  "contact-us": true,
  additionalDescription: "",
  gradientText: "NestJS App Development Services",
  fallback: "",
  style: {
    sourceStyle:
      "xxl:!left-[23%] xxl:!h-[650px] !left-[8%] lg:!h-[330px] sm:!h-[280px] xs:!h-[200px] xxl:!top-[-18%] xs:!top-[-5%] xs:!scale-[2.4] xxl:!translate-x-[0%] xxl:!ml-0 !ml-[18%] !scale-[1.5] lg:!scale-[1.5] xs:!ml-[30%] lg:!ml-[25%] xxl:!scale-[1.45] lg:!left-[2%]",
    gradientDivStyle:
      "xxl:!h-[630px] xxl:!left-[20%] xxl:!-translate-x-[0%] xxl:!min-w-screen !h-[650px] lg:!h-[380px] sm:!h-[340px] xs:!h-[220px] xs:!top-[-20%] xxl:!top-[-3%] !top-[-14%] xxl:!top-[-8%]",
  },
  aboutPage:
    "NestJS is a progressive framework used to build efficient, scalable NodeJS web applications. Crate robust, reliable platforms that stand the test of time with expert NestJS developers at Sookshum Labs.",
};

const NestJS_DevelopmentServices: React.FC<HomeProps> = ({ isBot }) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <WhoWeAre />
    <ChooseUs />
    <OurServices />
    <OurProcess />
    <Benefits />
    {!isBot && <Work />}
    {!isBot && <Testimonials />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"ecommerce-development-landing-page"}/> */}
    <LetsConnect />
  </div>
);

export default NestJS_DevelopmentServices;
