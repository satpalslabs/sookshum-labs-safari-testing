"use client";
/**
 * This component contains the image container of hero section.
 */

import type React from "react";
import ThreeScene from "./hero-animation";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ImageContainer: React.FC = () => (
  <div className="relative w-fit min-h-fit float-right ma">
    <div className="xs:mt-[203px] 2xs:mt-[240px] sm:mt-[173px] md:mt-[90px] relative lg:mt-24  overflow-visible">
      {/* <video
        autoPlay={true}
        poster="/home/hero/fallback.png"
        muted
        loop
        playsInline
        className="w-fit h-[900px] lg:h-[568px] sm:[493px] xs:w-full float-right xxl:-mt-[7.4%] -mt-[10%] lg:-mt-[18%] sm:-mt-[18%] xs:-mt-[54%] sm:-mr-[20%] -mr-[15%] sm:-ml-6 md:ml-[58px] lg:ml-[50px] xs:h-[350px] lg:object-contain"
        width={1500}
        height={1500}
        // alt="background image"
        src="/home/hero/bg-video.webm"
      >
        <img
          src="/home/hero/fallback.png"
          title="Your browser does not support the <video> tag"
        />
      </video> */}
      {/* <Canvas className="w-fit scale-150 h-[1200px] lg:h-[568px] sm:[493px] xs:w-full float-right xxl:-mt-[17.4%] -mt-[10%] lg:-mt-[18%] sm:-mt-[18%] xs:-mt-[54%] sm:-mr-[20%] mr-[15%] sm:-ml-6 md:ml-[58px] lg:ml-[50px] xs:h-[350px] lg:object-contain" style={{
          height:"800px",
          width:"600px"
        }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          <ThreeScene />
          <OrbitControls enableZoom={false} />{" "}
          {/* Optional: Adds controls to move around the scene */}
      {/* </Canvas> */}
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
      <div className="w-[900px] h-[900px] absolute hex-wrapper top-0 z-[80] right-0 -mt-10">
        <div className="hex-outer !rotate-0">
          <div className="hex-inner p-24">
            <div className="hex-outer hex-outer-2nd !rotate-0">
              <div className="hex-inner p-24">
                <div className="hex-outer !rotate-0  last-hexa">
                  <div className="hex-inner flex items-center justify-center">
                    <Canvas
                    className="-ml-[50%] -mt-[20%]"
                      style={{
                        height: "450px",
                        width: "450px",
                        scale:"1.4",
                      }}
                    >
                      <ambientLight intensity={0.5}/>
                      <directionalLight position={[10,10,10]}/>
                      <ThreeScene />
                      <OrbitControls enableZoom={false}  autoRotate autoRotateSpeed={10}/>{" "}
                      {/* Optional: Adds controls to move around the scene */}
                    </Canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ImageContainer;
