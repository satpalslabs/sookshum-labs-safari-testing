/**
 * This component contains each card of slider.
 */

const Description = dynamic(() => import("@components/basic-components/description"));

const H6 = dynamic(() => import("@components/basic-components/headings/H6"));

import Image from "next/image";
import { industryType } from ".";
import dynamic from "next/dynamic";
const Card = dynamic(() => import("@components/basic-components/card"), {
  loading: () => <p>Loading...</p>, // Optional: A loading component can be shown while the Card is loading
  ssr: false, // Optional: Disable server-side rendering for this component if needed
});
const Industry = ({
  industry,
  isInView,
}: {
  industry: industryType;
  isInView: boolean;
}) => (
  <Card
    isInView={isInView}
    style="!h-full flex flex-col gap-4 lg:gap-3 sm:gap-2 !pb-0"
  >
    <Image
      height={400}
      width={400}
      src={industry.image}
      alt=""
      className="h-[179px] w-fit lg:h-[112px] pl-3 pb-2 pt-1 object-contain float-left sm:max-w-[100px]"
    />
    <div className="p-4 flex flex-col gap-[10px] xs:p-1 ">
      <H6 classes="text-white" text={industry.title} />
      <Description
        children={null}
        text={industry.description}
        classes="w-full sm:px-3 xs:px-0 !font-normal"
      />
      <ul className="flex flex-col gap-2 text-white list-disc pl-3 text-lg lg:text-sm xs:pl-4 font-poppins font-medium">
        {industry.points.map((point: string, index: any) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  </Card>
);

export default Industry;
