/**
 * This file contains each card of slider.
 */

import Description from "@components/basic-components/description";
import H6 from "@components/basic-components/headings/H6";

import { ClientReview } from ".";
import Image from "next/image";

const Testimonials = ({
  review,
  isInView,
  id,
}: {
  review: ClientReview;
  isInView: boolean;
  id: string;
}) => (
  <div
    className={`relative w-fit group1 h-full z-0 cursor-pointer overflow-hidden rounded-[32px] sm:rounded-[20px]  p-[1px] bg-viewportBorder transition-all hover:bg-gradient-to-br  hover:from-borderPrimary hover:via-transparent hover:to-borderPrimary duration-1000 ${
      isInView ? `bg-viewportBorder  grayscale-0 ` : "bg-transparent grayscale"
    }`}
  >
    <div className="w-fit h-full relative z-50 overflow-hidden rounded-[32px] bg-black sm:rounded-[20px] ">
      <div
        id={id}
        style={{
          backgroundImage:
            "linear-gradient(to top left,transparent,transparent 50%,rgba(40, 40, 40, 0.7) 50%, rgba(230, 134, 36, 0.0) 86%, rgba(230, 134, 36, 0.23) 100%)",
          filter: isInView ? "grayscale(0)" : "grayscale(1)",
        }}
        className={`slideCard h-[360px] max-w-fit w-max  min-w-[408px] md:h-[300px] xs:h-[200px] p-4 py-8 bg-innerContainer shadow-buttonInset rounded-[32px] sm:rounded-[20px]  transition-all duration-500 bg-slider-bg-size bg-[100%_100%] hover:bg-[0%_0%] cursor-pointer overflow-hidden flex flex-col xs:rounded-2xl gap-6 xs:gap-4 lg:p-3 lg:py-4 lg:rounded-[26px] xs:p-[10px]`}
      >
        <Image
          height={72}
          width={600}
          src="/home/testimonials/stars.png"
          alt="image"
          className="h-[24px] w-[200px] pl-3 xs:h-4 xs:w-[150px]"
          blurDataURL="URL"
          placeholder="blur"
          loading="eager" // Lazy load the image
          priority={false}
        />
        <div className="px-3 pb-0 grow">
          <Description
            children={null}
            text={`"${review.review}"`}
            classes={`!pr-0 xs:!text-xs w-fit text-wrap text-xl  ${
              review.review.split(" ").length > 80
                ? "max-w-[680px] md:max-w-[670px] xs:max-w-[600px]"
                : review.review.split(" ").length > 50
                ? "max-w-[480px] xs:max-w-[380px]"
                : "max-w-[400px] xs:max-w-[330px]"
            } !text-base !text-h3_heading leading-6 font-[300] md:!text-sm xs:!text-[10px] !font-light`}
          />
        </div>
        <div className="pl-3 flex gap-6 ">
          <Image
            width={130}
            height={80}
            src={review["client-details"]["client-photo"]}
            alt="client-photo"
            className="h-12 w-12 xl:h-[46px] xl:w-[46px] rounded-full xs:w-8 xs:h-8"
          />
          <div className="flex flex-col justify-between">
            <H6
              classes="text-white"
              text={review["client-details"]["client-name"]}
            />
            <Description
              children={null}
              text={review["client-details"]["client-profession"]}
              classes="!text-secondary !font-light xs:!text-[10px]"
            />
          </div>
        </div>
      </div>
    </div>
    {/* <div className="absolute z-[999] bg-transparent transition-all duration-1000 top-0 left-0 w-full h-full group-hover:block bg-gradient-to-r group1-hover:bg-gradientOnHover "></div> */}
  </div>
);

export default Testimonials;
