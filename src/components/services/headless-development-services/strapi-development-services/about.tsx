import Description from "@components/basic-components/description";
import H1 from "@components/basic-components/headings/H1";
import H2 from "@components/basic-components/headings/H2";
import H5 from "@components/basic-components/headings/H5";
import OuterComponent from "@components/basic-components/outer-component";
import Image from "next/image";
import React from "react";

const About: React.FC = () => {
  const integrades = [
    "/services/low-code-development/appsmith-development-services/about/Airtable.png",
    "/services/low-code-development/appsmith-development-services/about/sql.png",
    "/services/low-code-development/appsmith-development-services/about/g-sheet.png",
    "/services/low-code-development/appsmith-development-services/about/mongo.png",
  ];
  return (
    <OuterComponent>
      <div className="flex flex-row xs:flex-col justify-between gap-5 xxl:h-[800px] h-[700px] lg:h-[875px] sm:h-fit">
        <div className="xxl:max-w-[820px] max-w-[700px] lg:max-w-[473px] xs:w-full shrink-0 flex flex-col gap-5 sm:max-w-full ">
          {/* <H2
            style="!font-[600] xxl:!text-[54px] w-[80%] lg:w-full !text-[48px] !tracking-normal lg:!text-[42px] sm:!text-[36px] xs:!text-[28px] !leading-[1.3]"
            text="Create Captivating Digital Experiences With Our Strapi Development Services "
          /> */}
          <H2>
            <div className="text-wrap xxl:max-w-[800px] max-w-[700px] lg:max-w-[473px] text-[42px] sm:max-w-full leading-[1.3] xs:text-[28px] xs:max-w-[353px]">
              Create Captivating Digital Experiences With Our Strapi Development
              Services
            </div>
          </H2>
          <div className="flex flex-col gap-[90px] lg:gap-[66px]">
            <Description classes="" text="">
              <div className="unreset text-[20px] lg:text-base xs:text-sm font-normal leading-[1.3] xxl:w-[80%] text-white sm:tracking-tight">
                <p className="!m-0">
                  Top-tier market leaders leverage Strapi, including Walmart,
                  IBM and NASA, to power their content strategies and offer an
                  unparalleled experience for their customers. As a modern age
                  Headless CMS, Strapi lets businesses create, manage, and
                  distribute content over every digital touchpoint.
                </p>
                <p className="">
                  Successive Digital is now a certified Strapi Enterprise
                  Partner, and with a team of Strapi development professionals,
                  we build customized solutions that position you for long-term
                  competitiveness.
                </p>
                <p>
                  As a leading Strapi development company we work closely with
                  our clients, understand their requirements, and integrate
                  custom plugins and APIs that enhance the functionality and
                  performance of the end solution. Whether a business wishes to
                  build an eCommerce store, a mobile or web application, or a
                  corporate website, our proficiency in Strapi CMS development
                  can assist them in becoming a market leader in their niche
                  industry.
                </p>
                <p>
                  Our modern solutions are designed to help businesses stay
                  up-to-date with market trends. Now, with the back support of
                  Strapi 5, we enable them to deliver more captivating digital
                  experiences.{" "}
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
            src="/services/headless-cms/strapi-about-img.svg"
            className="h-full w-full object-cover lg:hidden"
          />
          <Image
            width="900"
            height="900"
            alt="image"
            src="/services/headless-cms/laptop-strapi-about-img.svg"
            className="h-full w-full object-cover hidden lg:block"
          />
        </div>
      </div>
    </OuterComponent>
  );
};

export default About;
