"use client";
import DarkButton from "@components/basic-components/button";
import H2 from "@components/basic-components/headings/H2";
import H3 from "@components/basic-components/headings/H3";
import { useInView } from "@lib/use-in-view";
import Image from "next/image";
import  { useRef } from "react";

const WhoWeAre: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      className={`px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px] flex flex-col gap-5 lg:gap-[40px] sm:gap-[35px] xs:gap-3 bg-black overflow-hidden max-w-[1920px] mx-auto ${
        isInView ? "grayscale-0" : "grayscale"
      }`}
    >
      <div className="grid grid-cols-2 xs:grid-cols-1 gap-[51px] lg:gap-[30px] xs:gap-3 grid-rows-1 ">
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
        <div className="flex items-end">
          <Image
            width="2200"
            height="2200"
            alt=""
            src="/about-us/who-we-are/founders.png"
            className="xxl:h-[402px] h-[452px] lg:h-[354px] sm:h-[291px]  xs:h-[219px] object-cover rounded-[32px]"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 xs:gap-3 ">
        <Image
          width="2200"
          height="2200"
          alt=""
          src="/about-us/who-we-are/1.png"
          className="xxl:h-[392px] h-[342px] lg:h-[354px] sm:h-[258px] xs:h-[139px] object-cover rounded-[32px]"
        />
        <Image
          width="2200"
          height="2200"
          alt=""
          src="/about-us/who-we-are/2.png"
          className="xxl:h-[402px] h-[342px] lg:h-[354px] sm:h-[258px] xs:h-[139px] object-cover rounded-[32px]"
        />
      </div>
    </section>
  );
};

export default WhoWeAre;
