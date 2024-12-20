"use client";
import DarkButton from "@components/basic-components/button";
import Description from "@components/basic-components/description";
import H3 from "@components/basic-components/headings/H3";
import OuterComponent from "@components/basic-components/outer-component";
import { useInView } from "@lib/use-in-view";
import Image from "next/image";
import { useRef } from "react";

const WhyUs: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <OuterComponent>
      <div
        ref={ref}
        id="what-we-build"
        className={`flex flex-col gap-5 lg:gap-[40px] sm:gap-[35px] xs:gap-3 ${
          isInView ? "grayscale-0" : "grayscale"
        }`}
      >
        <div className="flex  gap-[40px] items-center lg:items-start justify-between lg:gap-5 sm:flex-col-reverse  xs:gap-3">
          <div className="flex flex-col gap-[15px] lg:gap-[10px] xs:w-full shrink-0 max-w-[662px] lg:w-[50%] sm:w-full">
            <DarkButton text={"Why Choose us?"} id="why-us" />
            <H3
              style="text-white tracking-normal text-[48px] md:text-[40px] sm:text-[40px] xs:pr-0 xs:text-[32px] capitalize hero-text md:tracking-tighter leading-[1.4] sm:leading-[1.28] font-[600]"
              text="Leading <span class='italic font-light'>Payload</span> CMS development company in india"
            />
            <div className="flex flex-col gap-5 ">
              <Description
                text={""}
                classes="text-[20px] font-normal lg:text-base sm:text-base xs:text-sm leading-[1.3] tracking-normal"
              >
                <p>
                  Leverage our proven expertise in building, managing, and
                  enhancing websites powered by Payload CMS. Our highly skilled
                  team of Payload CMS professionals brings deep technical
                  Knowledge and extensive industry experience to deliver
                  exceptional results.
                </p>
                <p>
                  We provide a full suite of services, including Payload CMS
                  development, custom feature integration, and ongoing support,
                  ensuring your digital presence is both powerful and scalable.
                  Our end-to-end solutions are designed to fit your business
                  needs, helping you achieve long-term success.
                </p>
                <p>
                  Recognized for our excellence in CMS development, we have
                  consistently been a top choice for Payload CMS projects. Ready
                  to elevate your website? Get in touch with us today.
                </p>
              </Description>
            </div>
          </div>
          <Image
            width="2200"
            height="2200"
            alt="image"
            src="/about-us/who-we-are/screen.webp"
            className=" w-[567px] sm:w-full h-[569px] lg:h-[453px] lg:w-1/2 sm:h-[453px] shrink-0 xs:h-[288px] xs:w-full overflow-hidden object-cover rounded-[42px]"
            blurDataURL="URL"
            placeholder="blur"
          />
        </div>
      </div>
    </OuterComponent>
  );
};

export default WhyUs;
