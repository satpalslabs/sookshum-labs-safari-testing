/**
 * This component contains the text container of work-together section.
 */

import H2 from "@components/basic-components/headings/H2";
import PrimaryButton from "@components/basic-components/primary-button";

const TextContainer: React.FC = () => (
  <div className="flex  w-[58.6%] sm:w-[83%] xs:w-full flex-col gap-5 sm:gap-4 xs:gap-[17px] pl-[69px] grow md:pl-[51px] sm:px-[28px] sm:py-[34px] h-fit py-[72px] xs:py-[28px] xs:px-6 ">
    <div className="flex xxl:w-[60%] w-[88.6%] lg:w-full flex-col gap-5 md:gap-3 xs:gap-[12px]">
      <H2>
        <div className="text-wrap text-5xl lg:text-4xl sm:text-[26px] w-full leading-[60.6px] lg:leading-[45px] sm:leading-[33px] lg:tracking-normal font-semibold tracking-tight">
        Get in Touch.<br />
        Let’s discuss your idea!
        </div>
      </H2>
    </div>
    <PrimaryButton
      icon={true}
      text="Get In Touch"
      style="md:mt-[30px] xs:mt-0"
      link="/contact-us"
    />
  </div>
);

export default TextContainer;
