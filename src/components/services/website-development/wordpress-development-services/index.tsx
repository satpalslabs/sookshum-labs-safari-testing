import Testimonials from "@components/basic-components/testimonials";
import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
// import Faqs from "@components/services/reuseable-components/faqs";
import { HomeProps } from "@app/page";
import WhoWeAre from "./who-we-are";
import OurProcess from "./our-process";
import Discover from "./discover";
import Why_us from "./why-us";
import OurServices from "./our-services";
import LetsConnect from "./need-project";
import Work from "./work";
import GoTopButton from "@components/basic-components/go-to-top";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/website-development/wordpress-development-services/bg-image.webp",
  fallback: "",
  "contact-us": true,
  image: true,
  buttonText: "Wordpress Development",
  additionalDescription: "",
  gradientText:
    "Elevate Your Online Presence with Expert <span class='hero-span'>WordPress</span> Development",
  style: {
    sourceStyle:
      "xxl:left-[50%] w-screen xxl:scale-100 xxl:h-[800px] xxl:scale-[1] lg:h-[530px] sm:h-[530px] xs:h-[170px] xxl:top-[-41%] h-[680px] xs:scale-[2] top-[-21%] lg:top-[-41%] sm:top-[-31%] xs:top-[-15%] xxl:-translate-x-[50%]",
    gradientDivStyle:
      "xxl:h-[730px] w-screen h-[850px] lg:h-[560px] sm:h-[520px] xs:h-[220px] xs:scale-[2]  xs:top-[-20%] lg:top-[-45%] sm:top-[-35%] top-[-25%] xxl:top-[-30%] ",
  },
  aboutPage: "",
};

const WordPress_Development: React.FC<HomeProps> = ({ isBot }) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <WhoWeAre />
    <Discover />
    <Why_us />
    <OurServices />
    <OurProcess />
    {!isBot && <Work />}
    {!isBot && <Testimonials />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"website-development-landing-page"} /> */}
    <LetsConnect />
    <GoTopButton />
  </div>
);

export default WordPress_Development;
