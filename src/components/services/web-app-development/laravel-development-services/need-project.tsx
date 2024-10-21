"use client";
import H2 from "@components/basic-components/headings/H2";
import OuterComponent from "@components/basic-components/outer-component";
import PrimaryButton from "@components/basic-components/primary-button";
/**
 * This component contains the work together section.
 */
import dynamic from "next/dynamic";

export type dataItem = {
  id: string;
  description: string;
};

const LetsConnect: React.FC = () => (
  <OuterComponent>
    <div className="relative shadow-buttonInset bg-innerContainer rounded-[32px] sm:rounded-[20px] ">
      <div className="flex  w-full md:gap-3 justify-center items-center xs:w-full flex-col gap-5 sm:gap-4 xs:gap-[17px] px-[69px] grow md:px-[51px] sm:px-[28px] sm:py-[34px] h-fit py-[72px] xs:py-[28px] xs:px-6 ">
        <H2>
          <div className="text-wrap text-5xl lg:text-4xl sm:text-[26px] w-full leading-[60.6px] lg:leading-[45px] sm:leading-[33px] lg:tracking-normal font-semibold tracking-tight">
            Ready to start on your{" "}
            <span className="italic font-[300]">laravel app</span> project
          </div>
        </H2>
        <PrimaryButton
          icon={true}
          text="Let’s Connect"
          style="md:mt-[30px] xs:mt-0"
          link="/contact-us"
        />
      </div>
    </div>
  </OuterComponent>
);

export default LetsConnect;
