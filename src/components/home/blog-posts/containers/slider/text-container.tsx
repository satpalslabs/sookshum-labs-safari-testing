/**
 * This component contains a text elements of each slider card.
 */

const Description = dynamic(() => import("@components/basic-components/description"));

const H6 = dynamic(() => import("@components/basic-components/headings/H6"));
import dynamic from "next/dynamic";
import { blogType } from ".";

function TextContainer({ item, index }: { item: blogType; index: number }) {
  return (
    <div
      className={`p-4 flex flex-col grow xs:p-1 h-fit absolute bg-transparent z-40 ${
        item.type == "cover"
          ? "bottom-6 "
          : index == 0
          ? "bottom-6 right-0 w-[321px] lg:w-[222px] xs:w-[152px]"
          : "top-6 w-[321px] lg:w-[222px] right-0 xs:w-[152px]"
      }`}
    >
      <H6
        classes={`w-full sm:px-3 xs:px-0 leading-[39px] xs:text-xs ${
          item.type != "cover"
            ? index == 0
              ? "!text-black"
              : "!text-[white]"
            : "!text-[white]"
        }`}
        text={item.title}
      />
       <Description children={null}
        text={item.description}
        classes={`w-full grow font-normal sm:px-3 xs:px-0 text-lg leading-[33px] xs:text-[10px] line-clamp-2 ${
          item.type != "cover" && index == 0 ? "!text-black" : "!text-white"
        }`}
      />
    </div>
  );
}

export default TextContainer;
