/**
 * This component contains the images.
 */

import Image from "next/image";

const ImageContainer: React.FC = () => {
  return (
    <div className="-mt-[2%] grow ml-7 sm:ml-0 xxl:-mt-[2.4%] xxl:-mr-[2%] lg:mr-[2%] lg:-mt-[1.5%] sm:-mt-[4%] sm:mr-[0%] xs:mx-auto xs:mt-0 xs:-mb-10 xs:scale-[1.1] xs:px-[63px] xs:flex xs:justify-center shrink-0 xs:relative  ">
      <Image
        height={1600}
        width={1600}
        src="/services/admin-development/nextjs-development-services/lets-connect.png"
        alt="let's connect"
        className="h-[370px] lg:h-[330px] w-auto sm:h-[250px] xs:w-full xs:h-auto shrink-0 object-contain"
      />
    </div>
  );
};

export default ImageContainer;
