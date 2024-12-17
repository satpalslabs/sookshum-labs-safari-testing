"use client";
/**
 * This component contains the images.
 */
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ImageContainer: React.FC = () => {
  const main = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log("working");
    const bottomDivs = gsap.utils.toArray(".animateBottom");

    // Floating objects
    bottomDivs.forEach((box: any) => {
      gsap.to(box, {
        yPercent: -80, // Float upwards with a parallax feel
        ease: "none",
        scrollTrigger: {
          trigger: box,
          start: "top bottom", // Start when the element enters view
          end: "bottom top", // End sooner for better control
          scrub: true,
          // markers: true, // Remove in production
        },
      });
    });

    gsap.to(".animateTop", {
      yPercent: -80, // More significant float effect
      ease: "none",
      scrollTrigger: {
        trigger: ".animateTop",
        start: "top bottom", // Trigger earlier
        end: "bottom top",
        scrub: true,
        // markers: true, // Debugging
      },
    });

    // Parallax effect for the main image
    gsap.to(".parallaxImage", {
      yPercent: 20, // Image floats down as you scroll
      ease: "none",
      scrollTrigger: {
        trigger: ".parallaxImage",
        start: "top bottom", // Image enters viewport
        end: "bottom top", // Image fully exits
        scrub: true,
      },
    });

    ScrollTrigger.refresh();
  }, []);
  return (
    <div className="absolute xs:relative xs:w-full xs:top-[auto] xs:left-[auto] xs:right-[auto] xs:mx-auto h-full  lg:-right-10 sm:h-[360px] sm:-right-12 -right-16">
      <div className="relative w-full h-full flex items-center" ref={main}>
        <Image
          height={1600}
          width={1600}
          src="/home/work-together/work-together.webp"
          alt="work-together"
          className="parallaxImage xxl:h-[510px] translate-y-[-10%] h-[480px] lg:h-[400px] sm:h-[270px] sm:-mt-8 w-auto object-contain xs:mx-auto"
        />
        <div
          className="animateBottom  w-[52px] h-[52px] lg:w-[42px] lg:h-[42px]  sm:w-[32px] sm:h-[32px]  rounded-full  shadow-2xl absolute bottom-[-3%] sm:bottom-[10%] right-[20%]"
          style={{
            background:
              "linear-gradient(206.92deg, #FFFFFF 59.29%, #999999 85.78%)",
          }}
        ></div>
        <div
          className="animateBottom  w-[34px] h-[34px] lg:w-[24px] lg:h-[24px]  sm:w-[18px] sm:h-[18px]  rounded-full  shadow-2xl absolute bottom-[5.5%] sm:bottom-[20%] left-[16.3%]"
          style={{
            background:
              "linear-gradient(206.92deg, #FFFFFF 59.29%, #999999 85.78%)",
          }}
        ></div>
        <div
          className="animateTop  w-[72px] h-[72px]  lg:w-[52px] lg:h-[52px] sm:w-[42px] sm:h-[42px] rounded-full  shadow-2xl absolute top-0 left-[23%]"
          style={{
            background: "linear-gradient(180deg, #FF9C00 0%, #F56300 100%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ImageContainer;
