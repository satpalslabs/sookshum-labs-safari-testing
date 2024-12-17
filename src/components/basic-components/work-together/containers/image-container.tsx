"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const ImageContainer: React.FC = () => {
  const main = useRef<HTMLDivElement | null>(null);
  const mainBox = useRef<HTMLImageElement | null>(null);
  const pathname = usePathname();

  // Function to wait for all images to load
  const waitForImages = () => {
    return new Promise((resolve) => {
      const images = Array.from(
        document.querySelectorAll("img.work-image")
      ).filter(
        (img) => !img.classList.contains("hidden")
      ) as HTMLImageElement[]; // Only select images with class 'work-image'
      let loadedCount = 0;

      images.forEach((img) => {
        if (img.complete) {
          loadedCount++;
        } else {
          img.onload = () => {
            loadedCount++;
            if (loadedCount === images.length) resolve(true);
          };
        }
      });

      if (loadedCount === images.length) resolve(true);
    });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const initializeGSAP = () => {
      const ctx = gsap.context(() => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

        const bottomDivs = gsap.utils.toArray(".animateBottom");

        bottomDivs.forEach((box: any) => {
          gsap.to(box, {
            yPercent: -80,
            ease: "none",
            scrollTrigger: {
              trigger: box,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });

        gsap.to(".animateTop", {
          yPercent: -80,
          ease: "none",
          scrollTrigger: {
            trigger: ".animateTop",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        if (mainBox.current) {
          gsap.to(mainBox.current, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
              trigger: mainBox.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }

        ScrollTrigger.refresh();
      }, main);

      return () => ctx.revert();
    };

    // Wait for images to load, then initialize GSAP
    waitForImages().then(() => {
      initializeGSAP();
    });

    // Add window resize listener for dynamic recalculations
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname]);

  return (
    <div className="absolute xs:relative xs:w-full xs:top-[auto] xs:left-[auto] xs:right-[auto] xs:mx-auto h-full lg:-right-10 sm:h-[360px] sm:-right-12 -right-16">
      <div className="relative w-full h-full flex items-center" ref={main}>
        <Image
          height={1600}
          width={1600}
          ref={mainBox}
          src="/home/work-together/work-together.webp"
          alt="work-together"
          className="parallaxImage xxl:h-[510px] translate-y-[-10%] h-[480px] lg:h-[400px] sm:h-[270px] sm:-mt-8 w-auto object-contain xs:mx-auto"
        />
        <div
          className="animateBottom w-[52px] h-[52px] lg:w-[42px] lg:h-[42px] sm:w-[32px] sm:h-[32px] rounded-full shadow-2xl absolute bottom-[-3%] sm:bottom-[10%] right-[20%]"
          style={{
            background:
              "linear-gradient(206.92deg, #FFFFFF 59.29%, #999999 85.78%)",
          }}
        ></div>
        <div
          className="animateBottom w-[34px] h-[34px] lg:w-[24px] lg:h-[24px] sm:w-[18px] sm:h-[18px] rounded-full shadow-2xl absolute bottom-[5.5%] sm:bottom-[20%] left-[16.3%]"
          style={{
            background:
              "linear-gradient(206.92deg, #FFFFFF 59.29%, #999999 85.78%)",
          }}
        ></div>
        <div
          className="animateTop w-[72px] h-[72px] lg:w-[52px] lg:h-[52px] sm:w-[42px] sm:h-[42px] rounded-full shadow-2xl absolute top-0 left-[23%]"
          style={{
            background: "linear-gradient(180deg, #FF9C00 0%, #F56300 100%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ImageContainer;
