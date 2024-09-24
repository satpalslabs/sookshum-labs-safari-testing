/**
 * This component contains the image container of hero section.
 */

import Image from "next/image";

const ImageContainer: React.FC = () => (
  <div className="absolute right-0 xxl:-top-8 top-0 sm:-top-10 xs:-top-8 w-fit min-h-fit float-right ">
    <video
      autoPlay={true}
      poster="/home/hero/fallback.webp"
      muted
      loop
      playsInline
      className="w-fit h-[700px] xxl:h-[800px] float-right lg:h-[568px] sm:h-[503px] xs:w-full xxl:-mt-[7.4%] -mt-[10%] lg:-mt-[5%] sm:mt-[8%] xs:mt-[-9%] 2xs:mt-[-25%]  sm:-mr-[20%] -mr-[15%] sm:-ml-6 md:ml-[58px] lg:ml-[50px] xs:h-[650px] lg:object-contain"
      width={1500}
      height={1500}
      preload="auto"
    >
      <source src="/home/hero/bg-video.webm" type="video/webm" />
      {/* Fallback */}
      <Image
        width={1200}
        height={600}
        className="w-fit h-[700px] xxl:h-[800px] lg:h-[568px] sm:h-[503px] xs:w-full xxl:-mt-[7.4%] -mt-[10%] lg:-mt-[5%] sm:mt-[8%] xs:mt-[-9%] 2xs:mt-[-25%]  sm:-mr-[20%] -mr-[15%] sm:-ml-6 md:ml-[58px] lg:ml-[50px] xs:h-[650px] lg:object-contain"
        alt="background image"
        src="/home/hero/fallback.webp"
        priority
        title="Your browser does not support the <video> tag"
      />
    </video>

    {/* <div
        className={`w-[110%] -left-[10%] right-0 h-[900px] lg:h-[668px] xs:w-[400px] xs:h-[400px] float-right xxl:-mt-[7.4%] -mt-[10%] lg:-mt-[18%] sm:-mt-[36%] lg:mr-0 mr-[2%] sm:-mr-[22%]  md:ml-[58px] lg:ml-[50px] xs:-mt-[44%] bg-gradient-to-l from-black via-gray to-black absolute`}
      ></div> */}

    {/* <div
      className={`max-w-[150%] w-[100%]  right-0 h-[900px] lg:h-[668px] xs:w-[400px] xs:h-[600px] float-right xxl:-mt-[7.4%] -mt-[10%] lg:-mt-[18%] sm:-mt-[36%] sm:-mr-[0%] lg:mr-0 mr-[2%] sm:-ml-6 md:ml-[58px] lg:ml-[50px] xs:-mt-[44%] xs:!right-0 xs:left-none xs:ml-0 bg-gradient-to-l from-black via-transparent to-black absolute`}
    ></div> */}
    {/* <div
        className={`h-[600px] w-[500px] right-0 top-[-50%] -mt-[40%] bg-gradient-to-l from-black via-transparent to-black absolute`}
      >ds</div> */}
    {/* <Image
      src="/home/hero/hero-lg.png"
      className="w-full h-full ml-[0px] hidden xs:block "
      width={1500}
      height={1500}
      alt="background image"
    /> */}
    {/* <div className="w-[900px] h-[900px] absolute hex-wrapper top-0 z-[80] rotate-12 right-0">
      <div className="hex-outer">
        <div className="hex-inner"></div>
      </div>
    </div> */}
  </div>
);

export default ImageContainer;
