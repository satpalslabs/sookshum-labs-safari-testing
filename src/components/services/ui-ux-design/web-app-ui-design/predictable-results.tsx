"use client";
import { useRef } from "react";
import data from "./data/predictable-results.json";
import { useInView } from "@lib/use-in-view";
import H2 from "@components/basic-components/headings/H2";
import Image from "next/image";
import H5 from "@components/basic-components/headings/H5";
import Description from "@components/basic-components/description";
import OuterComponent from "@components/basic-components/outer-component";
export type PredictedResultPoint = {
  title: string;
  icon: string;
  description: string;
};

const predictableResults: PredictedResultPoint[] = data.results;
const PredictableResults: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <OuterComponent>
      <div ref={ref}>
        <div
          className={`flex flex-col gap-[70px] sm:gap-[50px] xs:gap-[30px] items-center xs:w-full xs:px-4 `}
        >
          <H2>
            <div className="w-full sm:w-full xs:text-[24px] leading-[1.5] text-wrap mx-auto text-center ">
              Discover how efficient landing page design{" "}
              <br className="sm:hidden" /> can affect your product
            </div>
          </H2>
          <div className="grid grid-cols-3 gap-[60px] sm:gap-5 grid-rows-1 xs:gap-8 xs:grid-cols-1 w-full">
            {predictableResults.map(
              (item: PredictedResultPoint, index: number) => (
                <div
                  key={index}
                  className="flex flex-col items-center xs:justify-between xs:w-full gap-[45px] lg:gap-[37px] xs:gap-[22px]"
                >
                  <Image
                    width="2200"
                    height="2200"
                    alt=""
                    src={item.icon}
                    className="xxl:h-[140px] h-[112px] w-auto lg:h-[80px] sm:h-[80px] sm:object-contain shrink-0"
                    blurDataURL="URL"
                    placeholder="blur"
                  />
                  <div className="flex flex-col gap-5 sm:gap-3">
                    <H5
                      style="!text-white  xxl:!text-[30px] !text-[26px] lg:!text-[20px] text-wrap !leading-[1.4]"
                      text={item.title}
                    />
                    <Description
                      text={""}
                      classes="grow-0 h-fit sm:!text-xs !text-lg xxl:!text-xl !font-normal"
                    >
                      <div className="!text-white">{item.description} </div>
                    </Description>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </OuterComponent>
  );
};

export default PredictableResults;
