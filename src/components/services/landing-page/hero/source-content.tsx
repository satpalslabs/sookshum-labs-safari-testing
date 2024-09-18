import React from "react";
import type { contentProps } from ".";

const SourceContent: React.FC<contentProps> = (props) => (
  <div>
    <div
      className={`absolute  ${
        props.showContent == "video"
          ? `scale-[2] xxl:left-[50%] xxl:translate-x-[-35%] xxl:w-full xxl:object-cover w-screen h-[520px] xs:-top-[5%] xs:scale-[4] sm:h-[290px] xs:h-[180px] lg:h-[411px]  xxl:h-[520px] xxl:-top-[60%] -top-[45%] ${props.style.sourceStyle}`
          : `scale-[1.4] xxl:left-[3%] w-screen h-[520px] xs:-top-[1%] xs:scale-[3] sm:h-[290px] xs:h-[180px] lg:h-[411px]  xxl:h-[520px] xxl:-top-[10%] -top-[10%] ${props.style.sourceStyle}`
      }  overflow-y-hidden overflow-x-hidden z-0 grayscale max-w-[1920px] mx-auto`}
    >
      {props.showContent == "video" ? (
        <video
          autoPlay={true}
          poster={props.fallback}
          src={props.source}
          muted
          loop
          className="mt-0"
        >
          <source src={props.source} type="video/webm" />

          <img
            src={props.fallback}
            title="Your browser does not support the <video> tag"
          />
        </video>
      ) : (
        <img className="w-full object-cover" src={props.source} alt="" />
      )}
    </div>
    <div
      className={`absolute  ${
        props.showContent == "video"
          ? `scale-[2] xxl:left-[50%] xxl:translate-x-[-35%] xxl:w-full xxl:object-cover w-screen h-[520px] xs:-top-[2%] xs:scale-[4] sm:h-[290px] xs:h-[180px] lg:h-[411px]  xxl:h-[520px] xxl:-top-[58%] -top-[45%]`
          : `scale-[1.4] xxl:left-[3%] w-screen h-[520px] xs:-top-[1%] xs:scale-[3] sm:h-[290px] xs:h-[180px] lg:h-[421px]  xxl:h-[90%] xxl:-top-[8%] -top-[10%]`
      }  overflow-y-hidden overflow-x-hidden z-0 grayscale max-w-[1920px] mx-auto bg-gradient-to-t from-black via-lightBlack to-black  ${
        props.style.gradientDivStyle
      } `}
    ></div>
  </div>
);

export default SourceContent;
