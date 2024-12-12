/**
 * This component contains the images.
 */

import Image from "next/image";

const ImageContainer: React.FC = () => {
  return (
    <div className="absolute xs:relative xs:w-full xs:top-[auto] xs:left-[auto] xs:right-[auto] xs:mx-auto h-[650.56px] lg:h-[500px] lg:-right-10 lg:-top-[52px] sm:h-[360px] sm:-right-12 sm:-top-[36px] -right-16 -top-16">
      <Image
        height={1600}
        width={1600}
        src="/home/work-together/work-together.webp"
        alt="work-together"
        className="h-full w-auto object-contain xs:mx-auto"
      />
    </div>
  );
};

export default ImageContainer;
