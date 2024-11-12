"use client";

const Card = dynamic(() => import("@components/basic-components/card"));
import H5 from "@components/basic-components/headings/H5";
import data from "./data/get-in-touch.json";
import H3 from "@components/basic-components/headings/H3";
import Image from "next/image";
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";
import H2 from "@components/basic-components/headings/H2";
import PrimaryButton from "@components/basic-components/primary-button";
import DarkButton from "@components/basic-components/button";

type DataCard = {
  icon: string;
  title: string;
  "e-mail": string;
};
const dataCards: DataCard[] = data.cards;

const BottomSection: React.FC = () => (
  <OuterComponent>
    <div className="h-fit w-full" id="connect">
      <div className="grid grid-cols-3 sm:grid-cols-2 sm:grid-rows-2 xs:grid-rows-3 xs:grid-cols-1 gap-5 w-full">
        {dataCards.map((item: DataCard, index: number) => (
          <a href={`mailto:${item["e-mail"]}`} target="_blank" key={index}>
            <QuickMailCard item={item} />
          </a>
        ))}
        <Card isInView={true} style={"!pb-0 grow sm:col-span-2 xs:col-span-1"}>
          <div className="p-8 lg:p-2 lg:pb-4 flex flex-col h-full  justify-between grow">
            <div className="grow">
              <div className="flex justify-between grow">
                <H5
                  text={"Want to join our team? <br /> Send us your CV."}
                  style="!text-white sm:text-[14px] !leading-[1.4]"
                />
                <Image
                  alt="image"
                  width="1200"
                  height="1200"
                  src={
                    "/services/web-app-development/landing-page/why-us/our-team.png"
                  }
                  className="h-[46px] w-auto lg:h-[32px]"
                  blurDataURL="URL"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <PrimaryButton
                icon={true}
                style="!bg-customBlue"
                text="Send us CV"
                link={
                  "https://careers.sookshum-labs.com/forms/0c46d2e5681ac05b1b7932659bdd9f9a2015de74fe8bb6319b00c5b1fdcb1bba"
                }
              />
              <a href="https://careers.sookshum-labs.com/jobs" target="_blank">
                <DarkButton
                  style="group-hover:!bg-none h-full sm:!px-5 !text-white"
                  text="Careers"
                />
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </OuterComponent>
);

export default BottomSection;

const QuickMailCard: React.FC<{ item: DataCard }> = (props) => (
  <Card isInView={true} style={"!pb-0 grow"}>
    <div className="p-8 lg:p-2 lg:pb-4 flex flex-col xxl:gap-[150px] gap-[110px] sm:gap-[89px] grow">
      <div className="flex justify-between grow">
        <H5 text={props.item.title} style="!text-white sm:text-[14px]" />
        <Image
          alt="image"
          width="1200"
          height="1200"
          src={props.item.icon}
          className="w-[46px] lg:w-[32px]"
          blurDataURL="URL"
          placeholder="blur"
        />
      </div>
      <H3
        text={props.item["e-mail"]}
        style="!text-white w-full !text-[22px] lg:!text-[16px] "
      />
    </div>
  </Card>
);
