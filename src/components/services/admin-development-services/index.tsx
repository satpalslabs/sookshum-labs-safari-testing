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
      "xxl:!left-[50%] xxl:!h-[700px] !h-[600px] !left-[0%] xxl:scale-[1] lg:!h-[330px] sm:!h-[280px] xs:!h-[170px] xxl:!top-[-23%] !top-[-32%] !top-[-25%] xxl:-translate-x-[50%] lg:left-[2%] xs:-left-[4%]",
    gradientDivStyle:
      "xxl:!h-[530px] xxl:left-[50%] xxl:-translate-x-[35%] !h-[550px] lg:!h-[330px] sm:!h-[300px] xs:!h-[220px] lg:!top-[-26%] !top-[-15%] xxl:!top-[-9%] !bg-gradient-to-t !from-black !via-[#151515a7] !to-transparent",
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
    {!isBot && <Work />}
    {!isBot && <Testimonials />}
    {/* Temporary disable */}
    {/* <Faqs DataKey={"website-development-landing-page"} /> */}
    <LetsConnect />
    <GoTopButton />
  </div>
);

export default Admin_Development;
