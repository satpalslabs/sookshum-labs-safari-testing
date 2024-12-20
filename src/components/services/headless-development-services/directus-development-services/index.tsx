import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
// import Faqs from "@components/services/reuseable-components/faqs";
import { HomeProps } from "@app/page";
import LetsConnect from "./need-project";
import Testimonials from "@components/basic-components/testimonials";
import Work from "@components/home/work";
import GoTopButton from "@components/basic-components/go-to-top";
import OurServices from "./our-services";
import Cover from "./cover";
import OurProcess from "./our-process";
import Benefits from "./benefits";
import WhyUS from "./why-us";

const content_heroSection: HeroSection = {
  URL: "/services/headless-cms/direct-us-bg.png",
  "contact-us": true,
  fallback: "",
  image: true,
  buttonText: "Directus CMS ",
  additionalDescription: "",
  gradientText:
    "<span class='hero-span'>Directus CMS</span> Development Services ",
  gradientTextStyle: "w-[90%] lg:w-[80%] xs:!w-full",
  style: {
    sourceStyle:
      "h-[548px] w-screen top-0 xxl:translate-y-[-15%] translate-y-[-0%]",
    gradientDivStyle:
      "h-[448px] top-[5%] sm:top-[6%]  xs:top-0  w-full from-black via-[#000000c2] to-black",
  },
  aboutPage:
    "Create a groundbreaking application for your users with our custom Directus Headless CMS development services. Whether you’re looking for API-powered slick apps or scalable solutions, our Directus team has it all in store for you. We can help you develop a minimum viable Directus app in as little as a week!",
};

const Direct_US_CMS_DevelopmentServices: React.FC<HomeProps> = ({ isBot }) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <Cover />
    <WhyUS />
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

export default Direct_US_CMS_DevelopmentServices;
