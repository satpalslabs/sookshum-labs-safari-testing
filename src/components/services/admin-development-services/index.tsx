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
    "Build Beautiful & Flexible <span class='hero-span'>Admin Panels </span> For Easy Backend Management",
  style: {
    sourceStyle:
      "scale-1 w-[2040px] xxl:h-[800px]  h-[950px] xxl:top-0 translate-y-[-40%] left-[50%] lg:w-[1500px] translate-x-[-50%] sm:h-[560px] top-[50px] lg:h-[600px] md:h-[600px] lg:translate-y-[-50%] xs:w-[1450px] xs:translate-y-[-146px] xs:top-0 xs:h-[450px] xs:max-h-[800px] xs:object-cover xs:scale-1",
    gradientDivStyle:
      " sm:h-[560px] lg:h-[650px] top-0 w-screen top-0 mt-0 xxl:h-[760px] h-[800px] xxl:translate-y-[-181px] translate-y-[-20%] lg:translate-y-[-40%]   xs:translate-y-[-35%] xs:h-[530px] xs:max-h-[1800px]",
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
