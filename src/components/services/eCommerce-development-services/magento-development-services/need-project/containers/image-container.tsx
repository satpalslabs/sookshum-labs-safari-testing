/**
 * This component contains the images.
 */

import Image from "next/image";

const ImageContainer: React.FC = () => {
  return (
    <div className="-mt-[2%] grow ml-7 sm:ml-0 scale-[0.95] xxl:-mt-[2.4%] xxl:-mr-[2%] lg:scale-[1.1] lg:mr-[2%] lg:-mt-[2.5%] sm:scale-[1.1] sm:-mt-[3%] sm:mr-[0%] xs:mx-auto xs:mt-0 xs:scale-[1.1] xs:px-[63px] xs:flex xs:justify-center">
      <Image
        width={800}
        height={800}
        src="/services/e-commerce-development/landing-page/lets-connect.webp"
        alt="let's connect"
        className="w-full h-auto object-contain"
      />
    </div>
  );
};

export default ImageContainer;
