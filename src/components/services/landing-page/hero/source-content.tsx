import Image from "next/image";
import type { contentProps } from ".";
import { cn } from "@lib/utls";

const SourceContent: React.FC<contentProps> = (props) => (
  <div>
    <div
      className={cn(
        `absolute  ${
          props.showContent == "video"
            ? `scale-[2] xxl:left-[50%] xxl:translate-x-[-35%] xxl:w-full xxl:object-cover w-screen h-[540px] xs:-top-[5%] xs:scale-[4] sm:h-[370px] xs:max-h-[170px] lg:h-[481px] md:h-[461px] xxl:h-[520px] xxl:-top-[60%] -top-[45%] `
            : ` `
        }  overflow-y-hidden overflow-x-hidden z-0 grayscale max-w-[1920px] mx-auto ${
          props.style.sourceStyle
        }`
      )}
    >
      {props.showContent == "video" ? (
        <video
          autoPlay={true}
          poster={props.fallback}
          src={props.source}
          muted
          loop
          playsInline
          className="mt-0 w-full object-cover"
        >
          <source src={props.source} type="video/webm" />

          {/* <Image
            width="800"
            height="800"
            src={props.fallback}
            title="Your browser does not support the <video> tag"
            alt="fallback"
            className="w-full h-auto object-cover"
          /> */}
        </video>
      ) : (
        <Image
          width="800"
          height="800"
          className="w-full object-cover"
          src={props.source}
          alt="Background image"
        />
      )}
    </div>
    <div
      className={cn(
        `absolute  ${
          props.showContent == "video"
            ? `scale-[1] xxl:left-[50%] xxl:translate-x-[-50%] min-w-[100vw] w-screen xxl:h-[720px] xxl:object-cover h-[800px] xs:scale-[1] sm:h-[470px] lg:h-[700px] md:h-[600px] xs:h-[600px] lg:-top-[25%] md:-top-[26%] xs:-top-[40%] xxl:-top-[41%] -top-[40%]`
            : ``
        }  overflow-y-hidden overflow-x-hidden z-0 grayscale max-w-[1920px] mx-auto bg-gradient-to-t from-black via-lightBlack to-black  ${
          props.style.gradientDivStyle
        } `
      )}
    ></div>
  </div>
);

export default SourceContent;
