import GradientText from "@components/basic-components/gradient-text";
import H3 from "@components/basic-components/headings/H3";
const Hero: React.FC = () => {
  return (
    <div className="w-full relative" id="hero">
      <div className="w-full relative z-20 flex flex-col gap-3 xs:gap-0 lg:mt-[71px] sm:mt-[23px] xs:mt-[30px] h-fit overflow-hidden px-[80px] lg:px-10 xs:px-5 pt-[72px] lg:pt-[0px] xs:pb-0 max-w-[1920px] mx-auto">
        <GradientText
          text={"Contact us"}
          classes={`sm:text-[48px] w-fit xs:text-[32px] text-left xs:leading-[1.3]`}
        />
        <H3
          style="xs:text-[12px] !leading-[1.3]"
          text="Let’s turn your concept into a successful commercial product together!"
        />
      </div>
    </div>
  );
};

export default Hero;
