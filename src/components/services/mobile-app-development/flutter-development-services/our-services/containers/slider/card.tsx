/**
 * This component contains each card of slider.
 */

const Description = dynamic(
  () => import("@components/basic-components/description")
);

const H6 = dynamic(() => import("@components/basic-components/headings/H6"));

import Image from "next/image";
import { industryType } from ".";
import dynamic from "next/dynamic";
const Card = dynamic(() => import("@components/basic-components/card"), {
  ssr: false, // Optional: Disable server-side rendering for this component if needed
});
const Industry: React.FC<{
  industry: industryType;
  isInView: boolean;
}> = ({ industry, isInView }) => (
  <Card
    isInView={isInView}
    style="h-full flex flex-col gap-4 lg:gap-3 sm:gap-2 !pb-0 "
  >
    <Image
      blurDataURL="URL"
      placeholder="blur"
      height={400}
      width={400}
      src={industry.image}
      alt=""
      className="h-[80px] pl-3 pb-2 pt-1 object-contain float-left sm:max-w-[100px]"
    />
    <div className="p-4 flex flex-col gap-[10px] xs:p-1 ">
      <H6 classes="text-white" text={industry.title} />
      <Description
        children={null}
        text={industry.description}
        classes="w-full xs:px-0 !font-normal"
      />
    </div>
  </Card>
);

export default Industry;
