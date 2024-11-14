import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import Services from "./services";
import Testimonials from "@components/basic-components/testimonials";
import ChooseUs from "./choose-us";
import Work from "@components/home/work";
// import Faqs from "@components/services/reuseable-components/faqs";
import IndustryExperience from "./industry-experience";
// import LetsConnect from "@components/services/e-commerce/landing-page/need-project";
import OurProcess from "./our-process";
import { HomeProps } from "@app/page";
import WhoWeAre from "./who-we-are";
import LetsConnect from "./need-project";
import GoTopButton from "@components/basic-components/go-to-top";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/e-commerce-development/magento-development-services/bg-image.webp",
  image: true,
  buttonText: "Magento Development Company",
  "contact-us": true,
  additionalDescription: "",
  gradientText: "We help <br/> eCommerce evolve",
  fallback: "",
  style: {
    sourceStyle:
      "xxl:left-[30%] xxl:!h-[1080px] !h-[880px] !scale-[0.8] xxl:!scale-[0.7] sm:!scale-[1.1] xs:!scale-[2] lg:!h-[630px] sm:!h-[500px] xs:!h-auto xs:w-full xs:!top-[-10%] xxl:!top-[-60%] lg:!top-[-80%] !top-[-40%] xxl:-translate-x-[30%] sm:!top-[-60%] ",
    gradientDivStyle:
      "xxl:!h-[530px] xxl:left-[50%] xxl:-translate-x-[35%] !h-[550px] lg:!h-[380px] lg:!top-[-40%] sm:!h-[400px] xs:!h-[350px] xs:!top-[-30%] !top-[-15%] xxl:!top-[-8%]",
  },
  aboutPage: "",
};

const Shopify_DevelopmentServices: React.FC<HomeProps> = ({ isBot }) => (
  <div className="relative ">
    <Hero {...content_heroSection} />
    <WhoWeAre />
    <ChooseUs />
    <IndustryExperience />
    <Services />
    <OurProcess />
    {!isBot && <Work />}
    {!isBot && <Testimonials />}
    <LetsConnect />
    <GoTopButton />
  </div>
);

export default Shopify_DevelopmentServices;
