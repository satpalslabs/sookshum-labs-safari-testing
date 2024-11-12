
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
import OurProcess from "./our-process";
import { HomeProps } from "@app/page";
import LetsConnect from "./need-project";
import GoTopButton from "@components/basic-components/go-to-top";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  fallback:"",
  "contact-us": true,
  URL: "/services/e-commerce-development/landing-page/bg-image.png",
  image: true,
  buttonText: "eCommerce Development",
  additionalDescription: "COMPLEX COMMERCE MADE SIMPLE",
  gradientText: "B2B & B2C eCommerce",
  style: {
    sourceStyle: "xxl:!left-[50%] xxl:!scale-100 xxl:!h-[800px] xxl:!top-[-40%] !h-[680px] lg:!h-[580px] lg:!-top-[120px] sm:!top-[-30%] md:!h-[500px] md:!top-[-10%] !-top-[120px] xs:!top-[-15%] xs:!mt-0 xs:!h-[300px] xxl:-translate-x-[50%] xs:!scale-100",
    gradientDivStyle: "xxl:left-[50%] xxl:-translate-x-[50%] md:!h-[420px] lg:!h-[500px] sm:!h-[400px]  xs:!top-[-15%] xs:!h-[150px] 2x:!h-[100px]",
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
    <GoTopButton />
  </div>
);

export default DefaultEcommercePage;
