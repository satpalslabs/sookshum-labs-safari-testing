import CheckIcon from "@components/basic-components/check-icon";
import Description from "@components/basic-components/description";
import H2 from "@components/basic-components/headings/H2";
import H6 from "@components/basic-components/headings/H6";
import OuterComponent from "@components/basic-components/outer-component";
import Image from "next/image";
import React from "react";
import data from "./data/why-us.json";

const WhyUS: React.FC = () => (
  <OuterComponent>
    <div className="flex flex-row xs:flex-col justify-between gap-5 h-[836px] xxl:h-[736px] py-[80px] lg:h-fit lg:py-0 sm:h-fit">
      <div className="xxl:max-w-[820px] max-w-[700px] lg:max-w-[473px] xs:w-full shrink-0 flex flex-col gap-5  xs:gap-3 sm:max-w-full ">
        <H2>
          <div className="text-wrap xxl:max-w-[800px] max-w-[700px] lg:max-w-[473px] text-[42px] sm:max-w-full leading-[1.3] xs:text-[28px] xs:max-w-[353px] hero-text xs:tracking-tight">
            Why Choose Us As Your{" "}
            <span className="italic font-light"> Directus CMS </span>{" "}
            Development Company?
          </div>
        </H2>
        <div className="flex flex-col gap-5 xs:gap-3 items-start sm:grow sm:w-fit sm:text-nowrap xs:w-full">
          {data.map((listItem: { title: string }, index: number) => (
            <div
              className="flex gap-[21px] lg:gap-[18px] sm:gap-[14px] items-start"
              key={index}
            >
              <div className="flex items-center justify-center w-[27px] h-[27px] sm:w-[24px] sm:h-[24px] xs:w-[20px] xs:h-[20px] bg-primary rounded-full shrink-0">
                <CheckIcon style={"xs:h-[7px] xs:w-[11px]"} />
              </div>
              <H6
                classes="text-white text-[20px] xxl:text-[20px] text-wrap xs:text-[16px] xs:leading-[20px] tracking-normal"
                text={listItem.title}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-full xxl:max-w-[600px] sm:hidden lg:max-w-[451px] bg-gradient-to-r from-black to-transparent">
        <Image
          width="900"
          height="900"
          alt="image"
          src="/services/headless-cms/bg-directus.svg"
          className="h-full w-full object-cover lg:hidden"
        />
        <Image
          width="900"
          height="900"
          alt="image"
          src="/services/headless-cms/laptop-bg-directus.svg"
          className="h-full w-full object-cover hidden lg:block"
        />
      </div>
    </div>
  </OuterComponent>
);

export default WhyUS;
