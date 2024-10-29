"use client";
import { useRef } from "react";
import data from "./data/core-services.json";
import { useInView } from "@lib/use-in-view";
import dynamic from "next/dynamic";
const Card = dynamic(() => import("@components/basic-components/card"));
import OuterComponent from "@components/basic-components/outer-component";
import Description from "@components/basic-components/description";
import Image from "next/image";

type card = {
  description: string;
  image: string;
};

const core_services: card[] = data;
const CoreServices: React.FC = () => (
    <OuterComponent>
      <MainContainer />
    </OuterComponent>
);

export default CoreServices;

const MainContainer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className="grid grid-cols-3 gap-4 xxl:gap-10 w-full xs:grid-cols-1"
    >
      {core_services.map((chooseUs: card, index: number) => (
        <Card key={index} style="mt-0 !pb-4" isInView={isInView}>
          <div className="flex flex-col justify-between lg:p-3 p-4 gap-[22px] lg:gap-5 h-full">
            <div className="grow ">
              <Image
                blurDataURL="URL"
                placeholder="blur"
                height={300}
                className="w-[42px] xxl:w-[60px] "
                width={300}
                src={chooseUs.image}
                alt={"core-services "}
              />
            </div>
            <Description
              children={null}
              text={chooseUs.description}
              classes="grow-0 h-fit !tracking-normal !leading-[1.4] !text-white sm:!text-xs xxl:!text-[23px] !text-lg !font-medium"
            />
          </div>
        </Card>
      ))}
    </div>
  );
};
