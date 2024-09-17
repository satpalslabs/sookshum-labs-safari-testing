import React from "react";
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
  URL: "/services/website-development/landing-page/hero-background-image.png",
  image: true,
  buttonText: "Journey And Stories",
  "contact-us": false,
  additionalDescription: "",
  gradientText: "About us",
  style: {
    sourceStyle:
      "xxl:left-[50%] left-[8%] xxl:scale-[1.1] xxl:top-[-18%] xxl:-translate-x-[50%] left-[15%] lg:left-[2%] xs:-left-[4%]",
    gradientDivStyle: "xxl:!h-[430px] xxl:left-[50%] xxl:-translate-x-[35%]  !h-[450px] sm:!h-[300px] xs:!h-[150px] xs:!top-[-20%] !top-[-15%] xxl:!top-[-3%]",
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
    {/* <script
      dangerouslySetInnerHTML={{
        __html: `var $zoho = $zoho || {}; $zoho.salesiq = $zoho.salesiq || { mode: "async", widgetcode: "siq9569795c2af6dac0818cee990f36c0d731470acc86287e49524d79a290df1b08", values: {}, ready: function () { } }; var d = document; s = d.createElement("script"); s.type = "text/javascript"; s.id = "zsiqscript"; s.defer = true; s.src = "https://salesiq.zoho.com/widget"; t = d.getElementsByTagName("script")[0]; t.parentNode.insertBefore(s, t); d.write("<div id='zsiqwidget'></div>")`,
      }}
    /> */}
    {/* <SalesIQ /> */}
  </div>
);

export default AboutUs;
