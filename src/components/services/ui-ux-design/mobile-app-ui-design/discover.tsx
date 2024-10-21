"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useRef } from "react";
import data from "./data/discover.json";
import { useInView } from "@lib/use-in-view";
const Card = dynamic(() => import("@components/basic-components/card"));
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
import Description from "@components/basic-components/description";
import Image from "next/image";
import H6 from "@components/basic-components/headings/H6";

type discover = {
  title: string;
  description: string;
  image: string;
};

const discoverData: discover[] = data;
const Discover: React.FC = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        buttonText="Discover"
        description="We combine our team’s depth of experience in design, our client’s intimate knowledge of the industries they serve and insights uncovered through the discoveries we make."
        style="w-[70.5%] lg:!w-[740px] xs:!w-full"
      >
        <div className="mx-auto leading-[1.4] text-wrap text-center tracking-[-0.02em] capitalize">
          Keep your users at the center of your <br /> design process with our
          UXD practices
        </div>
      </SectionHeader>
      <MainContainer />
    </OuterFlexComponent>
  </OuterComponent>
);

export default Discover;

const MainContainer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="grid grid-cols-3 gap-4 w-full xs:grid-cols-1">
      {discoverData.map((discover: discover, index: number) => (
        <Card key={index} style="mt-0 !pb-4" isInView={isInView}>
          <div className="flex flex-col justify-between lg:p-3 p-4 gap-[28px] lg:gap-5 sm:gap-[40px] h-full">
            <div className="grow ">
              <Image
                blurDataURL="URL"
                placeholder="blur"
                height={300}
                className="w-[120px] lg:w-[80px]"
                width={300}
                src={discover.image}
                alt={discover.title}
              />
            </div>
            <div className="flex flex-col gap-[4] lg:gap-3 sm:gap-2">
              <H6
                text={discover.title}
                classes="text-white xxl:text-[26px] !font-[500] !text-[26px] sm:!text-[14px] md:!leading-[1.4] !leading-[1.6]"
              />
              <Description
                text={""}
                classes="grow-0 h-fit sm:!text-xs text-lg !font-normal"
              >
                <div
                  className="unreset text-white"
                  dangerouslySetInnerHTML={{ __html: discover.description }}
                ></div>
              </Description>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
