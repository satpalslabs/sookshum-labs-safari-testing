/**
 * This file contains the image container of why choose us section.
 */

const ImageContainer = ({
  source,
  isInView,
}: {
  source: string;
  isInView: boolean;
}) => (
  <div
    className={`grow-0 flex items-center col-span-6
       shadow-buttonInset bg-innerContainer rounded-[32px] lg:rounded-[26px] sm:gap-3 xs:hidden grayscale transition-all ${
      isInView ? "grayscale-0" : "grayscale"
    } }`}
  >
    <img
      height={500}
      width={500}
      className="w-[500px] m-auto md:w-[368px] md:h-[368px] object-contain"
      alt=""
      src={source}
    />
  </div>
);

export default ImageContainer;
