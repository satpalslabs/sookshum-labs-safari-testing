import data from "../../data/technologies.json";
import Technology from "./technlogy-card";

export type dataItemType = {
  heading: string;
  description: string;
  "image-position": string;
  "top-heading-button": string;
  "image-path": string;
  link: string;
};

function Technologies() {
  return (
    <div className="w-fit bg-black overflow-hidden flex flex-col items-center justify-start z-[3] md:gap-[3.125rem] md:box-border sm: sm:w-auto sm:gap-[1.875rem] sm:box-border max-w-[1920px] mx-auto px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px]">
      {data.technologies.map((dataItem: dataItemType, index: number) => (
        <Technology key={index} item={dataItem} />
      ))}
    </div>
  );
}

export default Technologies;
