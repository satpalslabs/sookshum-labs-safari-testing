import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import WhoWeAre from "./who-we-are";
import WhereWeAre from "./where-shookshum-labs-stand";
import WhatWeBuild from "./what-we-build";
import OurCulture from "./our-culture";
import InnovationConcepts from "./innovation-concepts";
import OurValues from "./our-values";
import PredictableResults from "./predictable-results";
import BottomSection from "./get-in-touch-section";
import GoTopButton from "@components/basic-components/go-to-top";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/about-us/bg-image.png",
  image: true,
  buttonText: "Journey And Stories",
  "contact-us": false,
  additionalDescription: "",
  gradientText: "About us",
  fallback: "",
  style: {
    sourceStyle:
      "xxl:left-[50%] xxl:!scale-100 xxl:!h-[860px] !h-[760px] !top-[-64%] lg:!h-[560px] sm:!h-[460px] xs:!h-[210px] lg:!top-[-64%] xs:!top-[-28%]  xxl:!top-[-84%] xxl:-translate-x-[50%] xs:!-left-[24%] xs:!scale-[2]",
    gradientDivStyle:
      "xxl:!h-[550px] !h-[500px] lg:!h-[450px] sm:!h-[350px] xs:!h-[150px] xs:!top-[-20%] lg:!top-[-40%] !top-[-15%] xxl:!top-[-15%]",
  },
  aboutPage:
    "We are your trusted technology partner in crafting exceptional digital experiences.",
};
const AboutUs: React.FC = () => (
  <div className="">
    <div className="h-[480px] sm:h-[290px] xs:h-[220px] lg:h-[411px]">
      <Hero {...content_heroSection} />
    </div>
    <WhoWeAre />
    <WhereWeAre />
    <WhatWeBuild />
    <OurCulture />
    <InnovationConcepts />
    <OurValues />
    <PredictableResults />
    <BottomSection />
    <GoTopButton />
  </div>
);

export default AboutUs;
