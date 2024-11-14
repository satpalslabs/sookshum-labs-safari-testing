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
  gradientText: "Flutter App Development Services",
  fallback: "",
  style: {
    sourceStyle:
      "scale-100 xs:scale-[2] xxl:left-[50%] xxl:-translate-x-[50%] xxl:h-[850px] h-[640px] sm:h-[390px]  xs:h-[280px] 2xs:h-[350px] lg:h-[580px] w-screen  bottom-[0%] lg:bottom-[8%] sm:bottom-[25%] xs:top-[-15%]  ",
    gradientDivStyle:
      "scale-[1.0]  xs:scale-[2] xxl:left-[50%] xxl:-translate-x-[50%] w-screen xxl:h-[840px] h-[660px] lg:h-[581px] sm:h-[390px] xs:h-[280px] 2xs:h-[320px] xxl:bottom-[-10%] bottom-[-1%] lg:bottom-[8%]  sm:bottom-[25%]  xs:top-[-15%] ",
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
    <LetsConnect />
    <GoTopButton />
  </div>
);

export default Flutter_DevelopmentServices;
