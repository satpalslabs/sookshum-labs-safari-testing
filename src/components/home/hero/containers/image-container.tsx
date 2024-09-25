/**
 * This component contains the image container of hero section.
 */

import Image from "next/image";
import fallbackImage from "/public/home/hero/fallback.webp";
const ImageContainer: React.FC = () => (
  <div className="absolute -right-[10%] -top-[15%] lg:-top-[5%] sm:top-[3%] xs:top-[-13%] sm:-right-[15%] w-fit h-[700px] lg:h-[568px]">
    <video
      autoPlay={true}
      muted
      loop
      playsInline
      preload="metadata"
      className="w-[auto] xxl:h-[800px] h-[700px] lg:h-[538px] sm:h-[468px] object-fill"
    >
      <source src="/home/hero/bg-video.webm" type="video/webm" />
      <source src="/home/hero/bg-video.mp4" type="video/mp4" />
      {/* Fallback Image */}
      <Image
        className="w-fit -ml-[32%] xs:-ml-[2%] xxl:h-[800px] h-[700px] lg:h-[538px] sm:h-[468px] object-cover"
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
