"use client";
import DarkButton from "@components/basic-components/button";
import Description from "@components/basic-components/description";
import H3 from "@components/basic-components/headings/H3";
import { useInView } from "@lib/use-in-view";
import Image from "next/image";
import  { useRef } from "react";

const OurCulture: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      className={`px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px] flex flex-col items-center gap-[32px] lg:gap-[30px] xs:gap-3    bg-black overflow-hidden max-w-[1920px] mx-auto ${
        isInView ? "grayscale-0" : "grayscale"
      }`}
    >
      <DarkButton text="Our Culture" style="" />
      <Image
        width="3200"
        height="3200"
        alt=""
        src="/about-us/our-culture-1.png"
        className="w-full h-[500px] xxl:h-[700px] lg:h-[354px] xs:h-[219px] overflow-hidden object-cover rounded-[32px]"
      />

      <Description
        text={
          "We maintain a culture of privacy for our team’s joyous moments, which is why we limit sharing photos of our internal celebrations on public platforms. However, here are some glimpses of our celebrations, with the focus on the events themselves rather than our team members. "
        }
        children={null}
        classes="!text-[20px] !font-light italic lg:!text-base xs:!text-[12px] xxl:!text-[27px] leading-[1.3] !tracking-normal"
      />
      <div className="grid grid-cols-2 xs:grid-cols-1 gap-[40px] lg:gap-[30px] xs:gap-3">
        <H3
          style="!text-white !capitalize text-[48px] md:text-[40px] sm:text-[40px] xs:pr-0 xs:text-[32px]  md:tracking-tighter xxl:text-[54px] !leading-[1.4] sm:!leading-[1.28] !font-[600]"
          text="Building a culture of creativity, innovation and growth"
        />
        <div className="flex flex-col gap-5 ">
          <Description
            text={
              "At our company, we believe that a positive, supportive work environment is crucial for delivering exceptional results. We cultivate a culture of creativity and innovation, where team members are encouraged to share ideas and take calculated risks. Collaboration is at the heart of what we do, and we value diverse perspectives and experiences. "
            }
            children={null}
            classes="!text-[22px] !font-normal lg:!text-base xs:!text-[12px] xxl:!text-[27px] leading-[1.3] !tracking-normal"
          />
          <Description
            text={
              "We also prioritize work-life balance and employee well-being. Our team members enjoy coming to work each day because they feel supported, valued, and part of a tight-knit community."
            }
            children={null}
            classes="!text-[22px] !font-normal lg:!text-base xs:!text-[12px] xxl:!text-[27px] leading-[1.3] !tracking-normal"
          />
        </div>
      </div>
    </section>
  );
};

export default OurCulture;
