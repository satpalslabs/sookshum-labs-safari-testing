/**
 * This component contains the text portion of each core service card.
 */

const H2 = dynamic(() => import("@components/basic-components/headings/H2"));
import dynamic from "next/dynamic";
import { dataItem } from "..";
const Description = dynamic(
  () => import("@components/basic-components/description")
);

// const DarkButton = dynamic(() => import("@components/basic-components/button"));

const TextContainer = ({ item }: { item: dataItem }) => (
  <div className="flex flex-col gap-6 md:gap-5 px-4 md:px-2 sm:px-[6px] sm:gap-4 grow ">
    <div className="flex flex-col gap-[14px] md:gap-3 sm:gap-2 pt-8 grow ">
      <H2>
        <div className="!text-[26px] md:!text-xl sm:!text-sm !text-h3_heading hero-text w-fit">
          {item.id}
        </div>
      </H2>
      <Description
        children={null}
        text={item.description}
        classes={"!font-normal sm:!text-xs"}
      />
    </div>
    {/* <DarkButton style="group-hover:!bg-buttonGradient" text="Learn more" /> */}
  </div>
);

export default TextContainer;
