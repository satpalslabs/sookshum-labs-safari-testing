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
      "xxl:!left-[25%] xxl:scale-100 lg:!h-[330px]  xs:!h-[170px] xxl:top-[-40%] xxl:-translate-x-[25%] xxl:!h-[740px] lg:!h-[430px]  sm:!h-[380px] xs:!top-0 xs:!h-[400px] xs:!left-0 xs:!scale-[1]",
    gradientDivStyle:
      "xxl:!h-[530px] xxl:left-[50%]  !h-[500px] lg:!h-[380px] sm:!h-[340px] xs:!h-[220px] xs:!top-[-20%] !top-[-15%] xxl:!top-[-10%]",
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
