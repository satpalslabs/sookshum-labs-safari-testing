/**
 * This component contains the main section.
 */

import dynamic from "next/dynamic";
import { HomeProps } from "@app/page";
// import Loading from "@app/loading";

const Hero = dynamic(() => import("./hero"));
// const CoreServices = dynamic(() => import("./core-services"));
const OurServices = dynamic(() => import("./our-services"));
const DevelopmentProcess = dynamic(() => import("./our-development-process"));
const ChooseUs = dynamic(() => import("./why-choose-us"));
const Technologies = dynamic(() => import("./technologies"));
const IndustryExperience = dynamic(() => import("./industry-experience"));
const Testimonials = dynamic(() => import("../basic-components/testimonials"));
const Work = dynamic(() => import("./work"));
// const BlogPosts = dynamic(() => import("./blog-posts"));
const WorkTogether = dynamic(() => import("../basic-components/work-together"));

const Sections: React.FC<HomeProps> = (props) => (
  <main className="mt-14 xl:mt-[52px] bg-black lg:mt-0 h-full">
    <Hero />
    {/* <CoreServices /> */}
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
