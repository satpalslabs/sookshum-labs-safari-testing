"use client";
import Description from "@components/basic-components/description";
import H3 from "@components/basic-components/headings/H3";
import { useInView } from "@lib/use-in-view";
import data from "./data/innovation-concepts.json";
import { useRef } from "react";
const Card = dynamic(() => import("@components/basic-components/card"));
import Image from "next/image";
import H4 from "@components/basic-components/headings/H4";
import H6 from "@components/basic-components/headings/H6";
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";

type Concept = {
  heading: string;
  title: string;
  description: string;
  icon: string;
};

const concepts: Concept[] = data.concepts;
const InnovationConcepts: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <OuterComponent>
      <div
        id="innovation-concepts"
        ref={ref}
        className={`flex flex-col items-center gap-[40px] lg:gap-[30px] xs:gap-3 ${
          isInView ? "grayscale-0" : "grayscale"
        }`}
      >
        <div className="grid grid-cols-2 xs:grid-cols-1 gap-6 lg:gap-[30px] xs:gap-3">
          <H3
            style="!text-white text-[48px] !capitalize md:text-[40px] sm:text-[40px] xs:pr-0 xs:text-[32px]  md:tracking-tighter xxl:text-[54px] !leading-[1.4] sm:!leading-[1.28] !font-[600]"
            text="Change your business idea into Reality Today"
          />
          <Description
            text={
              "Bring your innovative ideas to life with Sookshum Labs. Partner with us to bring your vision to life through innovative solutions and expert guidance. Let’s make it happen!"
            }
            children={null}
            classes="!text-[22px] !font-normal lg:!text-base xs:!text-[12px] xxl:!text-[27px] leading-[1.3] !tracking-normal"
          />
        </div>
        <div className="grid grid-cols-2 xs:grid-cols-1 gap-5 w-full lg:gap-[30px] xs:gap-3">
          {concepts.map((concept: Concept, index: number) => (
            <Card style="" isInView={isInView} key={index}>
              <div className="flex flex-col xxl:gap-6 gap-5 p-4 sm:p-2 pb-0 sm:gap-[12px]">
                <Image
                  alt=""
                  width="2200"
                  height="2200"
                  src={concept.icon}
                  className="w-[100px] h-[100px] lg:w-[80px] lg:h-[80px] "
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <H4 text={concept.heading} style="text-[26px] !font-[600]" />
                <H6
                  text={concept.title}
                  classes="!text-white xxl:text-[23px] "
                />
                <Description
                  text={concept.description}
                  classes="text-lg xxl:text-[20px] !text-white !font-normal"
                  children={null}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </OuterComponent>
  );
};

export default InnovationConcepts;
