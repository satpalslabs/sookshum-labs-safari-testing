"use client";
import DarkButton from "@components/basic-components/button";
import Description from "@components/basic-components/description";
import H2 from "@components/basic-components/headings/H2";
import PrimaryButton from "@components/basic-components/primary-button";
import { useEffect, useRef } from "react";
import { useInView } from "@lib/use-in-view";
import { dataItemType } from ".";

function Technology({ item }: { item: dataItemType }) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      videoRef.current?.play();
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className={`flex justify-between h-fit w-full py-[90px] transition-all  duration-1000 bg-transparent xs:h-fit ${
        item["image-position"] != "right" ? "flex-row-reverse" : ""
      } ${isInView ? "grayscale-0" : "grayscale"}
    xs:flex-col-reverse xs:gap-8 xs:pt-0 xs:pb-[60px] items-center`}
    >
      <div
        className={` ${
          item["image-position"] == "right"
            ? "max-w-[716px] lg:max-w-[548px] sm:max-w-[401px] xs:max-w-full"
            : "max-w-[567px] lg:max-w-[489px] sm:max-w-[400px] xs:max-w-full"
        } `}
      >
        <div
          className={`flex flex-col w-fit gap-5  lg:gap-4 grow-0 md:gap-3  h-fit xs:text-left xs:items-start xs:pt-0 ${
            item["image-position"] == "right"
              ? "max-w-full"
              : "max-w-full xs:w-full xs:float-left float-right"
          }`}
        >
          <DarkButton
            text={item["top-heading-button"]}
            style={` xs:!float-left !font-normal ${
              item["image-position"] == "right" ? "!float-left " : "!float-left"
            }`}
          />
          <H2>
            <div
              className={`xs:w-full max-w-full leading-tight text-wrap
               ${
                 item["image-position"] == "right"
                   ? "float-left w-[716px] lg:w-[548px] md:w-[411px]"
                   : "float-left w-[616px] lg:w-[588px] md:w-[441px] sm:w-[98%] xs:w-full"
               }`}
              dangerouslySetInnerHTML={{ __html: item.heading }}
            />
          </H2>
          <Description
            children={null}
            text={item.description}
            classes={` xs:w-full  xs:float-left w-full"
            }`}
          />
          <PrimaryButton
            style="mt-[60px] xs:mt-[42px] bg-darkOrange shadow-shadowOrange"
            text="Learn more"
            icon={false}
            link={item.link}
          />
        </div>
      </div>
      <div className=" w-fit">
        {/* <Image
          width="900"
          height="900"
          alt="image"
          className="h-auto w-full xs:mx-auto my-auto"
          src={item["image-path"]}
        /> */}
        <video
          muted
          loop
          ref={videoRef}
          playsInline
          preload="metadata"
          // poster={"/home/hero/fallback.webp"}
          className="h-full object-cover w-auto xs:mx-auto my-auto"
        >
          <source src={item["video-path"]} type="video/webm" />
        </video>
      </div>
    </div>
  );
}

export default Technology;
