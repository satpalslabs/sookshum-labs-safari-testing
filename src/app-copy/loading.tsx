import React from "react";

function Loading() {
  return (
    <div className="w-full min-h-screen h-full flex justify-center bg-black items-center">
      <div className="relative">
        <video
          autoPlay={true}
          poster="favicon.png"
          muted
          loop
          playsInline
          className=" w-fit h-[280px] translate-x-[3%] bg-transparent xs:w-full lg:h-[200px] xs:h-[150px] lg:object-contain"
          width={1500}
          height={1500}
          src="/loader.mp4"
        >
          <img
            src="/favicon.png"
            title="Your browser does not support the <video> tag"
          />
        </video>
        
      </div>
    </div>
  );
}

export default Loading;
