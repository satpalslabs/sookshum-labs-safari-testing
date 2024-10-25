/**
 * This client component contains a slider.
 */

import data from "../../data/index.json";
import H5 from "@components/basic-components/headings/H5";
import Description from "@components/basic-components/description";
// Child components
export type ProcessServiceType = {
  title: string;
  description: string;
};
export default function Slider() {
  return (
    <div className="flex flex-col gap-[80px] xs:gap-[30px] sm:gap-[50px] lg:gap-[60px] w-full justify-center sm:pt-[15px] sm:overflow-x-auto overflow-visible no-scrollbar">
      <div className="w-fit relative mx-auto">
        <div className="xxl:w-[calc(100%-340px)] w-[calc(100%-300px)] lg:w-[calc(100%-220px)] sm:w-[calc(100%-200px)] h-[1px] bg-gradient-to-r from-black to-white -z-10"></div>
        <div className="flex gap-[30px] lg:gap-[17px] w-fit Slider transition-all ease-out duration-[0.5s] px-[80px] lg:px-[44px] sm:px-[30px] select-none	touch-pan-x -mt-[14px] ">
          {data.map((item: ProcessServiceType, index: number) => (
            <div key={index} className="xxl:w-[285px] w-[229px] lg:w-[175px] flex flex-col gap-5">
              <div
                className={`w-[28px] h-[28px] text-white text-xs font-poppins font-medium flex items-center justify-center shrink-0 rounded-full bg-[#282828] circle p-[3px] border-[3px] SliderCircle `}
              >
                {index + 1}
              </div>
              <div className="flex flex-col gap-3">
                <H5
                  style="!text-white  md:text-[18px] pr-6"
                  text={item.title}
                />
                <Description
                  children={null}
                  text={item.description}
                  classes="w-full text-sm xxl:text-lg xs:px-0 grow md:text-[13px] !font-normal"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
