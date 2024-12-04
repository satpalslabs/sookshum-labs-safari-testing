import dynamic from "next/dynamic";
import { DotLottie, DotLottieReact } from "@lottiefiles/dotlottie-react";
import { dataItem } from "..";
import { useCallback, useRef } from "react";

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
  const dotLottieRef = useRef<DotLottie | null>(null);

  const playAnimation = useCallback(() => {
    if (dotLottieRef.current) {
      dotLottieRef.current.play();
    }
  }, []);
  // Debounced playAnimation function

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        playAnimation();
      }
    },
    [playAnimation]
  );

  return (
    <div
      onMouseEnter={playAnimation}
      onTouchStart={playAnimation}
      onClick={playAnimation}
      onKeyDown={handleKeyDown}
      tabIndex={0} // Make the div focusable
      className="grow group cursor-pointer flex relative mt-[96px] sm:mt-[79px] "
    >
      <div
        className={`relative w-full group h-full z-0 cursor-pointer   rounded-[32px] sm:rounded-[20px]  p-[1px] bg-viewportBorder transition-all hover:bg-gradient-to-br  hover:from-borderPrimary hover:via-transparent hover:to-borderPrimary duration-1000 ${
          isInView
            ? `bg-viewportBorder  grayscale-0 `
            : "bg-transparent grayscale"
        }`}
      >
        <div className="w-full h-full relative z-20 overflow-hidden rounded-[32px] bg-black sm:rounded-[20px] ">
          <div
            className={`w-full h-full bg-innerContainer p-4 pb-8 sm:p-[9px] sm:pb-[14px] lg:p-[14px] lg:pb-[23px] relative shadow-buttonInset rounded-[32px] sm:rounded-[20px] flex flex-col  pt-[98px] lg:pt-[98px] sm:pt-[91px] grow `}
          >
            {/* <div className="w-full h-fit 2xs:h-[120px] xs:h-[200px] 3xs:-h-[100px] lg:mt-[-20%] xs:-mt-[23%] 2xs:-mt-[25%] 3xs:-mt-[15%] sm:-mt-[15%] -mt-[15.5%] xxl:-mt-[15.5%]"></div> */}
            <TextContainer item={item} />
          </div>
        </div>
        <div className="transition-all absolute z-50 top-0 w-full flex justify-center translate-x-[-3%] xs:translate-x-[-1%] ">
          <div className="w-full flex justify-center h-fit  scale-[0.825] sm:scale-[0.625] xs:scale-[0.7]  -translate-y-[40%]  ">
            <DotLottieReact
              id="firstLottie"
              mode="bounce"
              speed={1.5}
              src={item.animation_path}
              dotLottieRefCallback={(dotLottieInstance: DotLottie | null) => {
                dotLottieRef.current = dotLottieInstance;
              }}
              renderConfig={{
                devicePixelRatio: 0,
              }}
              useFrameInterpolation={false}
              className="min-w-[540px] h-[270px]"
            />
          </div>
        </div>
        <div className="absolute z-[40] bg-transparent transition-all duration-1000 top-0 left-0 w-full h-full group-hover:block group-hover:bg-gradientOnHover rounded-[32px]"></div>
      </div>
    </div>
  );
};

export default ServiceCard;
