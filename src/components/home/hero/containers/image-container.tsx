/**
 * This component contains the image container of hero section.
 */

import Image from "next/image";
const ImageContainer: React.FC = () => (
  <div className="absolute right-[-2%] -top-[4%] lg:-top-[5%] sm:top-[3%] xs:top-[-1%] sm:-right-[25%] w-fit h-[700px] lg:h-[568px]">
    <video
      autoPlay={true}
      muted
      loop
      playsInline
      preload="metadata"
      poster={"/home/hero/fallback.webp"}
      className="w-[auto] xxl:h-[700px] h-[700px] lg:h-[538px] sm:h-[468px] xs:h-[350px] object-cover xs:object-contain"
    >
      <source src="/home/hero/bg-video1.webm" type="video/webm" />
      {/* <source src="/home/hero/bg-video.mp4" type="video/mp4" /> */}

      {/* Fallback Image */}
      <Image
        className="w-fit -ml-[32%] xs:-ml-[2%] xxl:h-[800px] h-[700px] lg:h-[538px] sm:h-[468px] object-cover"
        alt="background image"
        src={"/home/hero/fallback.webp"}
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
