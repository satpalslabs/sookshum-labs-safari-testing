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
  const [isMacOS, setIsMacOS] = useState(false);
  const [isIphone, setIsIphone] = useState(false);
  const [isIPad, setIsIPad] = useState(false);
  useEffect(() => {
    const isiOS = isIOS();
    const isiPad = isIpadOS();
    const isMacOS = navigator.platform === "MacIntel";
    if (isMacOS) {
      setIsMacOS(true);
    } else if (isiPad) {
      setIsIPad(true);
    } else if (isiOS) {
      setIsIphone(true);
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
      return (
        navigator.maxTouchPoints &&
        navigator.maxTouchPoints > 2 &&
        /MacIntel/.test(navigator.platform)
      );
    }
  }, []);

  return (
    <div
      className={`grow-0 flex items-center col-span-6
       shadow-buttonInset ${
         isMacOS && !isIPad ? "bg-whyUsContainerMacOS" : "bg-innerContainer"
       } rounded-[32px] lg:rounded-[26px] sm:gap-3 xs:hidden grayscale transition-all ${
        isInView ? "grayscale-0" : "grayscale"
      } }`}
    >
      {isIphone ? (
        <img
          src={item.image_url}
          alt="fallback image"
          className="w-[500px] m-auto  md:w-[368px] md:h-[368px] object-contain h-[500px]"
        />
      ) : (
        <video
          autoPlay={true}
          src={item.video_url}
          muted
          loop
          playsInline
          className="w-[500px] m-auto  md:w-[368px] md:h-[368px] object-contain h-[500px]"
        >
          <img
            src={item.image_url}
            title="Your browser does not support the <video> tag"
            alt="fallback image"
          />
        </video>
      )}
    </div>
  );
};

export default ImageContainer;
