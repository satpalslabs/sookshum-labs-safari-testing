// /**
//  * This component contains the images.
//  */

// import Image from "next/image";

// const ImageContainer: React.FC = () => {
//   return (
//     <div className="absolute xs:relative xs:w-full xs:top-[auto] xs:left-[auto] xs:right-[auto] xs:mx-auto h-[650.56px] lg:h-[500px] lg:-right-10 lg:-top-[52px] sm:h-[360px] sm:-right-12 sm:-top-[36px] -right-16 -top-16">
//       <Image
//         height={1600}
//         width={1600}
//         src="/home/work-together/work-together.webp"
//         alt="work-together"
//         className="h-full w-auto object-contain xs:mx-auto"
//       />
//     </div>
//   );
// };

// export default ImageContainer;

"use client";
/**
 * This component contains the images.
 */
import { animateBottom } from "@components/services/landing-page/cover/scroll-animation";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ImageContainer: React.FC = () => {
  const main = useRef<HTMLDivElement | null>(null);
  const smoother = useRef<any>();

  useGSAP(
    () => {
      const bottomDivs = gsap.utils.toArray(".animateBottom");
      const topDivs = gsap.utils.toArray(".animateTop");
      bottomDivs.forEach((box: any) => {
        gsap.to(box, {
          y: -50,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "center -100px",
            toggleActions: "restart pause reserve pause",
            scrub: true,
          },
          duration: "3",
        });
      });
      topDivs.forEach((topBox: any) => {
        gsap.to(topBox, {
          y: -50,
          scrollTrigger: {
            trigger: topBox,
            start: "top center",
            end: "center -100px",
            toggleActions: "restart pause reserve pause",
            scrub: true,
          },
          duration: "3",
        });
      });
    },
    { scope: main }
  );

  return (
    <div className="absolute xs:relative xs:w-full xs:top-[auto] xs:left-[auto] xs:right-[auto] xs:mx-auto h-full  lg:-right-10 sm:h-[360px] sm:-right-12 -right-16">
      <div className="relative w-full h-full flex items-center" ref={main}>
        <Image
          height={1600}
          width={1600}
          src="/home/work-together/work-together.webp"
          alt="work-together"
          className="xxl:h-[510px] h-[480px] lg:h-[400px] sm:h-[270px] sm:-mt-8 w-auto object-contain xs:mx-auto"
        />
        <div
          className="animateBottom transition-all duration-1000  w-[52px] h-[52px] lg:w-[42px] lg:h-[42px]  sm:w-[32px] sm:h-[32px]  rounded-full  shadow-2xl absolute bottom-[-3%] sm:bottom-[10%] right-[20%]"
          style={{
            background:
              "linear-gradient(206.92deg, #FFFFFF 59.29%, #999999 85.78%)",
          }}
        ></div>
        <div
          className="animateBottom transition-all duration-1000  w-[34px] h-[34px] lg:w-[24px] lg:h-[24px]  sm:w-[18px] sm:h-[18px]  rounded-full  shadow-2xl absolute bottom-[5.5%] sm:bottom-[20%] left-[16.3%]"
          style={{
            background:
              "linear-gradient(206.92deg, #FFFFFF 59.29%, #999999 85.78%)",
          }}
        ></div>
        <div
          className="animateTop transition-all duration-1000  w-[72px] h-[72px]  lg:w-[52px] lg:h-[52px] sm:w-[42px] sm:h-[42px] rounded-full  shadow-2xl absolute top-0 translate-y-[50%] left-[23%]"
          style={{
            background: "linear-gradient(180deg, #FF9C00 0%, #F56300 100%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ImageContainer;
