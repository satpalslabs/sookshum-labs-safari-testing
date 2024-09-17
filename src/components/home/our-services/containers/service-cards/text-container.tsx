/**
 * This file contains the text container of our-service section.
 */
"use client";

import DarkButton from "@components/basic-components/button";
import Description from "@components/basic-components/description";
import { dataItemType } from ".";
import H6 from "@components/basic-components/headings/H6";
import Link from "next/link";

const TextContainer = ({ item }: { item: dataItemType }) => (
  <div className="px-4 lg:px-3 md:px-2 !grow xs:px-4">
    <div className="flex px-4 flex-col gap-6 h-full md:gap-5 md:px-2 sm:px-[17px] sm:gap-4 grow md:pr-3 sm:pr-[10.5px] xs:px-0">
      <div className="flex flex-col gap-[14px] md:gap-3 sm:gap-[5px] sm:pt-0 grow">
        <H6 classes="text-white" text={item.heading} />
        <Description children={null} text={item.description} classes="!grow !font-normal" />
      </div>
      <Link href={item.link}>
        <DarkButton style="" text="Discover" />
      </Link>
    </div>
  </div>
);

export default TextContainer;
