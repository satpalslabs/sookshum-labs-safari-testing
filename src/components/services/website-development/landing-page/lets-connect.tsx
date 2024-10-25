/**
 * This component contains the work together section.
 */
import H2 from "@components/basic-components/headings/H2";
import PrimaryButton from "@components/basic-components/primary-button";
import data from "./data/lets-connect.json";
import H5 from "@components/basic-components/headings/H5";
import CheckIcon from "@components/basic-components/check-icon";
import OuterComponent from "@components/basic-components/outer-component";

let letsConnectListData: string[] = data.data;
const LetsConnect: React.FC = () => (
  <div id="connect">
    <OuterComponent>
      <TextContainer />
    </OuterComponent>
  </div>
);

export default LetsConnect;

const TextContainer: React.FC = () => (
  <div className="shadow-buttonInset bg-innerContainer rounded-[32px] sm:rounded-[20px] flex xs:flex-col items-center px-[69px] md:px-[41px] md:py-[48px] sm:px-[41px] sm:py-[34px] h-fit py-[72px] xs:py-[28px] xs:px-6 xs:gap-[40px]">
    <div className="flex flex-col gap-5 sm:gap-4 xs:gap-[32px] justify-between xxl:w-[65%]">
      <div className="w-[60%] xs:w-full">
        <H2>
          <div className="text-wrap text-5xl lg:text-4xl sm:text-[26px] w-full leading-[60.6px] xs:text-[36px] xs:leading-[1.3] lg:leading-[45px] sm:leading-[33px] lg:tracking-normal font-semibold tracking-tight">
            Business outcomes you will get:
          </div>
        </H2>
      </div>
      <PrimaryButton
        icon={true}
        text="Let’s Connect"
        style="md:mt-[30px] xs:mt-0"
        link="/contact-us"
      />
    </div>
    <div className="flex flex-col gap-[30px] items-start sm:grow sm:w-fit sm:text-nowrap xs:w-full">
      {letsConnectListData.map((listItem: string, index: number) => (
        <div className="flex gap-[21px] items-center" key={index}>
          <div className="flex items-center justify-center w-[27px] h-[27px] bg-primary rounded-full">
            <CheckIcon />
          </div>
          <H5 style="!text-white xs:!text-[16px]" text={listItem} />
        </div>
      ))}
    </div>
  </div>
);
