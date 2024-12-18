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
  fallback: "",
  "contact-us": true,
  URL: "/services/e-commerce-development/landing-page/bg-image.webp",
  image: true,
  buttonText: "eCommerce Development",
  additionalDescription: "COMPLEX COMMERCE MADE SIMPLE",
  gradientText: "B2B & B2C <span class='hero-span'>eCommerce</span> ",
  style: {
    sourceStyle:
      "scale-[1.0] xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[620px] h-[540px] sm:h-[390px] xs:h-[350px] lg:h-[311px]  xxl:bottom-[10%] bottom-[-1%] lg:bottom-[18%] sm:bottom-[25%] xs:bottom-[15%]  ",
    gradientDivStyle:
      "scale-[1.0] xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[620px] h-[540px] lg:h-[321px] sm:h-[350px] xs:h-[350px]  xxl:bottom-[10%] bottom-[-1%] lg:bottom-[16%]  sm:bottom-[25%]  xs:bottom-[15%] ",
  },
  aboutPage:
    "We transform your online presence using custom eCommerce solutions that drive sales, engage customers and fuel business growth.",
};

const DefaultEcommercePage: React.FC<HomeProps> = ({ isBot }) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <CoreServices /> <Services />
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
