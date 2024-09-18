/**
 * This component contains each core service card.
 */

import dynamic from "next/dynamic";
const ImageContainer = dynamic(() => import("./image-container"));
const TextContainer = dynamic(() => import("./text-container"));
import Card from "@components/basic-components/card";

import { dataItem } from "..";

const ServiceCard = ({
  isInView,
  item,
}: {
  isInView: boolean;
  item: dataItem;
}) => (
  <Card isInView={isInView}
    style="mt-[73px] "
  >
    <div className="xxl:-mt-[15%] xl:-mt-[25%] lg:-mt-[18%] md:-mt-[15%] sm:-mt-[20%] xs:-mt-[4%] xs:-translate-y-[18%] w-full h-[150px] xl:h-[200px] lg:[100px] md:[83px] sm:h-[78px]  2xs:h-[60px]">
      <ImageContainer imageId={item.id} />
    </div>
    <TextContainer item={item} />
  </Card>
);

export default ServiceCard;
