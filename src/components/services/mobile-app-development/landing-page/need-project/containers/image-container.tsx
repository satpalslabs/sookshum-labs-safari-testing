/**
 * This component contains the images.
 */

import Image from "next/image";

const ImageContainer: React.FC = () => {
  return (
    <div className="relative grow xs:flex xs:items-center">
      <Image
        height={400}
        width={400}
        src="/services/mobile-app-devlopment/landing-page/lets-connect.webp"
        className="h-full w-auto scale-[1.2] lg:scale-[1.1] top-[-12%] right-[10%] lg:right-[1%] absolute xs:relative xs:w-fit xs:scale-90 xs:right-0"
        alt="let's connect"
      />
    </div>
  );
};

export default ImageContainer;
