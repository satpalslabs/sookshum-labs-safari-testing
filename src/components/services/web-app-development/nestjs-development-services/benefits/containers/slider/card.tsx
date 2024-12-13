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
    className={`shadow-buttonInset h-full rounded-[32px] sm:rounded-[24px]   cursor-pointer relative w-full group  z-0 overflow-hidden    bg-viewportBorder transition-all hover:bg-gradient-to-br  hover:from-borderPrimary hover:via-transparent hover:to-borderPrimary duration-1000 p-[1px] ${
      isInView ? "bg-viewportBorde grayscale-0" : "bg-transparent grayscale"
    }   `}
  >
    {/*     className={`shadow-buttonInset transition-all duration-1000 p-6 pb-12 lg:pb-6 h-full rounded-[32px] sm:rounded-[24px] border-[1.5px]  cursor-pointer hover:bg-gradientOnHover ${
      isInView
        ? "border-viewportBorder grayscale-0"
        : "border-transparent grayscale"
 */}
    <div
      className={`rounded-[32px] sm:rounded-[24px]  p-0 w-full sm:w-full h-full overflow-hidden bg-black `}
    >
      <div
        className={`h-full  p-6 pb-12 lg:pb-6 relative shadow-buttonInset rounded-[32px] sm:rounded-[24px] flex flex-col w-full ${
          (index + 1) % 2 == 0 ? "bg-gradientOnHover" : "bg-[#28282866]"
        } `}
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
    </div>
    <div className="absolute z-20 bg-transparent transition-all duration-1000 top-0 left-0 w-full h-full group-hover:block group-hover:bg-gradientOnHover "></div>
  </div>
);

export default Benefit;
