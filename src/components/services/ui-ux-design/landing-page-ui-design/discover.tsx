import SectionHeader from "@components/basic-components/section-header";
import OuterComponent from "@components/basic-components/outer-component";
import H2 from "@components/basic-components/headings/H2";
import Description from "@components/basic-components/description";

const Discover: React.FC = () => (
  <OuterComponent>
    <div
      className={`flex flex-col gap-6 lg:gap-[15px] xs:gap-2 items-center text-center w-[1061px] lg:w-[93%] sm:w-full xs:px-4 3xs:px-0 xs:!text-wrap mx-auto py-[90px] sm:py-[50px] xs:py-[30px]`}
    >
      <H2>
        <div className="xs:w-full w-full sm:tracking-tighter mx-auto leading-[1.4] text-wrap text-center tracking-[-0.02em] capitalize sm:text-[31.5px] xs:text-[24px]">
          We create high-converting landing pages
          <br className="lg:hidden" /> that stand out among competitors
        </div>
      </H2>
      <Description
        text={""}
        classes={
          "!text-lg lg:!text-sm sm:!text-[13px] xs:!text-[12px] lg:w-[60%] sm:w-[80%] xs:w-full !leading-[1.4] !text-white !font-[300]"
        }
      >
        <div>
          Our landing page design approach is results-driven, and we prioritize
          helping your landing page achieve key metrics and business objectives.
        </div>
      </Description>
    </div>
  </OuterComponent>
);

export default Discover;
