import Services from "./services";
import Testimonials from "@components/basic-components/testimonials";
import ChooseUs from "./why-us";
import Work from "./work";
import Technologies from "./technologies";
import OurProcess from "./our-process";
import IndustryExperience from "./industry-experience";
import LetsConnect from "./lets-connect";
import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import CoreServices from "@components/services/reuseable-components/core-services";
// import Faqs from "@components/services/reuseable-components/faqs";
import { HomeProps } from "@app/page";
import GoTopButton from "@components/basic-components/go-to-top";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/website-development/landing-page/website-bg.webm",
  fallback: "/services/website-development/landing-page/fallback.webp",
  "contact-us": true,
  image: false,
  buttonText: "Website Development",
  additionalDescription: "",
  gradientText:
    "Innovative <span class='hero-span'>Web Solutions</span> For The Modern Age",
  style: {
    sourceStyle:
      "xxl:scale-[1.45] scale-[1.3] h-[550px] xxl:h-[580px] lg:scale-[1.35] lg:h-[380px] md:h-[400px] sm:h-[380px] xs:h-[140px] xs:scale-[3.8] 2xs:scale-[2.9] 2xs:h-[180px] overflow-hidden  -top-[13%] xxl:-top-[17%] left-[15%] lg:left-[2%] lg:-top-[28%] xs:-left-[4%] xs:-top-[10%]",
    gradientDivStyle:
      " xxl:-top-[29%]  xxl:h-[800px] lg:-mt-[8%] sm:-mt-[12%] xs:-mt-[10%] lg:h-[550px] sm:h-[560px] 2xs:h-[500px] xs:h-[550px]",
  },
  aboutPage: "",
};

const LandingPageWebSiteDevelopment: React.FC<HomeProps> = ({ isBot }) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <CoreServices /> <Services />
    <ChooseUs />
    <OurProcess />
    <IndustryExperience />
    <Technologies />
    {isBot && <Work />}
    {isBot && <Testimonials />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"website-development-landing-page"} /> */}
    <LetsConnect />
    <GoTopButton />
  </div>
);

export default LandingPageWebSiteDevelopment;
