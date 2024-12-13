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
  gradientText: "We help <br/> <span class='hero-span'>eCommerce evolve</span>",
  fallback: "",
  style: {
    sourceStyle:
      "scale-[0.55] sm:scale-[0.9] xs:scale-[1.4] xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[1250px] h-[840px] sm:h-[390px] xs:h-[350px] lg:h-[611px]  xxl:bottom-[-60%] bottom-[-20%] lg:bottom-[-18%] sm:bottom-[25%] xs:bottom-[5%]  ",
    gradientDivStyle:
      "scale-[1.0]  xs:scale-[1.4] xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[700px] h-[540px] lg:h-[351px] sm:h-[350px] xs:h-[350px]  xxl:bottom-[-10%] bottom-[-1%] lg:bottom-[22%]  sm:bottom-[25%]  xs:bottom-[5%] ",
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
