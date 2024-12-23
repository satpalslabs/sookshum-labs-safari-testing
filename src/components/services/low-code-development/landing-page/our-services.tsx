"use client";
import SectionHeader from "@components/basic-components/section-header";
import { useRef, useState } from "react";
import data from "./data/our-services.json";
import { useInView } from "@lib/use-in-view";
const Card = dynamic(() => import("@components/basic-components/card"));
import H5 from "@components/basic-components/headings/H5";
import { RightAngleArrow } from "@components/header/containers/services";
import { Button } from "@mui/material";
import Description from "@components/basic-components/description";
import Image from "next/image";
import dynamic from "next/dynamic";
import OuterFlexComponent from "@components/basic-components/main-flex-container";
import OuterComponent from "@components/basic-components/outer-component";

type ServiceType = {
  "services-title": string;
  "detailed-description": string;
  "image-url": string;
  color: string;
};

const services: ServiceType[] = data["our-services"];
const Services: React.FC = () => (
  <OuterComponent>
    <OuterFlexComponent>
      <SectionHeader
        id="our-services"
        buttonText="Our Services"
        description="We bring your idea to life on time and on budget"
        style="w-[770px] text-wrap xs:w-full"
      >
        <div className="w-[1000px] leading-[1.4] capitalize lg:w-[735px] sm:w-[600px] xs:w-full xxl:w-[1060px] text-center text-wrap mx-auto">
          What we do
        </div>
      </SectionHeader>
      <ServiceCards />
    </OuterFlexComponent>
  </OuterComponent>
);

export default Services;

const ServiceCards: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div className="flex gap-4 sm:gap-3 w-full h-full" ref={ref}>
      <div className="w-[46.8%] flex flex-col gap-4 sm:gap-2 shrink-0 h-full grow-0 xs:w-full">
        {services.map((service: ServiceType, index: number) => (
          <ServiceCard
            isInView={isInView}
            index={index}
            activeCardIndex={activeCardIndex}
            setActiveCardIndex={setActiveCardIndex}
            service={service}
            key={index}
          />
        ))}
      </div>
      <Card
        style="grow p-[28px] lg:p-[28px] sm:px-6 sm:pt-6 sm:pb-4 xs:hidden"
        isInView={isInView}
      >
        <div className="flex flex-col  gap-5 h-full justify-between">
          <div className="flex flex-col gap-5">
            <H5
              text={services[activeCardIndex]["services-title"]}
              style={"!text-white"}
            />
            <Description
              text={services[activeCardIndex]["detailed-description"]}
              children={null}
              classes="text-lg pr-6 lg:pr-0 !font-normal"
            />
          </div>
          <Image
            blurDataURL="URL"
            placeholder="blur"
            height="2200"
            width="2200"
            alt="image"
            src={services[activeCardIndex]["image-url"]}
            className="grow mx-auto h-[340px] w-auto lg:h-[216px] sm:h-[173px] sm:object-contain"
          />
        </div>
      </Card>
    </div>
  );
};

type props = {
  isInView: boolean;
  index: number;
  activeCardIndex: number;
  setActiveCardIndex: React.Dispatch<React.SetStateAction<number>>;
  service: ServiceType;
};

const ServiceCard: React.FC<props> = (props) => (
  <div
    className={`relative w-full group z-0 max-h-fit cursor-pointer overflow-hidden rounded-[32px] sm:rounded-[20px]  p-[1px] transition-all hover:bg-gradient-to-br  hover:from-borderPrimary hover:via-transparent hover:to-borderPrimary duration-1000 ${
      props.index == props.activeCardIndex
        ? `bg-gradient-to-br from-borderPrimary via-transparent    `
        : " bg-viewportBorder  "
    }
     ${props.isInView ? "grayscale-0" : "grayscale"}`}
    onClick={() => {
      props.setActiveCardIndex(props.index);
    }}
  >
    <div className="w-full h-fit relative z-50 overflow-hidden rounded-[32px] bg-black sm:rounded-[20px] ">
      <Button
        className={`!w-full !p-0 !text-primary xs:!text-black !bg-innerContainer !normal-case !text-left `}
      >
        <div className="w-full flex flex-col gap-3 p-[32px] lg:p-6 sm:p-5">
          <div className="flex gap-5 lg:gap-3 sm:gap-2 w-full items-center">
            <div
              className={`flex w-[60px] h-[60px]  lg:w-[42px] lg:h-[42px] justify-center rounded-full items-center`}
              style={{
                background: props.service.color,
              }}
            >
              <CodeIcon classes=" w-[24px] h-[24px] lg:w-[14px] lg:h-[14px]" />
            </div>
            <H5
              text={props.service["services-title"]}
              style={"grow !text-white"}
            />
            <RightAngleArrow className={"stroke-white"} />
          </div>

          <div className="hidden xs:flex flex-col  gap-2 h-full justify-center">
            <Description
              text={props.service["detailed-description"]}
              children={null}
              classes="text-lg pr-6 lg:pr-0 !font-normal !text-h3-heading"
            />
            <Image
              blurDataURL="URL"
              placeholder="blur"
              height="2200"
              width="2200"
              alt="image"
              src={props.service["image-url"]}
              className="w-fit grow mx-auto"
            />
          </div>
        </div>
      </Button>
    </div>
    <div
      className={`absolute z-[999] bg-transparent transition-all duration-1000 top-0 left-0 w-full h-full  ${
        props.index == props.activeCardIndex
          ? `bg-gradientOnHover `
          : "  hover:bg-gradientOnHover"
      }`}
    ></div>
  </div>
);

const CodeIcon: React.FC<{ classes: string }> = ({ classes }) => (
  <svg
    width="22"
    height="20"
    viewBox="0 0 22 20"
    fill="none"
    className={classes}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 7H1M13 15.5L15.5 13L13 10.5M9 10.5L6.5 13L9 15.5M1 5.8L1 14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19H16.2C17.8802 19 18.7202 19 19.362 18.673C19.9265 18.3854 20.3854 17.9265 20.673 17.362C21 16.7202 21 15.8802 21 14.2V5.8C21 4.11984 21 3.27977 20.673 2.63803C20.3854 2.07354 19.9265 1.6146 19.362 1.32698C18.7202 1 17.8802 1 16.2 1L5.8 1C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8Z"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { CodeIcon };
