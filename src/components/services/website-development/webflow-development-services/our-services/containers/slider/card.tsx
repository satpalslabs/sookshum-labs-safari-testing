/**
 * This component contains each card of slider.
 */
const H6 = dynamic(() => import("@components/basic-components/headings/H6"));

import Image from "next/image";
import { serviceType } from ".";
import dynamic from "next/dynamic";
const Card = dynamic(() => import("@components/basic-components/card"), {
  ssr: false, // Optional: Disable server-side rendering for this component if needed
});
const Industry: React.FC<{
  industry: serviceType;
  isInView: boolean;
}> = ({ industry, isInView }) => (
  <Card
    isInView={isInView}
    style="!h-full flex !justify-between flex-col gap-4 lg:gap-3 sm:gap-2 !p-6"
  >
    <Image
      blurDataURL="URL"
      placeholder="blur"
      height={400}
      width={400}
      src={industry.image}
      alt="image"
      className="h-[120px] w-fit lg:h-[80px] pt-1 object-contain float-left sm:w-[80px]"
    />
    <H6 classes="!text-white" text={industry.title} />
  </Card>
);

export default Industry;
