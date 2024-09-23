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
    id={id}
    style={{
      backgroundImage:
        "linear-gradient(to top left,transparent,transparent 50%,rgba(40, 40, 40, 0.7) 50%, rgba(230, 134, 36, 0.0) 86%, rgba(230, 134, 36, 0.23) 100%)",
      filter: isInView ? "grayscale(0)" : "grayscale(1)",
      border: isInView
        ? "2px solid var(--view-port-border)"
        : "2px solid transparent",
    }}
    className={`slideCard h-[360px] max-w-fit w-max  min-w-[408px] md:h-[300px] xs:h-[200px] p-4 py-8 bg-innerContainer shadow-buttonInset rounded-[32px] transition-all duration-500 bg-slider-bg-size bg-[100%_100%] hover:bg-[0%_0%]  border border-transparent cursor-pointer hover:!border-borderPrimary overflow-hidden flex flex-col xs:rounded-2xl gap-6 xs:gap-4 lg:p-3 lg:py-4 lg:rounded-[26px] xs:p-[10px]`}
  >
    <Image
      height={72}
      width={600}
      src="/home/testimonials/stars.png"
      alt=""
      className="h-[24px] w-[200px] pl-3 xs:h-4 xs:w-[150px]"
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
        } !text-base leading-6 font-[300] md:!text-sm xs:!text-[10px] !font-light`}
      />
    </div>
    <div className="pl-3 flex gap-6 ">
      <img
        src={review["client-details"]["client-photo"]}
        alt=""
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
          classes="text-light !font-light xs:!text-[10px]"
        />
      </div>
    </div>
  </div>
);

export default Testimonials;
