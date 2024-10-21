/**
 * This file contains the industry experience section.
 */

import Description from "@components/basic-components/description";
import H2 from "@components/basic-components/headings/H2";

function POC() {
  return (
    <section className="px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px] flex flex-col items-center gap-[46px] lg:gap-[70px] sm:gap-[49px] bg-black overflow-visible max-w-[1920px] mx-auto">
      <Header />
      <MainContainer />
    </section>
  );
}

export default POC;



const Header: React.FC = () => (
  <div
    className={`flex flex-col gap-6 lg:gap-[15px] xs:gap-2 items-center text-center w-[80%] lg:w-[680px] xs:w-full  3xs:px-0 xs:!text-wrap `}
  >
    <H2>
      <div className="lg:text-wrap text-center leading-[1.3] !capitalize">
        Start your <span className="italic font-light">low-code app </span>{" "}
        development with PoC
      </div>
    </H2>
    <Description
      children={null}
      text={
        "Before investing in full-scale app development, it makes sense to develop a functional and performant PoC. A Proof of concept highlights the project’s top priorities and requirements. Plus, PoC helps validate your idea early, eliminates financial risks, and strengthens your marketing strategy. "
      }
      classes={
        "!text-lg lg:!text-sm sm:!text-[13px] xs:!text-[12px] !leading-[1.4] !text-light !font-[300]"
      }
    />
  </div>
);

const MainContainer=()=>(
    <div className="w-full h-[763px] lg:h-[645px] sm:h-[468px] xs:h-[272px] flex justify-center object-contain">
        <img src="/services/low-code-development/appsmith-development-services/about/pc.png" className="h-full w-auto"/>
    </div>
)
