import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import Services from "./services";
import Testimonials from "@components/basic-components/testimonials";
import ChooseUs from "./choose-us";
import Work from "./work";
import OurProcess from "./our-process";
import { HomeProps } from "@app/page";
import WhoWeAre from "./who-we-are";
import LetsConnect from "./need-project";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/landing-page/hero-background-image.webp",
  image: true,
  buttonText: "Shopify Development Company",
  "contact-us": true,
  additionalDescription: "",
  gradientText: "Shopify Development Service",
  fallback: "",
  style: {
    sourceStyle:
      "xxl:left-[50%] left-[8%] xxl:scale-[1.1] lg:!h-[330px] sm:!h-[280px] xs:!h-[170px] xxl:top-[-18%] xxl:-translate-x-[50%] left-[15%] lg:left-[2%] xs:-left-[4%]",
    gradientDivStyle:
      "xxl:!h-[430px] xxl:left-[50%] xxl:-translate-x-[35%] !h-[550px] lg:!h-[380px] sm:!h-[340px] xs:!h-[220px] xs:!top-[-20%] !top-[-15%] xxl:!top-[-8%]",
  },
  aboutPage:
    "Discover our comprehensive range of shopify solutions to transform your eCommerce store vision into reality with our shopify experts in USA.",
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
  </div>
);

export default Shopify_DevelopmentServices;
