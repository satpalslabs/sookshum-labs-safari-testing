/**
 * This component contains the main section.
 */

/**
 * This component contains the main section.
 */

import Hero from "@components/home/hero";
import type React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { HomeProps } from "@app/page";

const CoreServices = dynamic(() => import("./core-services"));
const OurServices = dynamic(() => import("./our-services"));
const DevelopmentProcess = dynamic(() => import("./our-development-process"));
const ChooseUs = dynamic(() => import("./why-choose-us"));
const Technologies = dynamic(() => import("./technologies"));
const IndustryExperience = dynamic(() => import("./industry-experience"));
const Testimonials = dynamic(() => import("../basic-components/testimonials"));
const Work = dynamic(() => import("./work"));
const BlogPosts = dynamic(() => import("./blog-posts"));
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
    <Image
      alt=""
      width="2200"
      height="2200"
      src="/home/hero/dots.svg"
      className="absolute -top-[1.3%] sm:-top-[0.95%] xs:top-[-0.4%] xs:z-[99999] w-full max-w-[1920px] mx-auto"
    />
  </main>
);

export default Sections;
