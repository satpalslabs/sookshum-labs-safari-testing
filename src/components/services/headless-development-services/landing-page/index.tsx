import Testimonials from "@components/basic-components/testimonials";
import Hero, {
  HeroSection,
} from "@components/services/reuseable-components/hero";
import { HomeProps } from "@app/page";
import GoTopButton from "@components/basic-components/go-to-top";
import WhyUs from "./why-us";
import Work from "@components/home/work";
import OurServices from "./our-services";
import OurProcess from "./our-process";
import Benefits from "./benefits";
import LetsConnect from "./need-project";
import Cover from "./cover";

const content_heroSection: HeroSection = {
  gradientTextStyle: "",
  URL: "/services/headless-cms/bg-image.png",
  fallback: "",
  "contact-us": true,
  image: true,
  buttonText: "Headless CMS",
  additionalDescription: "",
  gradientText:
    "<span class='hero-span'>Headless CMS</span> Development <br class='hidden xxl:block'/> Services",
  style: {
    sourceStyle:
      "scale-1 w-[2040px] xxl:h-[800px]  h-[950px] xxl:top-0 translate-y-[-40%] left-[50%] lg:w-[1500px] translate-x-[-50%] sm:h-[560px] top-[50px] lg:h-[600px] md:h-[600px] lg:translate-y-[-50%] xs:w-[1450px] xs:translate-y-[-146px] xs:top-0 xs:h-[450px] xs:max-h-[800px] xs:object-cover xs:scale-1",
    gradientDivStyle:
      " sm:h-[560px] lg:h-[650px] top-0 w-screen top-0 mt-0 xxl:h-[760px] h-[800px] xxl:translate-y-[-181px] translate-y-[-20%] lg:translate-y-[-40%]   xs:translate-y-[-35%] xs:h-[530px] xs:max-h-[1800px]",
  },
  aboutPage: "",
};

function HeadlessCMSDevelopmentComponent({ isBot }: HomeProps) {
  return (
    <div className="relative ">
      <Hero {...content_heroSection} /> <Cover />
      <WhyUs />
      <OurServices />
      <OurProcess />
      <Benefits />
      {!isBot && <Testimonials />}
      <Work />
      <LetsConnect />
      <GoTopButton />
    </div>
  );
}

export default HeadlessCMSDevelopmentComponent;
