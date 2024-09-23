/**
 * This component contains each core service card.
 */

import dynamic from "next/dynamic";
const TextContainer = dynamic(() => import("./text-container"));
import Card from "@components/basic-components/card";
import { DotLottie, DotLottieReact } from "@lottiefiles/dotlottie-react";
import { dataItem } from "..";
import { SetStateAction, useState } from "react";

const ServiceCard = ({
  isInView,
  item,
}: {
  isInView: boolean;
  item: dataItem;
}) => {
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);

  const dotLottieRefCallback = (dotLottie: SetStateAction<any>) => {
    setDotLottie(dotLottie);
  };

  return (
    <div
      onMouseEnter={() => {
        if (dotLottie) {
          dotLottie?.play();
        }
      }}
      onTouchStart={() => {
        if (dotLottie) {
          dotLottie?.play();
        
        }
      }}
    >
      <Card isInView={isInView} style="mt-[73px]">
        <div className="xs:-translate-y-[18%] w-full xxl:h-[240px] xl:h-[200px] lg:h-[200px] md:h-[180px] sm:h-[100px] xs:h-[120px] xs:-mt-12 3xs:-mt-[70px] lg:mt-[-20%] sm:-mt-[25%] -mt-[20.5%]">
          <div className="w-full h-full">
            <div className="transition-all w-[70%] xxl:w-fit xxl:h-[300px] md:h-56 lg:w-fit  sm:h-[150px] xs:mx-auto  xs:w-fit xs:h-[200px] flex justify-end ml-[50%] translate-x-[-60%] xs:translate-x-[-10%]">
              <DotLottieReact
                id="firstLottie"
                mode="bounce"
                speed={1.5}
                src={item.animation_path}
                dotLottieRefCallback={dotLottieRefCallback}
                style={{ width: "fit-content", height: "100%" }}
              />
            </div>
          </div>
        </div>
        <TextContainer item={item} />
      </Card>
    </div>
  );
};

export default ServiceCard;
