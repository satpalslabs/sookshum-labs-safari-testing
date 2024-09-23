"use client";
import SectionHeader from "@components/basic-components/section-header";
import React, { useRef, useState } from "react";
import data from "./data/technologies.json";
import SideNavigation from "@components/services/reuseable-components/web-app-development/side-navigation-card";
import GraphQLButton from "@components/basic-components/graphQL-button";
import H4 from "@components/basic-components/headings/H4";

type PlatformGroup = {
  heading: string;
  platforms: Platform[];
};
type Platform = {
  name: string;
  technologies: Technology[];
};
type Technology = {
  name: string;
  logo: string;
};
const TechnologiesData: PlatformGroup[] =
  data["web-app-development-technologies"];
const Technologies = () => {
  return (
    <section className="px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px] flex flex-col gap-[70px] md:gap-[50px] sm:gap-12 py-[70px] md:py-0 xs:py-0  items-center bg-black overflow-hidden max-w-[1920px] mx-auto">
      <SectionHeader
        buttonText="Technologies"
        description="All the resources required for the full implementation of the project are in-house: designers, PMs, front-end and back-end developers, testers. We hire the best talent."
        style="w-[790px] lg:w-[90%] xs:w-full"
      >
        <div className="w-full flex flex-col xs:w-full tracking-tight text-center mx-auto xs:leading-[1.3] ">
          <div className="w-full">Tools & technologies</div>
          <div className="xs:text-wrap">
            we use for{" "}
            <span className="italic font-light w-full">
              Web App Development
            </span>
          </div>
        </div>
      </SectionHeader>
      <TechnologiesCards />
    </section>
  );
};

export default Technologies;

const TechnologiesCards: React.FC = () => {
  const [activeTech, setActiveTech] = useState<number>(0);

  return (
    <div className="w-full flex sm:flex-col gap-5 xs:gap-[32px]">
      <Navigation activeTech={activeTech} setActiveTech={setActiveTech} />
      <div className="w-full flex flex-col gap-[50px]">
        {TechnologiesData[activeTech].platforms.map(
          (platform: Platform, ind: number) => (
            <div className="flex flex-col gap-[30px] xs:gap-5" key={ind}>
              <H4 text={platform.name} style={"xs:text-[20px]"} />
              <div className="grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-3 xs:grid-cols-2 gap-3 xs:gap-2">
                {platform.technologies.map((tech: Technology, ind: number) => (
                  <GraphQLButton
                    style="!w-full"
                    text={tech.name}
                    key={ind}
                    image={tech.logo}
                  />
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const Navigation: React.FC<{
  activeTech: number;
  setActiveTech: React.Dispatch<React.SetStateAction<number>>;
}> = ({ activeTech, setActiveTech }) => (
  <div className="flex flex-col w-[25.8%] sm:w-full shrink-0 sm:flex-row gap-[50px] lg:gap-[40px] sm:gap-[10px] sm:overflow-x-auto col-span-1 no-scrollbar">
    {TechnologiesData.map((platform: PlatformGroup, ind: number) => (
      <SideNavigation
        ind={ind}
        active={activeTech}
        setActive={setActiveTech}
        title={platform.heading}
        key={ind}
        style={"sm:w-[33%] xs:w-fit"}
      />
    ))}
  </div>
);
