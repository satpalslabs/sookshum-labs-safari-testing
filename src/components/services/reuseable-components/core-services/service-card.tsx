import Description from "@components/basic-components/description";
import H5 from "@components/basic-components/headings/H5";

import { serviceType } from ".";
import Card from "../../../basic-components/card";
import Image from "next/image";

function Service({
  service,
  isInView,
}: {
  service: serviceType;
  isInView: boolean;
}) {
  return (
    <div
      className={`mt-[73px] relative w-full group  z-0 cursor-pointer   rounded-[32px] sm:rounded-[20px]  p-[1px] bg-viewportBorder transition-all hover:bg-gradient-to-br  hover:from-borderPrimary hover:via-transparent hover:to-borderPrimary duration-1000 ${
        isInView
          ? `bg-viewportBorder  grayscale-0 `
          : "bg-transparent grayscale"
      }`}
    >
      <div className="w-full h-full relative z-20 overflow-hidden rounded-[32px] bg-black sm:rounded-[20px] ">
        <div
          className={`w-full h-full bg-innerContainer p-4 pb-8 sm:p-[9px] sm:pb-[14px] lg:p-[14px] lg:pb-[23px] relative shadow-buttonInset rounded-[32px] sm:rounded-[20px] flex flex-col  pt-[98px] lg:pt-[98px] sm:pt-[91px] grow `}
        >
          <div className=" flex flex-col px-4 md:px-2 sm:px-[6px] grow h-full gap-[0.5rem] sm:h-auto sm:gap-[0.5rem]">
            <H5 text={service.count} style="!leading-[1.4]" />
            <Description
              children={null}
              text={service.about}
              classes="!font-normal"
            />
          </div>
        </div>
      </div>
      <div className="transition-all absolute z-50 top-0 w-full flex justify-center translate-x-[-3%] xs:translate-x-[-1%] ">
        <Image
          height={400}
          width={400}
          className="h-[165px] lg:h-[132px] xxl:-mt-[15%] sm:h-[108px] xs:-mt-[10%] lg:-mt-[20%] w-auto object-cover -mt-[15%]"
          alt="image"
          src={service.path}
        />
      </div>
      <div className="absolute z-[40] bg-transparent transition-all duration-1000 top-0 left-0 w-full h-full group-hover:block group-hover:bg-gradientOnHover rounded-[32px] sm:rounded-[20px]"></div>
    </div>
  );
}

export default Service;
