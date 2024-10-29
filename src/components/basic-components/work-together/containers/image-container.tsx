/**
 * This component contains the images.
 */

import Image from "next/image";

const ImageContainer: React.FC = () => {
  return (
    <div className="-mt-[5%] -mr-[7%] scale-[auto] xxl:scale-[1.1] xxl:-mt-[2.4%] xxl:-mr-[2%] lg:scale-[1.5] lg:mr-[5%] lg:mt-[5.5%] sm:scale-[1.38] sm:mt-[7%] sm:mr-[3%] xs:mx-auto xs:mt-0 xs:scale-95 xs:flex xs:justify-center">
      <Image
        height={800}
        width={600}
        src="/home/work-together/work-together.webp"
        alt="work-together"
        className="h-full w-auto object-contain"
      />
    </div>
  );
};

export default ImageContainer;
