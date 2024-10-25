/**
 * This component contains each card of slider.
 */

import Description from "@components/basic-components/description";

import { ProcessServiceType } from ".";
import H5 from "@components/basic-components/headings/H5";
import { runSlider } from "./slider";
import data from "../../../data/process-data.json";

const ProcessServiceCard = ({
  industry,
  isLast,
  index,
}: {
  industry: ProcessServiceType;
  isLast: boolean;
  index: number;
}) => (
  <div
    className={`w-[318px] md:w-[300px] sm:w-[281px] xxl:w-[412px] cursor-pointer shrink-0 flex flex-col gap-[21px] slider-item active-slider-item z-10  pointer-events-auto`}
    onClick={() => {
      runSlider(index);
    }}
  >
    <div className="flex items-center">
      <div
        className={`w-[28px] h-[28px] shrink-0 rounded-full bg-[#282828] circle p-[3px] border-[3px] SliderCircle ${
          index == 0 && "p-[3px] !border-solid !border-primary"
        }`}
      >
        <div
          className={`w-full h-full rounded-full transition-all duration-500 ${
            index == 0 ? "bg-primary scale-[1]" : "scale-0"
          }`}
        ></div>
      </div>
      {index < data.length - 1 && (
        <div className="w-full h-[1px] bg-gradient-to-l from-[#d9d9d9] to-[#737373]"></div>
      )}
    </div>
    <div className={`w-fit pr-[37px] cursor-pointer  lg:pr-3`}>
      <div className=" flex w-fit flex-col gap-[12px] grow xs:p-1">
        <div className="flex gap-3 w-fit relative items-center overflow-visible ">
          <H5
            style="text-white  md:text-[18px] pr-6"
            text={industry.title}
          />
          {/* {isLast && ( */}
          <div
            className={`font-poppins absolute overflow-visible right-0 translate-x-[50px] w-[50px] items-center text-[30px] md:leading-5 md:text-base sm:text-sm text-white font-medium rocket flex scale-1 transition-all ease-in-out ${
              !isLast && "!scale-0"
            }`}
          >
            🚀
          </div>
          {/* )} */}
        </div>
        <Description
          children={null}
          text={industry.description}
          classes="w-full text-sm xxl:text-lg xs:px-0 grow md:text-[13px] !font-normal"
        />
      </div>
    </div>
  </div>
);

export default ProcessServiceCard;
