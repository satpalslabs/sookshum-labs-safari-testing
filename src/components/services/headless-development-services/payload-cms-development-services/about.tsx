import Description from "@components/basic-components/description";
import H1 from "@components/basic-components/headings/H1";
import H2 from "@components/basic-components/headings/H2";
import H5 from "@components/basic-components/headings/H5";
import OuterComponent from "@components/basic-components/outer-component";
import Image from "next/image";
import React from "react";

const About: React.FC = () => (
  <OuterComponent>
    <div className="flex flex-row xs:flex-col justify-between gap-5 h-[628px] py-[80px] lg:h-[481px] lg:py-0 sm:h-fit">
      <div className="xxl:max-w-[820px] max-w-[700px] lg:max-w-[473px] xs:w-full shrink-0 flex flex-col gap-5 sm:max-w-full ">
        {/* <H2
            style="!font-[600] xxl:!text-[54px] w-[80%] lg:w-full !text-[48px] !tracking-normal lg:!text-[42px] sm:!text-[36px] xs:!text-[28px] !leading-[1.3]"
            text="Create Captivating Digital Experiences With Our Strapi Development Services "
          /> */}
        <H2>
          <div className="text-wrap xxl:max-w-[800px] max-w-[700px] lg:max-w-[473px] text-[42px] sm:max-w-full leading-[1.3] xs:text-[28px] xs:max-w-[353px] hero-text">
            Payload CMS Agency
          </div>
        </H2>
        <div className="flex flex-col gap-[90px] lg:gap-[66px]">
          <Description classes="" text="">
            <div className="unreset text-[20px] lg:text-base xs:text-sm font-normal leading-[1.3] xxl:w-[80%] text-white sm:tracking-tight">
              <p className="!m-0">
                Payload CMS is particularly well suited for projects that
                require complex content models, custom authentication, and media
                management capabilities. Our team of experienced Payload CMS
                designers will work closely with you to design and implement a
                scalable architecture that seamlessly integrates with your
                existing systems and fronted technologies.
              </p>
              <p>
                We guarantee further assistance and service, making your digital
                platform as effective, safe, and developed as it can be. Our
                vision is to enable your organization to have a strong and
                scalable CMS that can adapt to the specific needs of your
                growing business while providing the best content management
                environment for the workers in your team. We can also help you
                create Payload CMS Next JS using Vercel Payload CMS.
              </p>
            </div>
          </Description>
        </div>
      </div>
      <div className="w-full xxl:max-w-[600px] sm:hidden lg:max-w-[451px] bg-gradient-to-r from-black to-transparent">
        <Image
          width="900"
          height="900"
          alt="image"
          src="/services/headless-cms/payload-about.svg"
          className="h-full w-full object-cover lg:hidden"
        />
        <Image
          width="900"
          height="900"
          alt="image"
          src="/services/headless-cms/payload-laptop-about.svg"
          className="h-full w-full object-cover hidden lg:block"
        />
      </div>
    </div>
  </OuterComponent>
);

export default About;
