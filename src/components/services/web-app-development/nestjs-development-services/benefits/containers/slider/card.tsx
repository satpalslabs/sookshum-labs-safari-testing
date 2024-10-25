/**
 * This component contains each card of slider.
 */

import dynamic from "next/dynamic";
const Description = dynamic(
  () => import("@components/basic-components/description")
);
const H4 = dynamic(() => import("@components/basic-components/headings/H4"));
import { benefit } from ".";

const Benefit: React.FC<{
  isInView: boolean;
  data: benefit;
  index: number;
}> = ({ isInView, data, index }) => (
  <div
    className={`shadow-buttonInset transition-all duration-1000 p-6 pb-12 lg:pb-6 h-full rounded-[32px] sm:rounded-[24px] border-[1.5px]  cursor-pointer hover:bg-gradientOnHover ${
      isInView
        ? "border-viewportBorder grayscale-0"
        : "border-transparent grayscale"
    }  ${(index + 1) % 2 == 0 ? "bg-gradientOnHover" : "bg-[#28282866]"} } `}
    style={{
      boxShadow: "1.75px 3.49px 13.98px 0px #F8F8F80F inset",
      backdropFilter: "blur(87.34871673583984px)",
      WebkitBackdropFilter: "blur(17.3487px)",

    }}
  >
    <div className="flex flex-col gap-5 xxl:gap-8 sm:gap-[15px]">
      <H4
        style="!leading-[1.25] !text-[20px] sm:!text-sm !text-secondary"
        text={`00${index + 1}`}
      />
      <div className="flex flex-col gap-3 sm:gap-[10px] grow">
        <H4
          style="!leading-[1.25] !text-white !text-[20px] sm:!text-sm"
          text={data.title}
        />
        <Description
          children={null}
          classes="!text-base !text-white sm:!text-[13px] w-full sm:!tracking-tight !font-[400]"
          text={data.description}
        />
      </div>
    </div>
  </div>
);

export default Benefit;
