/**
 * This component contains each slider card.
 */

import dynamic from "next/dynamic";
import { blogType } from ".";
import Image from "next/image";
const TextContainer = dynamic(() => import("./text-container"));

function BlogPostCard({
  blogPost,
  index,
}: {
  blogPost: blogType;
  index: number;
}) {
  return (
    <div
      className={`bg-innerContainer rounded-[32px] w-[602px] xxl:w-[650px] lg:w-[430px] sm:w-[400px] p-4 sm:p-3 xs:p-2 xs:w-[274px] lg:p-[11px] shadow-buttonInset sm:col-auto z-0`}
    >
      <div
        className={` flex rounded-[32px] relative overflow-hidden max-w-full h-full lg:rounded-[26px] ${
          blogPost.type == "cover"
            ? "xxl:h-[740px] md:h-[500px] sm:h-[476px] xs:h-[343px]"
            : index == 1
            ? "xxl:h-[345px] xl:h-[335px] lg:h-[234px] sm:h-[222px] xs:h-[157px] !bg-[#111717]"
            : "xxl:h-[345px] xl:h-[335px] lg:h-[234px] sm:h-[222px] xs:h-[157px] bg-customYellow"
        }`}
      >
        <Image
          src={blogPost.image}
          height={800}
          width={800}
          alt=""
          className={` ${
            blogPost.type == "cover"
              ? "w-full h-full object-cover"
              : `object-contain  left-0 absolute ${
                  index == 1
                    ? "-bottom-2 h-[242px] w-[323px] lg:w-[222px] lg:h-[166px] xs:h-[114px] xs:w-[152px]"
                    : "top-0 h-[275px] w-[299px] lg:w-[205px] lg:h-[190px] sm:w-[205px] sm:h-[189px] xs:w-[141px] xs:h-[129px]"
                }`
          }`}
          blurDataURL="URL"
          placeholder="blur"
        />
        {blogPost.type == "cover" && (
          <div className="bg-gradient-to-b from-[#00000000] to-[#1E1E1E] h-[162px] absolute bottom-0 w-full rounded-b-2xl z-0"></div>
        )}
        <TextContainer item={blogPost} index={index} />
      </div>
    </div>
  );
}

export default BlogPostCard;
