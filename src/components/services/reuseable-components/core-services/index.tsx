"use client";
import { useRef } from "react";
import Service from "./service-card";
import serviceData from "../../data/services.json";
import { useInView } from "@lib/use-in-view";
import OuterComponent from "@components/basic-components/outer-component";
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
    <div id="core-services">
      <OuterComponent>
        <div
          ref={ref}
          className="grid grid-cols-3 gap-5 lg:gap-[18px] xxl:gap-16 xs:grid-cols-1 xs:gap-[16px]"
        >
          {services?.map((service: serviceType, index: number) => (
            <Service service={service} isInView={isInView} key={index} />
          ))}
        </div>
      </OuterComponent>
    </div>
  );
};

export default CoreServices;
