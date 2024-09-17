"use client";
/**
 * This component contains the core services.
 */
import type React from "react";
import data from "./data/index.json";
import { useInView } from "@lib/use-in-view";
import { useRef } from "react";
import dynamic from "next/dynamic";
const ServiceCard = dynamic(() => import("./containers/service-card"));

export type dataItem = {
  id: string;
  description: string;
};
const CoreServices: React.FC = () => {

  return (
    <div
      className={`px-[80px] lg:px-10 xs:px-5 py-[72px] pb-0 sm:pb-8 sm:pt-0 xs:py-0 bg-black max-w-[1920px] mx-auto`}
      id="core_services"
    >
      <div  className="grid grid-cols-3 gap-5 lg:gap-[18px] xxl:gap-16 xs:grid-cols-1 xs:gap-[28px]">
        {data &&
          data.map((item: dataItem, index: number) => {
            return <ServiceCard item={item} key={index} />;
          })}
      </div>
    </div>
  );
};

export default CoreServices;
