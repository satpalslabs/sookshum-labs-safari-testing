
import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import CoreServices from "@components/services/reuseable-components/core-services";
import Services from "./services";
import Testimonials from "@components/basic-components/testimonials";
import ChooseUs from "./choose-us";
import Work from "./work";
// import Faqs from "@components/services/reuseable-components/faqs";
import Technologies from "./technologies";
import LetsConnect from "@components/services/e-commerce/landing-page/need-project";
import OurProcess from "./our-process";
import { HomeProps } from "@app/page";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  fallback:"",
  "contact-us": true,
  URL: "/services/e-commerce-development/default-page/ecommerce-default-bg.webp",
  image: true,
  buttonText: "eCommerce Development",
  additionalDescription: "COMPLEX COMMERCE MADE SIMPLE",
  gradientText: "B2B & B2C eCommerce",
  style: {
    sourceStyle: "xxl:left-[50%] xxl:-translate-x-[50%]",
    gradientDivStyle: "xxl:left-[50%] xxl:-translate-x-[50%]",
  },
  aboutPage:
    "We transform your online presence using custom eCommerce solutions that drive sales, engage customers and fuel business growth.",
};

const DefaultEcommercePage: React.FC<HomeProps> = ({isBot}) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <CoreServices DataKey={"landing-page-services"} />
    <Services />
    <ChooseUs />
    <OurProcess />
    <Technologies />
    {!isBot && <Work />}
    {!isBot && <Testimonials />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"ecommerce-development-landing-page"}/> */}
    <LetsConnect />
    {/* <div className="w-full h-[740px] xs:h-[580px] md:h-[600px] lg:h-[600px] sm:h-[480px] xxl:h-[740px] z-10 absolute -top-[1.4%] lg:-top-[2%] md:-top-[1.9%] sm:-top-[2.5%] xs:-top-[1.8%] bg-gradient-to-t from-black via-lightBlack to-black "></div> */}
  </div>
);

export default DefaultEcommercePage;
