import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import Testimonials from "@components/basic-components/testimonials";
import { HomeProps } from "@app/page";
import WhoWeAre from "./who-we-are";
import WhyUs from "./why-us";
import LetsConnect from "./need-project";
import OurProcess from "./our-process";
import Benefits from "./benefits";
import Technologies from "./technologies";
import Work from "./work";
import OurServices from "./our-services";
import GoTopButton from "@components/basic-components/go-to-top";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/mobile-app-devlopment/flutter-development-services/bg-image.webp",
  image: true,
  buttonText: "Flutter App Development",
  "contact-us": true,
  additionalDescription: "",
  gradientText:
    "<span class='hero-span'>Flutter</span> App Development Services",
  fallback: "",
  style: {
    sourceStyle:
      "scale-1 w-[2040px] xxl:h-[800px]  h-[950px] xxl:top-0 translate-y-[-40%] left-[50%] lg:w-[1500px] translate-x-[-50%] sm:h-[560px] top-[50px] lg:h-[600px] md:h-[600px] lg:translate-y-[-50%] xs:w-[650px] xs:translate-y-[-146px] xs:top-0 xs:h-[650px] xs:max-h-[800px] xs:object-cover xs:scale-1",
    gradientDivStyle:
      " sm:h-[560px] lg:h-[650px] top-0 w-screen top-0 mt-0 xxl:h-[760px] h-[800px] xxl:translate-y-[-181px] translate-y-[-20%] lg:translate-y-[-40%]   xs:translate-y-[-35%] xs:h-[530px] xs:max-h-[1800px]",
  },
  aboutPage:
    "We deliver high-quality Flutter apps quickly and within budget. With extensive experience in Flutter development, we are among the pioneers in the field.",
};

const Flutter_DevelopmentServices: React.FC<HomeProps> = ({ isBot }) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <WhoWeAre />
    <WhyUs />
    <OurServices />
    <Technologies />
    <OurProcess />
    <Benefits />
    {isBot && <Work />}
    {isBot && <Testimonials />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"ecommerce-development-landing-page"}/> */}
    <Testimonials />
    <Work />
    <LetsConnect />
    <GoTopButton />
  </div>
);

export default Flutter_DevelopmentServices;
