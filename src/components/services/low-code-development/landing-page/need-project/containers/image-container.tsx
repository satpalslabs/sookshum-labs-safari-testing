/**
 * This component contains the images.
 */

import Image from "next/image";

const ImageContainer: React.FC = () => {
  return (
    <div className="relative grow xs:flex xs:items-center">
      <Image
        height={1200}
        width={1200}
        src="/services/low-code-development/landing-page/lets-connect.webp"
        className="h-full w-auto scale-[1.4] top-[-10%] right-[15%] object-contain absolute xs:relative xs:w-fit xs:scale-90 xs:right-0 sm:object-contain"
        alt="let's connect"
      />
    </div>
  );
};

export default ImageContainer;
