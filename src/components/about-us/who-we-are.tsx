"use client";
import DarkButton from "@components/basic-components/button";
import H2 from "@components/basic-components/headings/H2";
import H3 from "@components/basic-components/headings/H3";
import OuterComponent from "@components/basic-components/outer-component";
import { useInView } from "@lib/use-in-view";
import Image from "next/image";
import { useRef } from "react";

const WhoWeAre: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <OuterComponent>
      <div
        id="who-we-are"
        ref={ref}
        className={`flex flex-col gap-5 lg:gap-[40px] sm:gap-[35px] xs:gap-3 ${
          isInView ? "grayscale-0" : "grayscale"
        }`}
      >
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-[51px] lg:gap-[30px] sm:gap-5 grid-rows-1 justify-between">
          <div className="flex flex-col gap-6 lg:gap-[10px]">
            <DarkButton text="Who Are Sookshum Labs" style="" />
            <H2>
              <div className="!font-[600]">Sookshum Labs</div>
            </H2>
            <H3
              style="!text-white !tracking-tight !leading-[1.4]"
              text="Founded in 2016, our journey began with a small but passionate team dedicated to building exceptional software solutions. From our early days, we’ve partnered with clients who continue to work with us, growing together over the years."
            />
          </div>
          <div className="flex items-center justify-end">
            <Image
              width="2200"
              height="2200"
              alt="image"
              src="/about-us/who-we-are/1.webp"
              className=" w-[647px] sm:w-full h-auto object-cover rounded-[32px]"
              blurDataURL="URL"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </OuterComponent>
  );
};

export default WhoWeAre;
