/**
 * This component contains the text portion of each core service card.
 */

import H4 from "@components/basic-components/headings/H4";
import { dataItem } from "..";
import Description from "@components/basic-components/description";
import DarkButton from "@components/basic-components/button";

const TextContainer = ({ item }: { item: dataItem }) => (
  <div className="flex flex-col gap-6 md:gap-5 px-4 md:px-2 sm:px-[6px] sm:gap-4 grow h-fit">
    <div className="flex flex-col gap-[14px] md:gap-3 pt-8 grow ">
      <H4 style="" text={item.id} />
       <Description children={null} text={item.description} classes={"!font-normal"} />
    </div> 
    {/* <DarkButton style="group-hover:!bg-buttonGradient" text="Learn more" /> */}
  </div>
);

export default TextContainer;
