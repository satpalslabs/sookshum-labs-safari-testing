import dynamic from "next/dynamic";
import { dataItem } from "..";
import { useCallback, useRef } from "react";
import CanvasAnimation from "@components/basic-components/canvas-animation";
import H2 from "@components/basic-components/headings/H2";
import Description from "@components/basic-components/description";

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
  const containerRef = useRef<HTMLDivElement>(null);

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
      tabIndex={0} // Make the div focusable
      ref={containerRef}
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
            </div>{" "}
          </div>
        </div>
        <div className="transition-all absolute z-50 top-0 w-full flex justify-center translate-x-[-3%] xs:translate-x-[-1%] ">
          <div className="w-full flex justify-center h-fit  scale-[0.825] lg:scale-[0.625] sm:scale-[0.525] xs:scale-[0.7]  -translate-y-[40%]  ">
            {/* <DotLottieReact
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
            /> */}
            <CanvasAnimation
              containerRef={containerRef}
              frameCount={item["frame-count"]}
              style="max-w-[440px] h-[270px]"
              duration={0.5}
              url={item["animation-url"]}
              imageType="webp"
            />
          </div>
        </div>
        <div className="absolute z-[40] bg-transparent transition-all duration-1000 top-0 left-0 w-full h-full group-hover:block group-hover:bg-gradientOnHover rounded-[32px] sm:rounded-[20px]"></div>
      </div>
    </div>
  );
};

export default ServiceCard;
