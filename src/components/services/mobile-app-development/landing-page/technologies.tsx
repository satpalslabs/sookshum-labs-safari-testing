import SectionHeader from "@components/basic-components/section-header";
import data from "./data/technologies.json";
import H4 from "@components/basic-components/headings/H4";
import Image from "next/image";
import H6 from "@components/basic-components/headings/H6";
import OuterComponent from "@components/basic-components/outer-component";
import OuterFlexComponent from "@components/basic-components/main-flex-container";

type Technology = {
  "technology-name": string;
  "image-address": string;
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
          description="Based on market trends, we strive to develop scalable, maintainable, and futuristic solutions that keep up with the latest technology"
          style="w-[750px] sm:w-[95%] xs:w-full"
        >
          <div className="w-[80%] text-wrap xs:w-full tracking-tight text-center mx-auto xs:leading-[1.3] leading-[1.4] capitalize">
            Full
            <span className="italic font-light w-full"> digital product </span>
            expertise under one roof
          </div>
        </SectionHeader>
        <TechnologiesCards />
      </OuterFlexComponent>
    </OuterComponent>
  );
};

export default Technologies;

const TechnologiesCards: React.FC = () => (
  <div className="w-full px-[73px] lg:px-0">
    <div className="grid grid-cols-2 gap-[40px] lg:gap-5  xs:grid-cols-1 w-full xs:px-0">
      {Object.keys(TechnologiesData).map(
        (technology: string, index: number) => (
          <div
            key={index}
            className="flex flex-col gap-5  pt-[18px] lg:pt-[15px]"
          >
            <H4
              style="pl-5 leading-[1.4] h-fit !text-white xs:text-[15px]"
              text={technology}
            />
            <div className="grid grid-cols-3 sm:grid-cols-2 xs:!grid-cols-3 w-full gap-[20px] pr-0 lg:gap-[14px] sm:pr-[42px] xxl:pr-[72px] xs:pr-0">
              {TechnologiesData[technology as keyof Data].map(
                (technologyButton: Technology) => (
                  <div
                    className={
                      "flex flex-col w-full gap-3 lg:gap-6 xs:gap-3 text-center items-center rounded-[27px] p-6 lg:py-5 lg:px-4 shrink-0 border-borderDarkButton [backdrop-filter:blur(100px)] text-secondary border-solid border bg-darkButton shadow-buttonInset"
                    }
                    key={technologyButton["technology-name"]}
                  >
                    <div>
                      <Image
                        blurDataURL="URL"
                        placeholder="blur"
                        height="800"
                        width="800"
                        src={technologyButton["image-address"]}
                        className="w-[70px] h-[70px] lg:w-[56px] lg:h-[56px] xs:w-[36px] xs:h-[36px]"
                        alt="image"
                      />
                    </div>
                    <H6
                      text={technologyButton["technology-name"]}
                      classes={"text-nowrap !text-white lg:text-base"}
                    />
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
