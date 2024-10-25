"use client";
import { useRef } from "react";
import data from "./data/predictable-results.json";
import { useInView } from "@lib/use-in-view";
import H2 from "@components/basic-components/headings/H2";
import Image from "next/image";
import H5 from "@components/basic-components/headings/H5";
export type PredictedResultPoint = {
  title: string;
  icon: string;
};

const predictableResults: PredictedResultPoint[] = data.results;
const PredictableResults: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section
      id="predictable-results"
      ref={ref}
      className={`px-[0px] pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px] xs:mt-[0px] sm:px-5 md:px-[20px] lg:px-10 2xs:px-5 flex flex-col gap-[36px]   items-center bg-black overflow-hidden max-w-[1920px] mx-auto ${
        isInView ? "grayscale-0" : "grayscale"
      } w-full `}
    >
      <div
        className={`flex flex-col gap-[60px] lg:gap-[30px] xs:gap-2 items-center xs:w-full xs:px-4 `}
      >
        <H2>
          <div className="w-full sm:w-full xs:text-[24px] leading-[1.5] text-wrap mx-auto text-center">
            What you get with Sookshum Labs
          </div>
        </H2>
        <div className="grid grid-cols-3 grid-rows-1 xs:gap-5 xs:grid-cols-1 w-full">
          {predictableResults.map(
            (predictedResultPoint: PredictedResultPoint, index: number) => (
              <div
                key={index}
                className="flex flex-col xs:flex-row items-center text-center xs:justify-between xs:w-full gap-5"
              >
                <Image
                  width="2200"
                  height="2200"
                  alt=""
                  src={predictedResultPoint.icon}
                  className="w-fit h-[162px] lg:h-[100px] sm:h-[80px] sm:object-contain shrink-0"
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <H5
                  text={predictedResultPoint.title}
                  style="!text-white text-[22px] text-wrap w-[83%] xs:w-[80%] leading-[1.6]"
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default PredictableResults;
