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
import OurServices from "./our-services";
import Cover from "./cover";
import WhyUs from "./why-us";
import WhyPayload from "./why-payload";
import Benefits from "./benefits";

const content_heroSection: HeroSection = {
  URL: "/services/headless-cms/payload-bg.png",
  "contact-us": true,
  fallback: "",
  image: true,
  buttonText: "Payload CMS",
  additionalDescription: "",
  gradientText:
    "<span class='hero-span'>Payload CMS</span> Development Services ",
  gradientTextStyle: "w-[90%] lg:w-[80%] xs:!w-full",
  style: {
    sourceStyle:
      "h-[688px] lg:h-[580px] sm:h-[500px] xs:h-[380px] xs:w-[600px] xs:translate-x-[-50%] xs:left-[50%] w-screen top-0  xxl:translate-y-[-30%] translate-y-[-15%] xs:translate-y-[-10%]",
    gradientDivStyle:
      "h-[688px] lg:h-[580px] sm:h-[500px] xs:h-[380px] w-screen top-0  xxl:translate-y-[-30%] xs:translate-y-[-10%] translate-y-[-15%]  bg-gradient-to-t from-black via-[#000000b9] to-black",
  },
  aboutPage:
    "Payload CMS is revolutionizing the way websites are built and managed. As experts in Payload CMS implementation, we help businesses create lightning-fast, secure,<br class='xxl:block hidden'/> and scalable websites that drive results.",
};

const Payload_CMS_DevelopmentServices: React.FC<HomeProps> = ({ isBot }) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <About />
    <Cover />
    <WhyUs />
    <OurServices />
    <WhyPayload />
    <Benefits />
    {!isBot && <Testimonials />}
    {!isBot && <Work />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"website-development-landing-page"} /> */}
    <LetsConnect />
    <GoTopButton />
  </div>
);

export default Payload_CMS_DevelopmentServices;
