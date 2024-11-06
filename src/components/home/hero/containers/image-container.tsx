/**
 * This component contains the image container of hero section.
 */

import Image from "next/image";
import fallbackImage from "/public/home/hero/fallback.webp";
const ImageContainer: React.FC = () => (
  <div className="absolute -right-[10%] -top-[15%] lg:-top-[5%] sm:top-[3%] xs:top-[-1%] sm:-right-[25%] w-fit h-[700px] lg:h-[568px]">
    <video
      autoPlay={true}
      muted
      loop
      playsInline
      preload="metadata"
      className="w-[auto] xxl:h-[800px] h-[700px] lg:h-[538px] sm:h-[468px] xs:h-[350px] object-cover xs:object-contain"
    >
      <source src="/home/hero/bg-video.webm" type="video/webm" />
      {/* Fallback Image */}
      <Image
        className="w-fit -ml-[32%] xs:-ml-[2%] xxl:h-[800px] h-[700px] lg:h-[538px] sm:h-[468px] object-cover"
        alt="background image"
        src={fallbackImage}
        width={1500}
        height={700}
        blurDataURL="URL"
        placeholder="blur"
        // priority
      />
    </video>
  </div>
);

export default ImageContainer;
