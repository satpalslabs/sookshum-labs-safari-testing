/**
 * This component contains the text container of work-together section.
 */

import Description from "@components/basic-components/description";
import H2 from "@components/basic-components/headings/H2";
import PrimaryButton from "@components/basic-components/primary-button";

const TextContainer: React.FC = () => (
  <div className="flex max-w-[58.6%] sm:max-w-[63%] xs:max-w-full flex-col gap-5 sm:gap-4 xs:gap-[17px] pl-[69px] grow md:pl-[51px] sm:px-[28px] sm:py-[34px] h-fit py-[72px] xs:py-[28px] xs:px-6 ">
    <div className="flex xxl:w-[60%] w-[88.6%] lg:w-full flex-col gap-5 md:gap-3 xs:gap-[12px]">
      <H2>
        <div className="text-wrap text-5xl lg:text-4xl sm:text-[26px] w-full leading-[60.6px] lg:leading-[45px] sm:leading-[33px] lg:tracking-normal font-semibold tracking-tight">
          Want to stand out in a crowded marketplace?{" "}
        </div>
      </H2>
      <Description
        children={null}
        text="Our app development team builds scalable, secure, and reliable mobile applications for your business."
        classes={
          "text-lg w-full !font-normal text-white leading-[32px] lg:text-base xs:w-full"
        }
      />
    </div>
    <PrimaryButton
      icon={true}
      text="Let’s Connect"
      style="md:mt-[30px] xs:mt-0"
      link="/contact-us"
    />
  </div>
);

export default TextContainer;
