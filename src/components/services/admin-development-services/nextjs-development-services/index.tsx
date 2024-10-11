import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import Services from "./services";
import Testimonials from "@components/basic-components/testimonials";
import Work from "./work";
import { HomeProps } from "@app/page";
import WhoWeAre from "./who-we-are";
import LetsConnect from "./need-project";
import Benefits from "./benefits";
import ChooseUs from "./choose-us";
import OurProcess from "./our-process";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/landing-page/hero-background-image.webp",
  image: true,
  buttonText: "Next.js Development",
  "contact-us": true,
  additionalDescription: "",
  gradientText: "Next.js Development Services",
  fallback: "",
  style: {
    sourceStyle:
      "xxl:left-[50%] left-[8%] xxl:scale-[1.1] lg:!h-[330px] sm:!h-[280px] xs:!h-[170px] xxl:top-[-18%] xxl:-translate-x-[50%] left-[15%] lg:left-[2%] xs:-left-[4%]",
    gradientDivStyle:
      "xxl:!h-[430px] xxl:left-[50%] xxl:-translate-x-[35%] !h-[550px] lg:!h-[380px] sm:!h-[340px] xs:!h-[220px] xs:!top-[-20%] !top-[-15%] xxl:!top-[-8%]",
  },
  aboutPage:
    "With Next.js application development, your website or eCommerce will become ultimately flexible, performant, and scalable. Our developers will create Next.js websites that are at the same time customizable and SEO-friendly so that you’ll benefit from the perfect end product you need!",
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
  </div>
);

export default NextJS_DevelopmentServices;
