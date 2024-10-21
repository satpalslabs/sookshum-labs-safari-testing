"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useRef } from "react";
import data from "./data/who-we-are.json";
import { useInView } from "@lib/use-in-view";
const Card = dynamic(() => import("@components/basic-components/card"));
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
import Description from "@components/basic-components/description";
import Image from "next/image";
import H6 from "@components/basic-components/headings/H6";

type item_type = {
  title: string;
  description: string;
  image: string;
};

const dataItems: item_type[] = data;
const WhoWeAre: React.FC = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        buttonText="Who we are"
        description="We combine our team’s depth of experience in design, our client’s intimate knowledge of the industries they serve and insights uncovered through the discoveries we make."
        style="xxl:!w-[75%] !w-full lg:!w-[740px] xs:!w-full"
      >
        <div className="xs:w-full sm:w-[80%] w-full mx-auto leading-[1.4] text-wrap text-center tracking-[-0.02em] capitalize">
          We will give your website a makeover and get you more conversions
        </div>
      </SectionHeader>
      <MainContainer />
    </OuterFlexComponent>
  </OuterComponent>
);

export default WhoWeAre;

const MainContainer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-4 w-full xs:grid-cols-1">
      {dataItems.map((item: item_type, index: number) => (
        <Card
          key={index}
          style={`mt-0 !pb-4 ${index > 1 && "col-span-2 xs:col-span-1"}`}
          isInView={isInView}
        >
          <div className="flex flex-col justify-between lg:p-3 p-4 gap-[22px] lg:gap-5 h-full">
            <div className="grow ">
              <Image
                blurDataURL="URL"
                placeholder="blur"
                height={300}
                className="w-[120px] lg:w-[80px] h-[120px] lg:h-[80px]"
                width={300}
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="flex flex-col gap-4 lg:gap-3 sm:gap-2">
              <H6
                text={item.title}
                classes="text-white xxl:text-3xl !font-[500] !text-[20px] sm:!text-[14px] md:!leading-[1.4] !leading-[1.6]"
              />
              <Description
                children={null}
                text={item.description}
                classes="grow-0 h-fit sm:!text-xs text-lg !font-normal"
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
