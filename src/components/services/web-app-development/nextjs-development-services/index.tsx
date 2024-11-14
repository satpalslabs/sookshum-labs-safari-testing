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
  gradientText: "Next.js Development Services",
  fallback: "",
  style: {
    sourceStyle:
      "xxl:!left-[20%] xxl:scale-[1] xxl:!h-[1050px] !h-[980px] lg:!h-[700px] sm:!h-[540px] xs:!h-[420px] xxl:!top-[-95%] xxl:!-translate-x-[20%] !-top-[70%] lg:!-top-[80%] xs:!scale-[1.2]  xs:!top-[-30%]",
    gradientDivStyle:
      "xxl:!h-[520px] xxl:left-[50%] !h-[550px] lg:!h-[440px] sm:!h-[340px] xs:!scale-[1.2] xs:!h-[420px]  xs:!top-[-30%] !top-[-15%] lg:!top-[-30%] sm:!top-[-40%] xxl:!top-[-10%] ",
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
