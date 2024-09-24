"use client";
const Card = dynamic(() => import("@components/basic-components/card"));
import Description from "@components/basic-components/description";
import H2 from "@components/basic-components/headings/H2";
import { useInView } from "@lib/use-in-view";
import data from "./data/where-shookshum-labs-stand.json";
import { useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

type PrimaryCard = {
  count: string;
  title: string;
  type: string;
  "card-position": string;
};
const primaryCards: PrimaryCard[] = data["primary-cards"];
const WhereWeAre: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      className="px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px] flex flex-col gap-[70px] md:gap-[50px] sm:gap-12 items-center bg-black overflow-hidden max-w-[1920px] mx-auto"
    >
      <div
        className={`w-[83%] xxl:w-[65%] xs:w-full xs:px-0 mx-auto text-center`}
      >
        <H2>
          <div className="w-full text-wrap  leading-[1.4] xs:tracking-tight">
            Today <i className="relative font-light">Sookshum Labs</i> Continues
            To Grow And Is{" "}
            <span className="relative">
              Trusted
              <span className="absolute bottom-3 lg:bottom-2 -left-0 w-full translate-y-[20px]">
                <LeadingUnderline />
              </span>
            </span>{" "}
            By Clients Globally For Delivering{" "}
            <span className="relative">
              Reliable
              <span className="absolute bottom-0 lg:bottom-1 left-0 w-full translate-y-[20px]">
                <GloballyUnderline />
              </span>
            </span>{" "}
            And Innovative Solutions
          </div>
        </H2>
      </div>

      <div className="flex flex-col gap-5 lg:gap-4 sm:gap-3">
        {primaryCards.map((primaryCard: PrimaryCard, index: number) => (
          <div
            key={index}
            className={`flex xs:flex-col gap-5 lg:gap-4 sm:gap-3 ${
              primaryCard["card-position"] == "right" &&
              "flex-row-reverse xs:flex-col-reverse"
            }`}
          >
            <div className="xxl:w-[34%] w-[37.73%] sm:w-[43%] xs:w-full shrink-0 ">
              <CardWithPrimaryBackground
                item={primaryCard}
                isInView={isInView}
              />
            </div>
            <div className="grow">
              <ReviewCard isInView={isInView} index={index} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhereWeAre;

const GloballyUnderline: React.FC = () => (
  <svg
    width="210"
    height="31"
    viewBox="0 0 210 31"
    fill="none"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 12C40.5 34.5 74 21.6489 74 9.00004C74 6.0001 76 -4 55.5 8.50004C37.6671 19.3738 71.5 26.6667 90 28C104.167 28.8334 128.5 25.7813 136 22.5C143.5 19.2188 136 9.50001 129.5 13.5C119.209 19.8327 129.01 27.4804 142 28C167 29 197 20.5 208 3.5"
      stroke="#E68624"
      strokeWidth="4"
    />
  </svg>
);

const LeadingUnderline: React.FC = () => (
  <svg
    width="196"
    height="23"
    viewBox="0 0 196 23"
    fill="none"
    className="w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 2C40.5 24.5 154 27 194.5 5" stroke="#E68624" strokeWidth="4" />
  </svg>
);

const ReviewCard: React.FC<{ isInView: boolean; index: number }> = (props) => {
  switch (props.index) {
    case 0:
      return (
        <DetailReviewCard1
          heading={"Over 8 Years of Excellence in Digital Innovation"}
          detail={
            "With over 8 years in business, we’ve built a solid foundation of expertise and trust, delivering cutting-edge solutions across web, ecommerce, and mobile platforms. Our journey has been defined by a passion for innovation and a commitment to meeting our clients' unique needs. We've partnered with businesses around the world, transforming ideas into powerful, scalable solutions that drive growth. Whether you're a startup or an established company, our experience ensures that we can tackle any challenge and deliver results that make a lasting impact."
          }
          isInView={props.isInView}
        />
      );
    case 1:
      return (
        <DetailReviewCard1
          heading={"170+ Projects Delivered with Precision and Excellence"}
          detail={
            "With over 170 successful projects under our belt, we have consistently delivered solutions that drive real results. Our track record reflects our ability to tackle diverse challenges, adapt to evolving technologies, and create custom solutions that fit our clients’ unique business needs. From small startups to global enterprises, we’ve partnered with companies across industries to build innovative web, ecommerce, and mobile platforms that not only meet but exceed expectations. Every project we take on is a testament to our focus on quality, collaboration, and long-term client success. rust us to bring the same level of dedication and precision to your next project."
          }
          isInView={props.isInView}
        />
      );
    case 2:
      return <DetailReviewCard3 isInView={props.isInView} />;
  }
};

const DetailReviewCard1: React.FC<{
  isInView: boolean;
  heading: string;
  detail: string;
}> = (props) => (
  <Card isInView={props.isInView} style="">
    <div className="flex flex-col gap-[53px] lg:gap-[37px] sm:gap-5 justify-between p-4 pb-0">
      <H2>
        <div className="w-full text-wrap lg:text-[36px] font-[400] sm:text-[24px] leading-[1.4] ">
          {props.heading}
        </div>
      </H2>
      {/* <div
        className={` bg-slider-bg-size bg-[100%_100%] cursor-pointer overflow-hidden flex flex-col gap-8 sm:gap-[15px] xs:gap-4 max-w-fit`}
      >
        <img
          height={400}
          width={400}
          src="/home/testimonials/stars.png"
          alt=""
          className="h-[24px] sm:h-[18px] w-fit xs:h-4 xs:w-fit"
        /> */}
      <div>
        <Description
          children={null}
          text={props.detail}
          classes="lg:pr-10 xs:pr-0 xs:!text-xs xs:w-full text-xl lg:text-base leading-6 font-[300] md:!text-base"
        />
      </div>
      {/* <div className="flex gap-6 items-center">
          <img
            height={400}
            width={400}
            src="/home/testimonials/client.png"
            alt=""
            className="h-12 w-12 xl:h-[46px] sm:w-[32px] sm:h-[32px] xl:w-[46px] rounded-full xs:w-8 xs:h-8"
          />
          <div className="flex flex-col gap-2 sm:gap-1 xs:gap-1">
            <H6 classes="text-white" text="Belinda Meyers" />
            <Description
              children={null}
              text="CEO of JD"
              classes="text-light"
            />
          </div>
        </div> */}
      {/* </div> */}
    </div>
  </Card>
);

const DetailReviewCard2: React.FC<{ isInView: boolean }> = (props) => (
  <Card isInView={props.isInView} style="">
    <div className="flex flex-col justify-between p-4 pb-0">
      <H2>
        <div className="w-full text-wrap lg:text-[36px] font-[400] sm:text-[24px] leading-[1.4] xxl:w-[70%]">
          $1B+ funding raised by our clients
        </div>
      </H2>
      <div className="px-3 lg:pt-[20px]">
        <div className="grid grid-cols-2 grid-rows-2 relative">
          {[0, 1, 2, 3].map((i) => (
            <H2 key={i}>
              <div className="w-full xxl:py-8 py-5 text-center">LOGO</div>
            </H2>
          ))}
          <div className="absolute top-[50%] translate-y-[-2px] w-full h-[2px] bg-gradient-to-r from-innerContainer via-gray-400 to-inner-innerContainer" />
          <div className="absolute left-[50%] top-0 translate-x-[-2px] w-[2px] h-full bg-gradient-to-b from-innerContainer via-gray-400 to-inner-innerContainer" />
        </div>
      </div>
    </div>
  </Card>
);

const DetailReviewCard3: React.FC<{ isInView: boolean }> = (props) => (
  <Card isInView={props.isInView} style=" !p-0">
    <div className="flex flex-col justify-between p-0">
      <div className="p-4">
        <H2>
          <div className="w-full lg:w-[80%] xs:w-full text-wrap lg:text-[36px] font-[400] xs:text-[24px] leading-[1.4] p-4 m:p-[9px] lg:p-[14px]">
            Global Client Partnerships
          </div>
        </H2>
      </div>
      <div className="w-full relative grow h-[305px] lg:h-[269px] xs:h-[239px] xxl:h-[390px] ">
        <Image
          width="2200"
          height="2200"
          src="/about-us/where-we-are/world-map.png"
          alt="world map"
          className="absolute right-0 h-full w-[800px]  lg:w-[700px] sm:top-0 sm:object-cover"
          blurDataURL="URL"
          placeholder="blur"
        />
      </div>
    </div>
  </Card>
);

const CardWithPrimaryBackground: React.FC<{
  isInView: boolean;
  item: PrimaryCard;
}> = (props) => (
  <Card
    isInView={props.isInView}
    style="!bg-orangeBackground h-full xs:min-h-[250px]"
  >
    <div className={`h-full flex flex-col p-4 pb-0 justify-between `}>
      {/* {props.item.type == "team" && <Contributors />} */}
      <div className="flex flex-col sm:gap-1 font-poppins font-medium !text-white xxl:w-[34%] w-[42%] lg:w-[63%] sm:w-[48%] xs:w-[37%]">
        <div className=" text-[66px] sm:text-[52px]">{props.item.count}</div>
        <span className="text-[20px] sm:text-[14px] -mt-[20px] leading-[1.4]">
          {" "}
          {props.item.title}
        </span>
      </div>
    </div>
  </Card>
);

const Contributors: React.FC = () => (
  <div className="flex -space-x-5 overflow-hidden">
    {[0, 1, 2, 3, 4].map((i: number) => (
      <img
        className="inline-block h-[78px] w-[78px] lg:w-[60px] lg:h-[60px] rounded-full"
        src="/about-us/where-we-are/team-member.png"
        alt="team-member"
        key={i}
      />
    ))}
  </div>
);
