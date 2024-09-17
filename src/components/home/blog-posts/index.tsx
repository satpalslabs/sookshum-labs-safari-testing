/**
 * This component contains blog posts section.
 */

import dynamic from "next/dynamic";

const Header = dynamic(() => import("./containers/header"));
const Slider = dynamic(() => import("./containers/slider"));

const BlogPosts = () => (
  <section className="sm:pb-2 md:pt-[70px] sm:pt-4 flex flex-col gap-[70px] md:gap-[60px] sm:gap-12 xs:gap-8 py-[60px] md:py-0 xs:py-0 xs:pt-12 items-center bg-black overflow-hidden max-w-[1920px] mx-auto">
    <Header />
    <Slider />
  </section>
);

export default BlogPosts;
