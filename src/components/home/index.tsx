/**
 * This component contains the main section.
 */

import dynamic from "next/dynamic";
import { HomeProps } from "@app/page";
import Loading from "@app/loading";

const Hero = dynamic(() => import("./hero"));
const CoreServices = dynamic(() => import("./core-services"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const OurServices = dynamic(() => import("./our-services"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const DevelopmentProcess = dynamic(() => import("./our-development-process"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const ChooseUs = dynamic(() => import("./why-choose-us"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const Technologies = dynamic(() => import("./technologies"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const IndustryExperience = dynamic(() => import("./industry-experience"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const Testimonials = dynamic(() => import("../basic-components/testimonials"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const Work = dynamic(() => import("./work"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
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
    <img
      alt=""
      src="/home/hero/dots.svg"
      className="absolute -top-[1.3%] sm:-top-[0.95%] xs:top-[-0.4%] xs:z-[99999] w-full max-w-[1920px] mx-auto"
    />
  </main>
);

export default Sections;
