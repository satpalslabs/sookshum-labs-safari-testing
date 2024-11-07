"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useInView } from "framer-motion";
import { useRef } from "react";
import data from "./data/choose-us.json";
const Card = dynamic(() => import("@components/basic-components/card"));
import Description from "@components/basic-components/description";
import H6 from "@components/basic-components/headings/H6";
import Image from "next/image";
import H2 from "@components/basic-components/headings/H2";
import CheckIcon from "@components/basic-components/check-icon";
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
type ChooseUs = {
  heading: string;
  description: string;
  imageUrl: string;
};
const whyUsData: ChooseUs[] = data.services;
const chooseUsPoints: string[] = data["points-to-choose-us"];
const ChooseUs = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div>
      <OuterComponent>
        <div className="flex items-center bg-black overflow-hidden max-w-[1920px] mx-auto">
          <div className="flex sm:flex-col gap-[80px] md:gap-[60px] sm:gap-12 justify-between ">
            <H2>
              <div className="text-wrap text-white text-[47px] lg:text-[36px] sm:text-[26px] leading-[1.1] w-[590px] xxl:w-[90%] lg:w-[80%] sm:w-full lg:tracking-normal tracking-tight">
                Our team can design and develop mobile apps to cater individual
                workflow and requirements of your company. Here’s how we can
                help you:
              </div>
            </H2>
            <div className="flex flex-col justify-between w-[35%] sm:w-full sm:gap-[30px] lg:pr-10 shrink-0">
              {chooseUsPoints.map((point: string, ind: number) => (
                <div className="flex gap-[21px] sm:gap-3" key={ind}>
                  <div className="flex shrink-0 items-center justify-center w-[27px] h-[27px] lg:w-[22px] lg:h-[22px] lg:p-1 bg-primary rounded-full">
                    <CheckIcon />
                  </div>

                  <Description
                    classes="!text-white leading-[1.4] !font-normal sm:text-[16px] sm:leading-[1.4] !font-normal"
                    text={null}
                  >
                    <>
                      <div>{point}</div>
                      {ind == 0 && (
                        <i>
                          * depending on the complexity of the app and features
                          involved
                        </i>
                      )}
                    </>
                  </Description>
                </div>
              ))}
            </div>
          </div>
        </div>
      </OuterComponent>

      <OuterComponent>
        <OuterFlexComponent>
          <SectionHeader
            id="why-us"
            buttonText="Why us?"
            description="Whether you want to consult and idea, add missing capabilities, quickly expand your team, or hand over a project - we’ve got your covered. "
            style="w-[900px] lg:w-[50%] sm:w-[65%] xs:w-full "
          >
            <div className="w-[80%] sm:w-[90%] text-wrap xs:w-full text-center mx-auto xs:text-wrap leading-[1.4]">
              Why <span className="italic font-light">Choose Us </span> for App
              Development Services?
            </div>
          </SectionHeader>
          <div ref={ref}>
            <ChooseUsCards isInView={isInView} />
          </div>
        </OuterFlexComponent>
      </OuterComponent>
    </div>
  );
};

export default ChooseUs;

const ChooseUsCards: React.FC<{ isInView: boolean }> = ({ isInView }) => (
  <div className="w-full flex flex-col gap-4">
    <div className="grid grid-cols-3 gap-4 w-full xs:grid-cols-1">
      {[0, 1, 2].map((indexCard: number) => (
        <ChooseUsCard isInView={isInView} ind={indexCard} key={indexCard} />
      ))}
    </div>
    <div className="grid grid-cols-2 gap-4 w-full xs:grid-cols-1">
      {[3, 4].map((indexCard: number) => (
        <ChooseUsCard isInView={isInView} ind={indexCard} key={indexCard} />
      ))}
    </div>
  </div>
);

const ChooseUsCard: React.FC<{ isInView: boolean; ind: number }> = ({
  isInView,
  ind,
}) => (
  <Card style="mt-0" isInView={isInView}>
    <div
      className={`flex flex-col gap-[65px] ${
        ind > 2 ? "lg:gap-3" : "lg:gap-[92px]"
      } p-4 pb-0 sm:gap-2 h-full`}
    >
      <div className="grow">
        <Image
          blurDataURL="URL"
          placeholder="blur"
          src={whyUsData[ind].imageUrl}
          alt={whyUsData[ind].heading}
          height="2200"
          width="2200"
          className="relative w-[120px] lg:w-[80px] sm:w-[100px] h-[120px] lg:h-[80px] sm:h-[100px]"
        />
      </div>
      <div className="flex flex-col gap-6 lg:gap-3 p-4 lg:p-0 pb-0 sm:gap-2 ">
        <H6
          text={whyUsData[ind].heading}
          classes="!text-white w-[80%] grow xxl:text-3xl md:text-[20px] md:w-full md:leading-[1.2] leading-[1.6]"
        />
        <Description
          children={null}
          text={whyUsData[ind].description}
          classes="grow-0 h-fit text-lg"
        />
      </div>
    </div>
  </Card>
);
