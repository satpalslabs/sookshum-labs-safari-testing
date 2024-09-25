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
  const [isIOS, setIsIOS] = useState(false);
  const [isIphone, setIsIphone] = useState(false);
  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isMacOS = navigator.platform === "MacIntel";
    if (isIOS) {
      setIsIphone(true);
    } else if (isMacOS) {
      setIsIOS(true);
    }
  }, []);

  return (
    <div
      className={`grow-0 flex items-center col-span-6
       shadow-buttonInset ${
         isIphone
           ? "bg-whyUsSmallDeviceContainer"
           : isIOS
           ? "bg-whyUsContainer"
           : "bg-innerContainer"
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
