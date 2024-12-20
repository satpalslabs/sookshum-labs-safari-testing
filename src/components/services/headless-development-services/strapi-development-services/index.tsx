import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
// import Faqs from "@components/services/reuseable-components/faqs";
import { HomeProps } from "@app/page";
import About from "./about";
import LetsConnect from "./need-project";
import Testimonials from "@components/basic-components/testimonials";
import Work from "@components/home/work";
import GoTopButton from "@components/basic-components/go-to-top";
import WhyUs from "./why-us";
import OurServices from "./our-services";
import Benefits from "./benefits";
import OurProcess from "./our-process";

const content_heroSection: HeroSection = {
  URL: "/services/headless-cms/bg-strapi.png",
  "contact-us": true,
  fallback: "",
  image: true,
  buttonText: "Strapi CMS",
  additionalDescription: "",
  gradientText:
    "<span class='hero-span'>Strapi Headless CMS</span> Development Services ",
  gradientTextStyle: "w-[90%] lg:w-[80%] xs:!w-full",
  style: {
    sourceStyle: "h-[488px] w-screen top-0 ",
    gradientDivStyle: "h-[498px] top-[7%] sm:top-[6%] xs:top-0  w-full",
  },
  aboutPage:
    "Seamlessly manage and distribute your content across platforms with our Strapi development services. Our team can develop customized solutions using Strapi that seamlessly integrate with your systems and help you engage your audience. ",
};

const Strapi_DevelopmentServices: React.FC<HomeProps> = ({ isBot }) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <About />
    <WhyUs />
    <OurServices />
    <OurProcess />
    <Benefits />
    {!isBot && <Testimonials />}
    {!isBot && <Work />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"website-development-landing-page"} /> */}
    <LetsConnect />
    <GoTopButton />
  </div>
);

export default Strapi_DevelopmentServices;
