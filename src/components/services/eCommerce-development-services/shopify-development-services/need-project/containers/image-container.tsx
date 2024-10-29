/**
 * This component contains the images.
 */

import Image from "next/image";

const ImageContainer: React.FC = () => {
  return (
    <div className="-mt-[3%] grow ml-7 sm:ml-0 xxl:-mt-[2.4%] xxl:-mr-[2%] lg:mr-[2%] lg:-mt-[1.5%] sm:-mt-[3%] sm:mr-[0%] xs:mx-auto xs:mt-0 xs:-mb-10 xs:scale-[1.1] xs:px-[63px] xs:flex xs:justify-center  shrink-0">
      <Image
        width={800}
        height={800}
        src="/services/e-commerce-development/shopify-development-services/lets-connect.webp"
        alt="let's connect"
        className="h-[440px] lg:h-[330px] w-auto xs:w-full xs:h-auto shrink-0"
      />
    </div>
  );
};

export default ImageContainer;
