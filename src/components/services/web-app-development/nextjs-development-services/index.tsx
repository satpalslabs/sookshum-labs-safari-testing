import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import Services from "./services";
import Testimonials from "@components/basic-components/testimonials";
import Work from "@components/home/work";
import { HomeProps } from "@app/page";
import WhoWeAre from "./who-we-are";
import LetsConnect from "./need-project";
import Benefits from "./benefits";
import ChooseUs from "./choose-us";
import OurProcess from "./our-process";
import GoTopButton from "@components/basic-components/go-to-top";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/admin-development/nextjs-development-services/bg-image.webp",
  image: true,
  buttonText: "Next.js Development",
  "contact-us": true,
  additionalDescription: "",
  gradientText: "<span class='hero-span'>Next.js</span> Development Services",
  fallback: "",
  style: {
    sourceStyle:
      "scale-[1.0] xs:scale-[1.2] xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[1050px] h-[840px] lg:h-[711px] sm:h-[490px] xs:h-[450px]  2xs:h-[400px]  xxl:bottom-[10%] bottom-[-1%] lg:bottom-[5%] sm:bottom-[10%] xs:bottom-[20%] 2xs:bottom-[30%] ",
    gradientDivStyle:
      "scale-[1.0] xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[780px] h-[840px] lg:h-[621px] sm:h-[490px] xs:h-[850px] 2xs:h-[520px] xxl:bottom-[10%] bottom-[-1%] lg:bottom-[4%]  sm:bottom-[10%]  xs:bottom-[-0%] 2xs:bottom-[18%] ",
  },
  aboutPage:
    "With Next.js application development, your website or eCommerce platform will be highly flexible, performant, and scalable. Our developers will build customizable and SEO-friendly Next.js websites, ensuring you receive the ideal end product to meet your needs!",
};

const NextJS_DevelopmentServices: React.FC<HomeProps> = ({ isBot }) => (
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

export default NextJS_DevelopmentServices;
