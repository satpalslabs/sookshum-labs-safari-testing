import Testimonials from "@components/basic-components/testimonials";
import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
// import Faqs from "@components/services/reuseable-components/faqs";
import { HomeProps } from "@app/page";
import WhoWeAre from "./who-we-are";
import OurServices from "./our-services";
import OurProcess from "./our-process";
import Benefits from "./benefits";
import WhyUs from "./why-us";
import GoTopButton from "@components/basic-components/go-to-top";
import LetsConnect from "./need-project";
import Work from "./work";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/admin-development/bg-image.webp",
  fallback: "",
  "contact-us": true,
  image: true,
  buttonText: "Admin Development",
  additionalDescription: "",
  gradientText:
    "Build Beautiful & Flexible Admin Panels For Easy Backend Management",
  style: {
    sourceStyle:
      "xxl:left-[50%] w-screen xxl:h-[700px] h-[650px] lg:h-[500px] sm:h-[480px] xs:h-[470px] xxl:top-[-23%] top-[-32%] top-[-15%] xxl:-translate-x-[50%]  lg:top-[-65%] sm:top-[-50%] xs:top-[-30%] 2xs:top-[15%] xs:scale-[2] xs:-left-[4%]",
    gradientDivStyle:
      "xxl:h-[740px] w-screen h-[750px] lg:h-[480px] sm:h-[500px] xs:h-[480px] lg:top-[-50%]  top-[-25%] xxl:top-[-25%] ",
  },
  aboutPage: "",
};

const Admin_Development: React.FC<HomeProps> = ({ isBot }) => (
  <div className="relative">
    <Hero {...content_heroSection} />
    <WhoWeAre />
    <WhyUs />
    <OurServices />
    <OurProcess />
    <Benefits />
    {isBot && <Work />}
    {isBot && <Testimonials />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"website-development-landing-page"} /> */}
    <Work />
    <Testimonials />
    <LetsConnect />
    <GoTopButton />
  </div>
);

export default Admin_Development;
