import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import Testimonials from "@components/basic-components/testimonials";
import { HomeProps } from "@app/page";
import WhoWeAre from "./who-we-are";
import ChooseUs from "./choose-us";
import OurServices from "./our-services";
import OurProcess from "./our-process";
import LetsConnect from "./need-project";
import Work from "@components/home/work";
import Benefits from "./benefits";
import GoTopButton from "@components/basic-components/go-to-top";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/web-app-development/nestjs-development-services/bg-image.webp",
  image: true,
  buttonText: "NestJS App Development",
  "contact-us": true,
  additionalDescription: "",
  gradientText: "NestJS App Development Services",
  fallback: "",
  style: {
    sourceStyle:
      "xxl:!h-[650px] lg:!h-[330px] sm:!h-[280px] xs:!h-[200px] xxl:!top-[-18%] xs:!scale-[2.4]  !scale-[1.5] lg:!scale-[1.5] xxl:!scale-[1.45] xs:!h-[240px] xs:!top-[-15%] xs:!scale-[2]",
    gradientDivStyle:
      "xxl:!h-[630px] xxl:!left-[20%] xxl:!-translate-x-[0%] xxl:!min-w-screen !h-[650px] lg:!h-[380px] sm:!h-[340px] xs:!h-[220px] xs:!top-[-20%] xxl:!top-[-3%] !top-[-14%] xxl:!top-[-8%]",
  },
  aboutPage:
    "NestJS is an advanced framework designed for developing efficient and scalable web applications using Node.js. At Sookshum Labs, our expert NestJS developers create robust and reliable platforms that endure the test of time.",
};

const NestJs_DevelopmentServices: React.FC<HomeProps> = ({ isBot }) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <WhoWeAre />
    <ChooseUs />
    <OurServices />
    <OurProcess />
    <Benefits />
    {!isBot && <Work />}
    {!isBot && <Testimonials />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"ecommerce-development-landing-page"}/> */}
    <LetsConnect />
    <GoTopButton />

  </div>
);

export default NestJs_DevelopmentServices;
