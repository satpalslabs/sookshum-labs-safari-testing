import DarkButton from "@components/basic-components/button";
import GradientText from "@components/basic-components/gradient-text";
import PrimaryButton from "@components/basic-components/primary-button";

type props = {
  buttonText: string;
  gradientText: string;
};

const GradientSection: React.FC<props> = ({ buttonText, gradientText }) => (
  <div className="w-full relative z-20  shrink-0">
    <div
      className={`px-[81px] h-fit overflow-hidden relative sm:px-5 md:px-[20px] lg:px-10 2xs:px-5 pt-[72px] pb-[65] lg:pt-[62px] sm:pb-8 sm:pt-0 xs:pt-0 xs:pb-16 max-w-[1920px] mx-auto`}
    >
      <div className=" flex-1 flex flex-col items-center justify-center gap-[2.5rem] text-center  lg:p-[2.5rem] lg:box-border md:p-[1.875rem] md:box-border sm:p-[1.25rem] sm:box-border">
        <div className=" flex flex-col items-center justify-start gap-[1.875rem] text-[5.375rem] ">
          <DarkButton text={buttonText} style="" />
          <GradientText text={gradientText} classes="3xs:text-[29px]" />
        </div>
        <PrimaryButton
          icon={true}
          text="Request a quote"
          style=""
          link="/contact-us"
        />
      </div>
    </div>
  </div>
);

export default GradientSection;
