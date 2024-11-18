import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import Services from "./services";
import Testimonials from "@components/basic-components/testimonials";
import Work from "@components/home/work";
import { HomeProps } from "@app/page";
import WhoWeAre from "./who-we-are";
import Benefits from "./benefits";
import ChooseUs from "./choose-us";
import OurProcess from "./our-process";
import LetsConnect from "./need-project";
import GoTopButton from "@components/basic-components/go-to-top";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/web-app-development/laravel-development-services/bg-image.webp",
  image: true,
  buttonText: "Laravel Development",
  "contact-us": true,
  additionalDescription: "",
  gradientText:
    "Take Your Product from Vision to Launch with Expert Laravel developers",
  fallback: "",
  style: {
    sourceStyle:
      "scale-[1.0] w-screen xs:scale-[1.4] xxl:left-[60%] xxl:-translate-x-[60%] w-screen xxl:h-[620px] h-[540px] lg:h-[451px] sm:h-[490px] xs:h-[450px] 2xs:scale-[2] xxl:bottom-[15%] bottom-[20%] lg:bottom-[5%] sm:bottom-[10%] xs:bottom-[-0%] 2xs:bottom-[-20%] ",
    gradientDivStyle:
      "scale-[1.0] w-screen xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[620px] h-[540px] lg:h-[461px] sm:h-[490px] xs:h-[510px] 2xs:h-[590px]   xxl:bottom-[15%] bottom-[20%] lg:bottom-[4%]  sm:bottom-[10%]  xs:bottom-[10%] 2xs:bottom-[0%] ",
  },
  aboutPage:
    "We’re more than just a development team – we bring the strategy and expertise to successfully launch your product.",
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
    <GoTopButton />

  </div>
);

export default Laravel_DevelopmentServices;
