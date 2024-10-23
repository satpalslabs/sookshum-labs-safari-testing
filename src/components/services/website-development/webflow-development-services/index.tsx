import Testimonials from "@components/basic-components/testimonials";
import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
// import Faqs from "@components/services/reuseable-components/faqs";
import { HomeProps } from "@app/page";
import WhoWeAre from "./who-we-are";
import WhyUs from "./why-us";
import OurProcess from "./our-process";
import OurServices from "./our-services";
import Work from "./work";
import LetsConnect from "./need-project";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/website-development/webflow-development-services/bg-image.png",
  fallback: "",
  "contact-us": true,
  image: true,
  buttonText: "Webflow Development",
  additionalDescription: "",
  gradientText: "Fast And High-Performing Webflow Websites",
  style: {
    sourceStyle:
      "xxl:left-[50%] xxl:!h-[700px] left-[8%] xxl:scale-[1] lg:!h-[330px] sm:!h-[280px] xs:!h-[170px] xxl:top-[-21%] xxl:-translate-x-[50%] left-[15%] lg:left-[2%] xs:-left-[25%] xs:!scale-[2.9]",
    gradientDivStyle:
      "xxl:!h-[530px] xxl:left-[50%] xxl:-translate-x-[35%] !h-[550px] lg:!h-[380px] sm:!h-[340px] xs:!h-[220px] xs:!top-[-20%] !top-[-15%] xxl:!top-[-9%] ",
  },
  aboutPage:
    "As a certified Webflow partner, we’re experts in making that pixel-perfect and fully responsive website with all the necessary functions and integrations.",
};

const Webflow_Development: React.FC<HomeProps> = ({ isBot }) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <WhoWeAre />
    <WhyUs />
    <OurProcess />
    <OurServices />
    {!isBot && <Work />}
    {!isBot && <Testimonials />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"website-development-landing-page"} /> */}
    <LetsConnect />
  </div>
);

export default Webflow_Development;
