import dynamic from "next/dynamic";
// import { DotLottie, DotLottieReact } from "@lottiefiles/dotlottie-react";
import { dataItem } from "..";
// import { useCallback, useRef } from "react";

// Dynamic imports with React.lazy
const Card = dynamic(() => import("@components/basic-components/card"));
const TextContainer = dynamic(() => import("./text-container"));

const ServiceCard = ({
  isInView,
  item,
}: {
  isInView: boolean;
  item: dataItem;
}) => {
  // const dotLottieRef = useRef<DotLottie | null>(null);

  // const playAnimation = useCallback(() => {
  //   if (dotLottieRef.current) {
  //     dotLottieRef.current.play();
  //   }
  // }, []);
  // // Debounced playAnimation function

  // const handleKeyDown = useCallback(
  //   (e: React.KeyboardEvent) => {
  //     if (e.key === "Enter") {
  //       playAnimation();
  //     }
  //   },
  //   [playAnimation]
  // );

  return (
    <div
      // onMouseEnter={playAnimation}
      // onTouchStart={playAnimation}
      // onClick={playAnimation}
      // onKeyDown={handleKeyDown}
      // tabIndex={0} // Make the div focusable
      className="grow flex"
    >
      <Card isInView={isInView} style="mt-[73px] grow ">
        <div className="w-full h-fit 2xs:h-[120px] xs:h-[200px] 3xs:-h-[100px] lg:mt-[-20%] xs:-mt-[23%] 2xs:-mt-[25%] 3xs:-mt-[15%] sm:-mt-[15%] -mt-[15.5%] xxl:-mt-[15.5%]">
          <div className="transition-all full xxl:w-fit h-fit w-full scale-[1.2] sm:scale-[1.43] xs:scale-75 2xs:scale-100 3xs:scale-105 lg:translate-x-[-3%] flex justify-end mx-auto xxl:max-w-[80%] translate-x-[-5%]">
            <div className="w-full h-fit">
              {/* <DotLottieReact
                id="firstLottie"
                mode="bounce"
                speed={1.5}
                src={item.animation_path}
                dotLottieRefCallback={(dotLottieInstance: DotLottie | null) => {
                  dotLottieRef.current = dotLottieInstance;
                }}
                renderConfig={{
                  devicePixelRatio:0
                }}
                useFrameInterpolation={false}
                className="w-full h-auto"
              /> */}
            </div>
          </div>
        </div>
        <TextContainer item={item} />
      </Card>
    </div>
  );
};

export default ServiceCard;
