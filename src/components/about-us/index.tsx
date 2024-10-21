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

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/landing-page/hero-background-image.webp",
  image: true,
  buttonText: "Journey And Stories",
  "contact-us": false,
  additionalDescription: "",
  gradientText: "About us",
  fallback: "",
  style: {
    sourceStyle:
      "xxl:left-[50%] xxl:h-[660px]  left-[8%] xxl:scale-[1.1] xxl:top-[-18%] xxl:-translate-x-[50%] left-[15%] lg:left-[2%] xs:-left-[4%]",
    gradientDivStyle:
      "xxl:!h-[560px] xxl:left-[50%] xxl:-translate-x-[35%]  !h-[550px] lg:!h-[450px] sm:!h-[350px] xs:!h-[240px] xs:!top-[-20%] !top-[-15%] xxl:!top-[-6%]",
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
  </div>
);

export default AboutUs;
