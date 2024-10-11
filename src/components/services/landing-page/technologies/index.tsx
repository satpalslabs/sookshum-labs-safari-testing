import OuterComponent from "@components/basic-components/outer-component";
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
    <OuterComponent>
      <div className="w-fit bg-black overflow-hidden flex flex-col items-center justify-start z-[3] md:gap-[3.125rem] md:box-border sm: sm:w-auto sm:gap-[1.875rem] sm:box-border">
        {data.technologies.map((dataItem: dataItemType, index: number) => (
          <Technology key={index} item={dataItem} />
        ))}
      </div>
    </OuterComponent>
  );
}

export default Technologies;
