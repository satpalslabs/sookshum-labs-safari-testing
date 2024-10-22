"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useInView } from "framer-motion";
import { useRef } from "react";
const Card = dynamic(() => import("@components/basic-components/card"));
import Description from "@components/basic-components/description";
import H6 from "@components/basic-components/headings/H6";
import data from "@components/header/data/services.json";
import type {
  service,
  cardContent,
} from "@components/header/containers/services/dropdown";
import Image from "next/image";
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";

const TechnologiesData: service | undefined = data.services.find(
  (technology) => technology.label == "ECommerce Development"
);
const Technologies = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        buttonText="Technologies we use"
        description="We'll help you define your brand, build a powerful online presence, and reach your target audience effectively."
        style="w-[794px] xs:w-full"
      >
        <div className="w-full xs:w-full text-wrap text-center mx-auto">
          Building <span className="italic font-light">Tech-Driven</span>{" "}
          eCommerce Store
        </div>
      </SectionHeader>
      <TechnologiesCards />
    </OuterFlexComponent>
  </OuterComponent>
);

export default Technologies;

const TechnologiesCards: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  return (
    <div ref={ref} className="grid grid-cols-2 gap-4 w-full xs:grid-cols-1">
      {TechnologiesData?.content.technologies.map(
        (TechnologiesCard: cardContent, index: number) => (
          <div
            key={index}
            onClick={() => {
              window.open(TechnologiesCard.link, "_self");
            }}
          >
            <Card style="mt-0" isInView={isInView}>
              <div className="flex flex-col gap-5 lg:gap-[12px] p-4">
                <div className="w-[100px] lg:w-[80px] sm:w-[60px] h-[100px] lg:h-[80px] sm:h-[60px] relative rounded-2xl overflow-hidden">
                  <Image
                    blurDataURL="URL"
                    placeholder="blur"
                    fill
                    sizes=""
                    alt=""
                    src={TechnologiesCard.logo}
                  />
                </div>
                <H6
                  text={TechnologiesCard?.title}
                  classes="text-white w-[80%]"
                />
                <Description
                  children={null}
                  text={TechnologiesCard?.about}
                  classes="grow text-lg !font-normal"
                />
              </div>
            </Card>
          </div>
        )
      )}
    </div>
  );
};
