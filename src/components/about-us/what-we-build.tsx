"use client";
import Description from "@components/basic-components/description";
import H3 from "@components/basic-components/headings/H3";
import { useInView } from "@lib/use-in-view";
import Image from "next/image";
import { useRef } from "react";

const WhatWeBuild: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      className={`px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px] flex flex-col gap-5 lg:gap-[40px] sm:gap-[35px] xs:gap-3 bg-black overflow-hidden max-w-[1920px] mx-auto ${
        isInView ? "grayscale-0" : "grayscale"
      }`}
    >
      <div className="flex  gap-[40px] lg:gap-[30px] xs:flex-col xs:gap-3">
        <div className="flex flex-col gap-6 lg:gap-[12px] w-[48.8%] sm:w-[64%] xs:w-full shrink-0">
          <H3
            style="!text-white text-[48px] md:text-[40px] sm:text-[40px] xs:pr-0 xs:text-[32px]  md:tracking-tighter xxl:text-[54px] !leading-[1.4] sm:!leading-[1.28] !font-[600]"
            text="We Build Robust Software Solutions With Highly Creative And Dedicated  Team!"
          />
          <div className="flex flex-col gap-5 ">
            <Description
              text={
                "Sookshum Labs is a software development company which specialises in designing, developing and maintaining web and mobile solutions. We build modern digital products for startups and enterprises around the globe. "
              }
              children={null}
              classes="!text-[22px] !font-normal lg:!text-base xs:!text-[12px] xxl:!text-[27px] leading-[1.3] !tracking-normal"
            />
            <Description
              text={
                "We are a talented team of strategists, designers and developers form various disciplines and backgrounds who have come together with common shared goal of building top notch software solutions which help businesses grow to their fullest potential in this digital era."
              }
              children={null}
              classes="!text-[22px] !font-normal lg:!text-base xs:!text-[12px] xxl:!text-[27px] leading-[1.3] !tracking-normal"
            />
            <Description
              text={
                "We are always excited to solve technically difficult projects and enjoy challenges associated with custom software development. What sets us apart from other companies is our understanding of values of any business to its customers."
              }
              children={null}
              classes="!text-[22px] !font-normal lg:!text-base xs:!text-[12px] xxl:!text-[27px] leading-[1.3] !tracking-normal"
            />
          </div>
        </div>
        <Image
          width="2200"
          height="2200"
          alt=""
          src="/about-us/who-we-are/screen.png"
          className="grow h-[633px] lg:h-[403px] sm:h-[291px] xs:h-[219px] overflow-hidden object-cover rounded-[32px]"
          blurDataURL="URL"
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default WhatWeBuild;
