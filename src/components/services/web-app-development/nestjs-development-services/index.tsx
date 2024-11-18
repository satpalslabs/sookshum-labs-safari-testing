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
import Work from "@components/home/work";
import Benefits from "./benefits";
import GoTopButton from "@components/basic-components/go-to-top";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/web-app-development/nestjs-development-services/bg-image.webp",
  image: true,
  buttonText: "NestJS App Development",
  "contact-us": true,
  additionalDescription: "",
  gradientText: "NestJS App Development Services",
  fallback: "",
  style: {
    sourceStyle:
      "scale-[1.0] xs:scale-[1.4] xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[620px] h-[540px] lg:h-[411px] sm:h-[490px] xs:h-[450px] 2xs:scale-[2] xxl:bottom-[10%] bottom-[-1%] lg:bottom-[5%] sm:bottom-[10%] xs:bottom-[-0%] 2xs:bottom-[-22%] ",
    gradientDivStyle:
      "scale-[1.0] xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[620px] h-[540px] lg:h-[421px] sm:h-[490px] xs:h-[810px] 2xs:h-[580px]   xxl:bottom-[10%] bottom-[-1%] lg:bottom-[4%]  sm:bottom-[10%]  xs:bottom-[-20%] 2xs:bottom-[0%] ",
  },
  aboutPage:
    "NestJS is an advanced framework designed for developing efficient and scalable web applications using Node.js. At Sookshum Labs, our expert NestJS developers create robust and reliable platforms that endure the test of time.",
};

const NestJs_DevelopmentServices: React.FC<HomeProps> = ({ isBot }) => (
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
    <GoTopButton />
  </div>
);

export default NestJs_DevelopmentServices;
