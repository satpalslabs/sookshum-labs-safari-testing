import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import Services from "./services";
import Testimonials from "@components/basic-components/testimonials";
import ChooseUs from "./choose-us";
import Work from "@components/home/work";
import OurProcess from "./our-process";
import { HomeProps } from "@app/page";
import WhoWeAre from "./who-we-are";
import LetsConnect from "./need-project";
import GoTopButton from "@components/basic-components/go-to-top";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/e-commerce-development/shopify-development-services/bg-image.webp",
  image: true,
  buttonText: "Shopify Development Company",
  "contact-us": true,
  additionalDescription: "",
  gradientText: "Shopify Development Service",
  fallback: "",
  style: {
    sourceStyle:
      "scale-[1.0] xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[620px] h-[540px] sm:h-[390px] xs:h-[350px] lg:h-[311px]  xxl:bottom-[10%] bottom-[-1%] lg:bottom-[18%] sm:bottom-[10%] xs:bottom-[15%]  ",
    gradientDivStyle:
      "scale-[1.0] xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[620px] h-[540px] lg:h-[321px] sm:h-[380px] xs:h-[350px]  xxl:bottom-[10%] bottom-[-1%] lg:bottom-[16%]  sm:bottom-[10%]  xs:bottom-[15%] ",
  },
  aboutPage:
    "Expert Shopify Development Services to Build, Customize, and Optimize Your eCommerce Store for Maximum Growth and Success.",
};

const Shopify_DevelopmentServices: React.FC<HomeProps> = ({ isBot }) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <WhoWeAre />
    <ChooseUs />
    <Services />
    <OurProcess />
    {!isBot && <Work />}
    {!isBot && <Testimonials />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"ecommerce-development-landing-page"}/> */}
    <LetsConnect />
    <GoTopButton />
  </div>
);

export default Shopify_DevelopmentServices;
