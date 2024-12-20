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
      "scale-1 w-[2040px] xxl:h-[800px]  h-[950px] xxl:top-0 translate-y-[-40%] left-[50%] lg:w-[1500px] translate-x-[-50%] sm:h-[560px] top-[50px] lg:h-[600px] md:h-[600px] lg:translate-y-[-50%] xs:w-[650px] xs:translate-y-[-40%] xs:h-[550px] xs:max-h-[800px] xs:object-cover xs:scale-1",
    gradientDivStyle:
      " sm:h-[560px] top-0  mt-0 xxl:h-[760px] h-[800px] xxl:translate-y-0 translate-y-[-20%]  xs:translate-y-[-5%] xs:h-[600px] xs:max-h-[1800px]",
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
