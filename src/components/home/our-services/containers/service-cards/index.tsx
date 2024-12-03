"use client";
/**
 * This file contains the service cards of our service section.
 */

import { useRef } from "react";
import dynamic from "next/dynamic";
import data from "../../data/index.json";
import { useInView } from "@lib/use-in-view";
const ServiceCard = dynamic(() => import("./service-card"));

export type dataItemType = {
  heading: string;
  description: string;
  image_url: string;
  link: string;
  video_url: string;
};

const ServiceCards: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  return (
    <div
      ref={ref}
      className="grid grid-cols-3 grid-rows-1 sm:flex sm:flex-wrap  gap-5 sm:grid-cols-2 lg:gap-[18px] sm:gap-3 xs:grid-cols-1 "
    >
      {data.sections.map((dataItem: dataItemType, index: number) => (
        <ServiceCard item={dataItem} key={index} isInView={isInView} />
      ))}
    </div>
  );
};

export default ServiceCards;
