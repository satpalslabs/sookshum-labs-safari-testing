/**
 * This component contains the text container of work-together section.
 */

import CheckIcon from "@components/basic-components/check-icon";
import H2 from "@components/basic-components/headings/H2";
import PrimaryButton from "@components/basic-components/primary-button";
import data from "../../data/lets-connect.json";
import H6 from "@components/basic-components/headings/H6";
const letsConnectListData: string[] = data.data;
const TextContainer: React.FC = () => (
  <div className="flex  max-w-[58.6%] sm:max-w-[63%] xs:max-w-full flex-col gap-5 sm:gap-4 xs:gap-[17px] pl-[69px] grow md:pl-[51px] sm:px-[28px] sm:py-[34px] h-fit py-[72px] xs:py-[28px] xs:px-6 ">
    <div className="flex xxl:w-[60%] w-[88.6%] lg:w-full flex-col gap-5 md:gap-3 xs:gap-[12px]">
      <H2>
        <div className="text-wrap text-5xl lg:text-4xl sm:text-[26px] w-full leading-[60.6px] lg:leading-[45px] sm:leading-[33px] lg:tracking-normal font-semibold tracking-tight">
          Let’s build something awesome together
        </div>
      </H2>
      <div className="flex flex-col gap-[12px] items-start sm:grow sm:w-fit sm:text-nowrap xs:w-full">
        {letsConnectListData.map((listItem: string, index: number) => (
          <div
            className="flex gap-[21px] lg:gap-[18px] sm:gap-[14px] items-center"
            key={index}
          >
            <div className="flex items-center justify-center w-[27px] h-[27px] sm:w-[24px] sm:h-[24px] bg-primary rounded-full">
              <CheckIcon />
            </div>
            <H6 classes="!text-white xs:!text-[16px]" text={listItem} />
          </div>
        ))}
      </div>
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
