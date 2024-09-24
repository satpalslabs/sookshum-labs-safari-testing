/**
 * This component contains the main section.
 */

import dynamic from "next/dynamic";
import { HomeProps } from "@app/page";
import Loading from "@app/loading";

const Hero = dynamic(() => import("./hero"));
const CoreServices = dynamic(() => import("./core-services"), {
  ssr: false,
});
const OurServices = dynamic(() => import("./our-services"), {
  ssr: false,
});
const DevelopmentProcess = dynamic(() => import("./our-development-process"), {
  ssr: false,
});
const ChooseUs = dynamic(() => import("./why-choose-us"), {
  ssr: false,
});
const Technologies = dynamic(() => import("./technologies"), {
  ssr: false,
});
const IndustryExperience = dynamic(() => import("./industry-experience"), {
  ssr: false,
});
const Testimonials = dynamic(() => import("../basic-components/testimonials"), {
  ssr: false,
});
const Work = dynamic(() => import("./work"), {
  ssr: false,
});
// const BlogPosts = dynamic(() => import("./blog-posts"));
const WorkTogether = dynamic(() => import("../basic-components/work-together"));

const Sections: React.FC<HomeProps> = (props) => (
  <main className="mt-14 xl:mt-[52px] bg-black lg:mt-0 h-full">
    <Hero />
    <CoreServices />
    <OurServices />
    <DevelopmentProcess />
    <ChooseUs />
    <Technologies />
    <IndustryExperience />
    {!props.isBot && <Testimonials />}
    {!props.isBot && <Work />}
    {/* Temporary disabled */}
    {/* <BlogPosts /> */}
    <WorkTogether />
    <div className="bg-black xs:hidden top-0 absolute w-full -z-10 h-[150px]" />
  </main>
);

export default Sections;
