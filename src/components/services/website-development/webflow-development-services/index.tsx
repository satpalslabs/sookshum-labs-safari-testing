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
import GoTopButton from "@components/basic-components/go-to-top";

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
      "xxl:left-[50%] w-screen xxl:h-[700px] h-[500px] xxl:scale-[1] lg:h-[330px] sm:h-[280px] xs:h-[170px] xxl:top-[-21%] top-[-25%] xxl:-translate-x-[50%] xs:-left-[25%] xs:scale-[2.9]",
    gradientDivStyle:
      "xxl:h-[780px] xs:scale-[2] w-screen h-[550px] lg:h-[380px] sm:h-[340px] xs:h-[220px] xs:top-[-20%] top-[-25%] xxl:top-[-30%] ",
  },
  aboutPage:
    "We excel in creating pixel-perfect, fully responsive Webflow websites equipped with all the essential functions and integrations.",
};

const Webflow_Development: React.FC<HomeProps> = ({ isBot }) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <WhoWeAre />
    <WhyUs />
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

export default Webflow_Development;
