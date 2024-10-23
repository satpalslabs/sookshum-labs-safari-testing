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

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/website-development/wordpress-development-services/bg-image.png",
  fallback: "",
  "contact-us": true,
  image: true,
  buttonText: "Wordpress Development",
  additionalDescription: "",
  gradientText: "We Build & Migrate Fast, Secure & Modern WordPress Websites",
  style: {
    sourceStyle:
      "xxl:left-[50%] xxl:!h-[700px] left-[8%] xxl:scale-[1] lg:!h-[330px] sm:!h-[280px] xs:!h-[170px] xxl:top-[-21%] xxl:-translate-x-[50%] left-[15%] lg:left-[2%] xs:-left-[4%]",
    gradientDivStyle:
      "xxl:!h-[530px] xxl:left-[50%] xxl:-translate-x-[35%] !h-[550px] lg:!h-[380px] sm:!h-[340px] xs:!h-[220px] xs:!top-[-20%] !top-[-15%] xxl:!top-[-9%] !bg-gradient-to-t !from-black !via-[#151515a7] !to-black",
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
  </div>
);

export default WordPress_Development;
