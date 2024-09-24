"use client";
/**
 * This file contains the text container of why choose us section.
 */

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import data from "../data/index.json";
import { useInView } from "@lib/use-in-view";
const TextCard = dynamic(() => import("./text-card"));
const ImageContainer = dynamic(() => import("./image-container"));

export type dataItemType = {
  title: string;
  description: string;
  image_url: string;
  video_url: string;
};

function MainContainer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  let [selectedCardIndex, setSelectedCardIndex] = useState<number>(0);
  return (
    <div
      ref={ref}
      className="w-full gap-5 grid grid-cols-10 md:gap-[14px] xs:grid-cols-1 !shrink-0"
    >
      <ImageContainer
        item={data.text_containers[selectedCardIndex]}
        isInView={isInView}
      />
      <div className="flex flex-col gap-5 md:gap-3 col-span-4">
        {data.text_containers.map((dataItem: dataItemType, index: number) => (
          <TextCard
            item={dataItem}
            key={index}
            index={index}
            selectedItem={selectedCardIndex}
            setSelectedItem={setSelectedCardIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default MainContainer;
