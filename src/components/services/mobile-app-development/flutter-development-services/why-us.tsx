"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import data from "./data/choose-us.json";
import Image from "next/image";
import H4 from "@components/basic-components/headings/H4";
import Description from "@components/basic-components/description";
import SideNavigation from "@components/services/reuseable-components/web-app-development/side-navigation-card";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";

type Process = {
  "process-title": string;
  description: string;
};
const chooseUsData: Process[] = data;
const WhyUs = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        id="why-us"
        buttonText="Why choose us?"
        description="As a leading Flutter development company, we recognize the significance of crafting a visually stunning and unique brand identity that aligns perfectly with your business goals. Every iOS, Android, and web app developed by our Flutter experts is a true reflection of the brand it embodies."
        style="w-[986px] lg:w-[491px] lg:mx-auto xs:w-full"
      >
        <div className="w-full lg:w-[637px] sm:w-full xs:px-3 xs:w-full 3xs:px-0 xs:text-balance lg:leading-[1.2] text-wrap tracking-tight text-center mx-auto leading-[1.4]">
          Why Choose us for{" "}
          <span className="italic font-light w-full">Flutter</span> App
          Development Company?
        </div>
      </SectionHeader>
      <WhyUsDetailComponent />
    </OuterFlexComponent>
  </OuterComponent>
);

export default WhyUs;

const WhyUsDetailComponent: React.FC = () => {
  const [active, setActive] = useState<number>(0);

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      className={` ${
        isInView ? "grayscale-0" : "grayscale"
      } grid grid-cols-3  transition-all duration-500 sm:grid-cols-none sm:flex sm:flex-col sm:gap-5 w-full `}
    >
      <Navigation active={active} setActive={setActive} />
      <div className="grid grid-cols-2 col-span-2 sm:grid-cols-none sm:flex xs:flex-col xs:gap-5">
        <Image
          blurDataURL="URL"
          placeholder="blur"
          width="1200"
          height="1200"
          className="h-[297px] lg:h-[230px] sm:w-[50%] sm:object-contain xs:h-[150px] lg:px-[15px] xxl:w-fit mx-auto"
          src={"/services/web-app-development/landing-page/why-us/achieve.webp"}
          alt="image"
        />
        <div className="flex flex-col pt-[18px] lg:pt-[15px] sm:grow">
          <H4 style="!text-white" text={`0${active + 1}`} />
          <div className="pl-6 pt-1 flex flex-col gap-[51px] sm:gap-[42px] xs:gap-[19px] sm:w-[80%] xs:w-full">
            <div className=" flex flex-col gap-[21px] xs:gap-[10px]">
              <H4
                style="leading-[1.4] h-fit text-wrap !text-white"
                text={chooseUsData[active]["process-title"]}
              />
              <Description
                children={null}
                classes="!text-white text-lg leading-[1.4] !font-normal"
                text={chooseUsData[active].description}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Navigation: React.FC<{
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}> = ({ active, setActive }) => (
  <div className="flex flex-col sm:flex-row gap-[10px] sm:overflow-x-auto w-full col-span-1 no-scrollbar">
    {chooseUsData.map((process: Process, ind: number) => (
      <SideNavigation
        title={process["process-title"].replace("<br />", "")}
        ind={ind}
        active={active}
        setActive={setActive}
        key={ind}
        style=""
      />
    ))}
  </div>
);
