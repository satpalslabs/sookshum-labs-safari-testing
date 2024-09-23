import DarkButton from "@components/basic-components/button";
import GradientText from "@components/basic-components/gradient-text";
import data from "./data/hero.json";
const aboutHero: string = data.data;
const Hero: React.FC = () => {
  return (
    <div className="w-full relative">
      <div className="w-full relative z-20 mt-[32px] flex flex-col gap-[30px] lg:mt-[77px] xs:mt-[30px] h-fit overflow-hidden px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] pb-[65] lg:pt-[0px] sm:pb-8 sm:pt-0 xs:pt-0 xs:pb-16 max-w-[1920px] mx-auto">
        <div className=" flex xxl:w-[80%] mx-auto flex-col items-center justify-center w-full text-center gap-[30px] lg:gap-4 xs:gap-3">
          <DarkButton text="You trust matters to us" style="" />
          <GradientText
            text={"Sookshum  Labs Privacy Policy"}
            classes={`sm:text-[48px] sm:w-full xs:text-[32px] xxl:w-[80%] xxl:mx-auto`}
          />
        </div>
        <div className="flex flex-col gap-[30px] text-[18px] font-poppins font-normal xs:text-center">
          <div
            className="unreset"
            dangerouslySetInnerHTML={{ __html: aboutHero }}
          />
          <p className="text-center"> Last updated September 30, 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
