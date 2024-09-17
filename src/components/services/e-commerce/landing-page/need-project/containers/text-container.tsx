/**
 * This component contains the text container of work-together section.
 */

import H2 from "@components/basic-components/headings/H2";
import H6 from "@components/basic-components/headings/H6";
import PrimaryButton from "@components/basic-components/primary-buttom";

const TextContainer: React.FC = () => (
  <div className="flex  w-[58.6%] sm:w-[83%] xs:w-full flex-col gap-5 sm:gap-4 xs:gap-[17px] pl-[69px] grow md:pl-[51px] sm:px-[28px] sm:py-[34px] h-fit py-[72px] xs:py-[28px] xs:px-6 ">
    <div className="flex xxl:w-[60%] w-[88.6%] lg:w-full flex-col gap-5 md:gap-3 xs:gap-[12px]">
      <H6 text="Ready to get started?" classes="text-white" />
      <H2>
        <div className="text-wrap text-5xl lg:text-4xl sm:text-[26px] w-full leading-[60.6px] lg:leading-[45px] sm:leading-[33px] lg:tracking-normal font-semibold tracking-tight">
          More customers, higher conversion rates, and increased revenue-what’s
          not to like?
        </div>
      </H2>
    </div>
    <PrimaryButton
      icon={true}
      text="Let’s Connect"
      style="md:mt-[30px] xs:mt-0"
      link="/contact"
    />
  </div>
);

export default TextContainer;
