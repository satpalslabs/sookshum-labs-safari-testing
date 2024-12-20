"use client";
import DarkButton from "@components/basic-components/button";
import Description from "@components/basic-components/description";
import H3 from "@components/basic-components/headings/H3";
import OuterComponent from "@components/basic-components/outer-component";
import { useInView } from "@lib/use-in-view";
import Image from "next/image";
import { useRef } from "react";

const WhyPayload: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <OuterComponent>
      <div
        ref={ref}
        className={`flex flex-col gap-5 lg:gap-[40px] sm:gap-[35px] xs:gap-3 ${
          isInView ? "grayscale-0" : "grayscale"
        }`}
      >
        <div className="flex  gap-[80px] lg:gap-[117px] sm:gap-[80px] items-center  justify-between sm:flex-col-reverse  xs:gap-3">
          <div className="flex flex-col gap-[15px] lg:gap-[10px] xs:w-full w-full shrink-0 max-w-[721px] lg:max-w-[462px] sm:max-w-full sm:w-full">
            <DarkButton text={"Why Payload CMS?"} id="why-payload" />
            <H3
              style="text-white tracking-normal text-[48px] md:text-[42px] sm:text-[42px] xs:pr-0 xs:text-[28px] capitalize hero-text md:tracking-tighter leading-[1.4] sm:leading-[1.28] font-[600]"
              text=" <span class='italic font-light'> Payload CMS</span> is the future"
            />
            <div className="flex flex-col gap-5 ">
              <Description
                text={""}
                classes="xxl:text-[20px] text-[20px] text-white text-darkButton_text font-normal lg:text-base md:text-base sm:text-base xs:text-sm leading-[1.5] tracking-[-0.02em]"
              >
                <p>
                  The future is uncertain, but with the right tech stack, you
                  can stay ready for whatever comes next.{" "}
                  <br className="hidden xs:block" />
                  <br className="hidden xs:block" /> Payload CMS offers a
                  modern, adaptable foundation to future-proof your website.
                  Here's how:
                </p>
                <br className="hidden xs:block" />
                <div className="unreset ">
                  <ul className="!mt-0 !pl-[30px] lg:!pl-[20px] sm:!pl-6  xs:!pl-5">
                    <li>
                      Seamless Presentation Updates: With Payload CMS, you can
                      update your website’s front-end without touching the
                      backend, eliminating the hassle of complex data
                      migrations.
                    </li>
                    <li>
                      Effortless Integrations: Payload’s powerful API makes
                      integrating with other platforms and technologies a
                      breeze. Whether it’s social media, mobile apps, voice
                      assistants, or chatbots, delivering your content across
                      channels has never been simpler.
                    </li>
                    <li>
                      Scalable Architecture: Grow your website as much as you
                      need—Payload’s robust backend lets you add features like
                      eCommerce or other enhancements without needing a complete
                      re-architecture.
                    </li>
                    <li>
                      Built-in Security: With Payload CMS’s advanced security
                      features, you can rest easy knowing your site is protected
                      against hacks, cyberattacks, and data breaches.
                    </li>
                  </ul>
                </div>
              </Description>
            </div>
          </div>
          <Image
            width="2200"
            height="2200"
            alt="image"
            src="/services/headless-cms/why-payload.png"
            className="h-[462px] lg:h-[453px] w-[723px] xs:hidden xs:w-auto lg:w-[730px] sm:w-full object-cover shrink-0"
            blurDataURL="URL"
            placeholder="blur"
          />
          <Image
            width="2200"
            height="2200"
            alt="image"
            src="/services/headless-cms/mobile-why-payload.svg"
            className="xs:block hidden w-full h-auto object-cover shrink-0"
            blurDataURL="URL"
            placeholder="blur"
          />
        </div>
      </div>
    </OuterComponent>
  );
};

export default WhyPayload;
