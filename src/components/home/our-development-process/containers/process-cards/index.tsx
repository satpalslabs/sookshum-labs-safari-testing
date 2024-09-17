"use client";
import dynamic from "next/dynamic";
/**
 * This file contains the service cards of our development section.
 */

import data from "../../data/index.json";
const DevelopmentProcessCard = dynamic(() => import("./process-card"));

import { useInView } from "@lib/use-in-view";
import { useRef } from "react";

export type dataItemType = {
  title: string;
  description: string;
  image_url: string;
  cols: number;
};

const DevelopmentProcessCards = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  return (
    <div
      ref={ref}
      className="grid grid-cols-6 gap-5 sm:grid-cols-2 lg:gap-[18px] sm:gap-3 xs:grid-cols-1"
    >
      {data.sections.map((dataItem: dataItemType, index: number) => (
        <DevelopmentProcessCard
          item={dataItem}
          key={index}
          index={index}
          isInView={isInView}
        />
      ))}
    </div>
  );
};

export default DevelopmentProcessCards;
