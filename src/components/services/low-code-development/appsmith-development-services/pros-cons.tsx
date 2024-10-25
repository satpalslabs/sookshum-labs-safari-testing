"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useRef } from "react";
import data from "./data/pros_cons.json";
import { useInView } from "@lib/use-in-view";
const Card = dynamic(() => import("@components/basic-components/card"));
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
import Description from "@components/basic-components/description";
import Image from "next/image";
import H6 from "@components/basic-components/headings/H6";

type card = {
  type: string;
  image: string;
  cards: string[];
};

const pros_cons: card[] = data;
const Pros_Cons: React.FC = () => (
  <div id="pros&cons">
    <OuterComponent>
      <OuterFlexComponent>
        <SectionHeader
          buttonText="Pros & Cons"
          description="Explore the pros and cons of Appsmith, including its open-source flexibility and seamless integrations, as well as potential challenges related to scaling and customization. Is it the ideal low-code platform for your needs?"
          style="xxl:!w-[75%] !w-full lg:!w-[740px] xs:!w-full"
        >
          <div className="xs:w-full  w-full mx-auto leading-[1.4] text-wrap text-center tracking-[-0.02em] capitalize">
            <span className="italic font-light"> Appsmith </span> Pros & Cons
          </div>
        </SectionHeader>
        <MainContainer />
      </OuterFlexComponent>
    </OuterComponent>
  </div>
);

export default Pros_Cons;

const MainContainer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-5 lg:gap-4 sm:gap-3 w-full">
      {pros_cons.map((item: card, index: number) => (
        <div
          key={index}
          className={`flex flex-col h-full flex-wrap gap-5 lg:gap-4 sm:gap-3 ${
            item.type == "pros"
              ? "max-h-[498px] lg:max-h-[464px] sm:max-h-fit"
              : "xxl:max-h-[1226px] max-h-[1326px] lg:max-h-[1106px] sm:max-h-fit"
          }`}
        >
          {item.cards.map((des, ind) => (
            <Card
              style={`mt-0 !pb-4 lg:!p-[10px] sm:!p-[4px] !h-fit w-[calc(50%-10px)] sm:w-full ${
                item.type == "pros" && "!bg-innerBlurContainer"
              }`}
              isInView={isInView}
              key={ind}
            >
              <div
                key={ind}
                className={`flex flex-col justify-between lg:p-3 p-4 gap-[22px] lg:gap-5 sm:gap-3 h-full ${
                  item.type == "cons" &&
                  [2, 3, 6, 7].includes(ind) &&
                  "pt-[80px] lg:pt-3"
                }`}
              >
                <div className="grow">
                  <Image
                    blurDataURL="URL"
                    placeholder="blur"
                    height={300}
                    className="w-[60px] sm:w-[42px]"
                    width={300}
                    src={item.image}
                    alt={item.type}
                  />
                </div>

                <Description
                  children={null}
                  text={des}
                  classes="grow-0 h-fit sm:!text-xs lg:!text-base xxl:!text-xl !text-lg !text-white !font-normal"
                />
              </div>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
};
