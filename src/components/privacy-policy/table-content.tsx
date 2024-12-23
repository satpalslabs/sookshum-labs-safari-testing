"use client";
const Card = dynamic(() => import("@components/basic-components/card"));
import data from "./data/table-content.json";
import H3 from "@components/basic-components/headings/H3";
import { useState } from "react";
import { RightAngleArrow } from "@components/header/containers/services";
import dynamic from "next/dynamic";
import OuterComponent from "@components/basic-components/outer-component";

type TableContentDataItem = {
  title: string;
  "html-data": string;
};

const tableContentData: TableContentDataItem[] = data["Table of Contents"];
const TableContent: React.FC = () => (
  <OuterComponent>
    <div className=" flex xs:flex-col gap-10 sm:gap-5 w-full">
      <Table />
      <TableContentComponent />
    </div>
  </OuterComponent>
);

export default TableContent;

const Table: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div
      id="table"
      className={` min-w-[33.9%] lg:min-w-[37.8%] xs:w-full xs:h-[66px] overflow-hidden transition-all duration-1000 ease-linear ${
        active && "xs:h-full"
      }`}
      onClick={() => {
        setActive((prev: boolean) => !prev);
      }}
    >
      <Card
        isInView={true}
        style={` !grow-0 h-fit xs:h-full !border-transparent w-full !p-4 shrink-0 !cursor-text `}
      >
        <div
          className={`p-4 lg:p-2 sm:p-1 flex flex-col gap-[10px] !pb-0 xs:w-full xs:relative`}
        >
          <div className="text-xl font-poppins font-medium tracking-tight">
            Table of Contents
          </div>
          <div className={`unreset ${!active && "xs:hidden"} relative z-40`}>
            <ul className="flex flex-col gap-[10px] font-poppins !capitalize !px-4 !py-0 !m-0">
              {tableContentData.map(
                (tableContentItem: TableContentDataItem, index: number) => (
                  <li key={index} className="cursor-pointer !py-0">
                    <a href={`#content-${index}`}>{tableContentItem.title}</a>
                  </li>
                )
              )}
            </ul>
          </div>
          <RightAngleArrow
            className={`xs:block hidden transition-all absolute top-2 h-[16px] right-2 stroke-white ${
              active && "rotate-90"
            }`}
          />
        </div>
      </Card>
    </div>
  );
};

const TableContentComponent: React.FC = () => (
  <div className="flex flex-col grow gap-8">
    {tableContentData.map(
      (tableContentItem: TableContentDataItem, index: number) => (
        <div
          className="flex flex-col gap-3"
          key={index}
          id={`content-${index}`}
        >
          <H3
            style="!text-white !capitalize leading-[1.4]"
            text={tableContentItem.title}
          />
          <div
            className="unreset !px-0 !text-white  !capitalize !font-poppins"
            dangerouslySetInnerHTML={{
              __html: tableContentItem["html-data"],
            }}
          />
        </div>
      )
    )}
  </div>
);
