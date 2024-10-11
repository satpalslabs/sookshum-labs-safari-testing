"use client";

const Card = dynamic(() => import("@components/basic-components/card"));
import H5 from "@components/basic-components/headings/H5";
import data from "./data/get-in-touch.json";
import H3 from "@components/basic-components/headings/H3";
import Image from "next/image";
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";

type DataCard = {
  icon: string;
  title: string;
  "e-mail": string;
};
const dataCards: DataCard[] = data.cards;

const BottomSection: React.FC = () => (
  <OuterComponent>
    <div className="h-fit w-full">
      <div className="grid grid-cols-2 xs:grid-cols-1 gap-5 w-full">
        {dataCards.map((item: DataCard, index: number) => (
          <a href={`mailto:${item["e-mail"]}`} target="_blank" key={index}>
            <QuickMailCard item={item} />
          </a>
        ))}
      </div>
    </div>
  </OuterComponent>
);

export default BottomSection;

const QuickMailCard: React.FC<{ item: DataCard }> = (props) => (
  <Card isInView={true} style={"pb-0 grow"}>
    <div className="p-8 lg:p-4 flex flex-col xxl:gap-[150px] gap-[110px] sm:gap-[89px] grow">
      <div className="flex justify-between grow">
        <H5 text={props.item.title} style="!text-white sm:text-[14px]" />
        <Image
          alt=""
          width="1200"
          height="1200"
          src={props.item.icon}
          className="w-[46px] lg:w-[32px] sm:h-fit"
          blurDataURL="URL"
          placeholder="blur"
        />
      </div>
      <H3
        text={props.item["e-mail"]}
        style="!text-white w-full !text-[32px] lg:!text-[22px] sm:!text-[18px] sm:text-[18px]"
      />
    </div>
  </Card>
);
