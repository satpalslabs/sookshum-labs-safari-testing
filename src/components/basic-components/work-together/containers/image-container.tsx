/**
 * This component contains the images.
 */

import Image from "next/image";

const ImageContainer: React.FC = () => {
  return (
    <div className="-mt-[5%] -mr-[7%] scale-[auto] xxl:scale-[1.1] xxl:-mt-[2.4%] xxl:-mr-[2%] lg:scale-[1.5] lg:mr-[5%] lg:mt-[4.5%] sm:scale-[1.38] sm:mt-[7%] sm:mr-[3%] xs:mx-auto xs:mt-0 xs:scale-95 xs:flex xs:justify-center">
      {/* <Image
        width={717}
        height={612}
        className="w-full h-auto"
        src="/home/work-together/work-together.webp"
        alt="work-together"
        blurDataURL="URL"
        placeholder="blur"
      /> */}
      <img src="/home/work-together/work-together.png" alt="work-together" />
    </div>
  );
};

export default ImageContainer;
