/**
 * This component contains the GraphQLButton.
 */

import Button from "@mui/material/Button";
import Image from "next/image";

type props = {
  text: string;
  style: string;
  image: string;
};

const GraphQLButton: React.FC<props> = ({ text, style, image }) => (
  <Button
    className={`w-fit !p-6 xs:!p-3 sm:!py-4 xs:!w-full xs:!overflow-hidden xs:!text-ellipsis !border-borderDarkButton [backdrop-filter:blur(100px)] !text-light flex !gap-2 items-center !rounded-[32px] !border-solid !border !bg-darkButton !shadow-buttonInset !text-center !justify-between !text-nowrap  hover:!bg-buttonGradient ${style} !normal-case`}
  >
    <Image
      src={image}
      alt=""
      width="400"
      height="400"
      className="w-[32px] h-[32px] xs:w-[24px] xs:h-[24px]"
      blurDataURL="URL"
      placeholder="blur"
    />
    <div className="text-[16px] md:text-sm xs:tracking-tight xs:text-[13px] font-medium font-poppins flex-nowrap  xs:overflow-hidden xs:text-ellipsis">
      {text}
    </div>
  </Button>
);
export default GraphQLButton;
