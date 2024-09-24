/**
 * This component contains the image container of hero section.
 */

import Image from "next/image";
import fallbackImage from "/public/home/hero/fallback.webp";
const ImageContainer: React.FC = () => (
  <div className="absolute right-0 top-0 w-full h-[700px] lg:h-[568px]">
    <video
      autoPlay={true}
      poster="/home/hero/fallback.webp"
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-[700px] lg:h-[568px] object-contain"
    >
      <source src="/home/hero/bg-video.webm" type="video/webm" />
      {/* Fallback Image */}
      <Image
        className="w-full h-[700px] lg:h-[568px] object-contain"
        alt="background image"
        src={fallbackImage}
        width={1500}
        height={700}
        blurDataURL="URL"
        placeholder="blur"
        priority
      />
    </video>
  </div>
);


export default ImageContainer;
