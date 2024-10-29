import SectionHeader from "@components/basic-components/section-header";
import data from "./data/technologies.json";
import H4 from "@components/basic-components/headings/H4";
import Button from "@components/basic-components/button";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";

type Technology = {
  label: string;
};
type Data = {
  [key: string]: Technology[]; // Index signature to allow string indexing
};
const TechnologiesData: Data = data["web-development-technologies"];
const Technologies = () => {
  return (
    <OuterComponent>
      <OuterFlexComponent>
        <SectionHeader
          id="technologies"
          buttonText="Technologies"
          description="Explore the advanced tools and technologies we utilize for web development. We use cutting-edge solutions to ensure high performance, security, and scalability for your website projects."
          style="w-[790px] xs:w-full"
        >
          <div className="w-full flex flex-col xs:w-full tracking-tight text-center mx-auto xs:leading-[1.3] leading-[1.4] capitalize">
            <div className="w-full">Tools & technologies</div>
            <div className="xs:text-wrap">
              we use for{" "}
              <span className="italic font-light w-full">web development</span>
            </div>
          </div>
        </SectionHeader>
        <TechnologiesCards />
      </OuterFlexComponent>
    </OuterComponent>
  );
};

export default Technologies;

const TechnologiesCards: React.FC = () => (
  <div className="w-full flex flex-col gap-[10px]">
    <div className="w-full h-[1px] bg-gradient-to-r from-[#AAAAAA1A] via-[#FFFFFF] to-[#9999991A]"></div>
    <div className="grid grid-cols-4 sm:grid-cols-2 sm:px-[94px] sm:gap-[30px] xs:grid-cols-1 w-full xs:px-0">
      {Object.keys(TechnologiesData).map(
        (technology: string, index: number) => (
          <div
            key={index}
            className="flex flex-col gap-[70px] lg:gap-[30px] pt-[18px] lg:pt-[15px] w-[305px] md:w-[233px] xs:w-full"
          >
            <div className="flex flex-col gap-5 h-fit">
              <H4 style="!text-white" text={`0${index + 1}`} />
              <H4
                style="!text-white pl-5 leading-[1.4] h-fit"
                text={technology}
              />
            </div>
            <div className="flex w-full flex-wrap gap-[9px]">
              {TechnologiesData[technology as keyof Data].map(
                (technologyButton: Technology) => (
                  <div className="group" key={technologyButton.label}>
                    <Button text={technologyButton.label} style="" />
                  </div>
                )
              )}
            </div>
          </div>
        )
      )}
    </div>
  </div>
);
