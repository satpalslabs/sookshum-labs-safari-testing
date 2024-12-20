"use client";
import H2 from "@components/basic-components/headings/H2";
import OuterComponent from "@components/basic-components/outer-component";
import PrimaryButton from "@components/basic-components/primary-button";
/**
 * This component contains the work together section.
 */

export type dataItem = {
  id: string;
  description: string;
};

const LetsConnect: React.FC = () => (
  <OuterComponent>
    <div className="relative shadow-buttonInset bg-innerContainer rounded-[32px] sm:rounded-[20px] ">
      <div className="flex  w-full md:gap-3 justify-center items-center xs:w-full flex-col gap-5 sm:gap-4 xs:gap-[17px] px-[69px] grow md:px-[51px] sm:px-[28px] sm:py-[34px] h-fit py-[72px] xs:py-[28px] xs:px-6 ">
        <H2>
          <div className="text-center text-wrap text-5xl lg:text-4xl capitalize w-full leading-[1.3] xs:text-[28px] lg:tracking-normal font-semibold tracking-tight hero-text">
            Need a custom CMS with directus?
          </div>
        </H2>
        <PrimaryButton
          icon={true}
          text="Get In Touch"
          style="md:mt-[30px] xs:mt-0"
          link="/contact-us"
        />
      </div>
    </div>
  </OuterComponent>
);

export default LetsConnect;
