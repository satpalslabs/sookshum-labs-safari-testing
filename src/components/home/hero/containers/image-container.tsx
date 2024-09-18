/**
 * This component contains the image container of hero section.
 */

import type React from "react";

const ImageContainer: React.FC = () => (
  <div className="relative w-fit min-h-fit float-right ma">
    <div className="xs:mt-[203px] 2xs:mt-[240px] sm:mt-[173px] md:mt-[90px] relative lg:mt-24 bg-[#151515] overflow-visible">
      <video
        autoPlay={true}
        muted
        loop
        className="w-fit h-[900px] lg:h-[668px] xs:w-full xs:h-auto float-right xxl:-mt-[7.4%] -mt-[10%] lg:-mt-[18%] sm:-mt-[36%] xs:-mt-[44%] sm:-mr-[22%] -mr-[15%] sm:-ml-6 md:ml-[58px] lg:ml-[50px] lg:object-cover"
        width={1500}
        height={1500}
        // alt="background image"
        src="/home/hero/bg-video.mp4"
      >
        {/* <source src="/home/hero/bg-video.mp4" type="video/mp4" /> */}
        <img
          src="/home/hero/fallback.png"
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
      {/* <img
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
  </div>
);

export default ImageContainer;
