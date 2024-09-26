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
  // const [isIphone, setIsIphone] = useState(false);
  useEffect(() => {
    const isiOS = isIpadOS();
    const isMacOS = navigator.platform === "MacIntel";
    if (isMacOS || isiOS) {
      setIsIOS(true);
    }
    function isIOS() {
      if (
        /iPad|iPhone|iPod/.test(navigator.platform) ||
        /iPad|iPhone|iPod/.test(navigator.userAgent)
      ) {
        return true;
      } else {
        return (
          navigator.maxTouchPoints &&
          navigator.maxTouchPoints > 2 &&
          /MacIntel/.test(navigator.platform)
        );
      }
    }

    function isIpadOS() {
      if (
        navigator.maxTouchPoints &&
        navigator.maxTouchPoints > 2 &&
        /MacIntel/.test(navigator.platform)
      ) {
        return true;
      }else{
        return isIOS();
      }
    }
  }, []);

  return (
    <div
      className={`grow-0 flex items-center col-span-6
       shadow-buttonInset bg-innerContainer rounded-[32px] lg:rounded-[26px] sm:gap-3 xs:hidden grayscale transition-all ${
         isInView ? "grayscale-0" : "grayscale"
       } }`}
    >
      {isIOS ? (
        <img
          src={item.image_url}
          className="w-[500px] m-auto  md:w-[368px] md:h-[368px] object-contain"
        />
      ) : (
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
      )}
    </div>
  );
};

export default ImageContainer;
