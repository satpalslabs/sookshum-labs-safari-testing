"use client";
import  { useRef } from "react";
import Service from "./service-card";
import serviceData from "../../data/services.json";
import { useInView } from "@lib/use-in-view";
export type serviceType = {
  path: string;
  count: string;
  about: string;
};
interface Data {
  [key: string]: serviceType[]; // Index signature to allow string indexing
}
const data: Data = serviceData;
const CoreServices: React.FC<{ DataKey: keyof Data }> = ({ DataKey }) => {
  const services = data[DataKey as keyof Data];
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className={` px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px] bg-black max-w-[1920px] mx-auto`}
      id="core_services"
    >
      <div className="grid grid-cols-3 gap-5 lg:gap-[18px] xxl:gap-16 xs:grid-cols-1 xs:gap-[16px]">
        {services?.map((service: serviceType, index: number) => (
          <Service service={service} isInView={isInView} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CoreServices;
