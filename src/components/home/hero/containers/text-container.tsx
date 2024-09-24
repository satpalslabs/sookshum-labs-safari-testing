/**
 * This component contains the text container of hero section.
 */

const PrimaryButton = dynamic(
  () => import("@components/basic-components/primary-button")
);

import dynamic from "next/dynamic";
import Image from "next/image";
const Button = dynamic(() => import("./button"));

const TextContainer: React.FC = () => (
  <div className="xxl:pb-24 pb-20 lg:pb-16 md:pb-14 sm:pb-10 xs:pb-8 pl-[81px] pt-[22px] flex flex-col gap-[14px] z-10 lg:pl-10 xs:pl-5">
    <Button />
    <div className="flex flex-col gap-[10px]">
      <div className="bg-gradientText bg-clip-text text-transparent text-[67px] 2xs:text-[30px] sm:text-[48px] lg:text-[57px] font-poppins font-[600] leading-[111px] 2xs:leading-[46px] sm:leading-[76px] lg:leading-[92px] 2xs:w-[98%] sm:w-[500px] md:w-[800px] w-[806px]  lg:w-[800px] tracking-tight relative">
        We deliver top notch Custom digital Solutions
        <span>
          <Image
            src="/huome/hero/down_line.svg"
            alt="down_line"
            className="absolute w-[33%] left-[52%] sm:w-[40%] 2xs:w-[30%] 2xs:left-[45%] 2xs:top-[40px]  sm:left-[55%] md:left-[40%] lg:left-[40%] top-[95px] sm:top-[62px] lg:top-[82px] "
            height={100}
            width={100}
            blurDataURL="URL"
            placeholder="blur"
          />
        </span>
      </div>
      <div className="w-[581px] sm:max-w-[442px] xs:max-w-[352px] font-poppins font-medium xs:font-normal text-[22px] xs:text-sm sm:text-lg tracking-tight leading-8 text-light 2xs:w-[95%]">
        We are a reliable technology partner to meet your custom software
        solution needs
      </div>
    </div>
    <PrimaryButton
      icon={true}
      text="Request a quote"
      style="md:mt-[30px] mt-[66px] cursor-pointer"
      link="/contact-us"
    />
  </div>
);

export default TextContainer;
