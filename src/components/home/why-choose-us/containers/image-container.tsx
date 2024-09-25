/**
 * This file contains the image container of why choose us section.
 */

import Image from "next/image";
import { dataItemType } from "./main-container";
import { useEffect, useState } from "react";

const ImageContainer = ({
  item,
  isInView,
}: {
  item: dataItemType;
  isInView: boolean;
}) => {
  const [isRetina, setIsRetina] = useState(window.devicePixelRatio > 1);

  useEffect(() => {
    const checkDevicePixelRatio = () => {
      setIsRetina(window.devicePixelRatio > 1);
    };

    // Initial check on mount
    checkDevicePixelRatio();

    // Add event listener for resize
    window.addEventListener("resize", checkDevicePixelRatio);

    return () => window.removeEventListener("resize", checkDevicePixelRatio);
  }, []);

  return (
    <div
      className={`grow-0 flex items-center col-span-6
       shadow-buttonInset ${
         isRetina ? "bg-whyUsContainer" : "bg-innerContainer"
       } rounded-[32px] lg:rounded-[26px] sm:gap-3 xs:hidden grayscale transition-all ${
        isInView ? "grayscale-0" : "grayscale"
      } }`}
    >
      <video
        autoPlay={true}
        src={item.video_url}
        muted
        loop
        playsInline
        className="w-[500px] m-auto  md:w-[368px] md:h-[368px] object-contain"
      >
        <img
          src={item.image_url}
          title="Your browser does not support the <video> tag"
        />
      </video>
    </div>
  );
};

export default ImageContainer;
