"use client"
/**
 * This component contains the Button.
 */

import { Button } from "@mui/material";


type props = {
  text: string;
  style: string;
};

const DarkButton: React.FC<props> = ({ text, style }) => {
  return (
    <Button
      className={`!py-[12px] w-fit !px-8 md:!px-[20px] !border-borderDarkButton [backdrop-filter:blur(100px)] !text-light sm:!py-2 sm:!px-3 flex gap-2 items-center !rounded-full !border-solid border !bg-darkButton !shadow-buttonInset text-center flex-nowrap group-hover:!bg-buttonGradient ${style} !normal-case`}
    >
      <span className="text-[16px] md:text-sm sm:text-[11px] font-medium font-poppins flex-nowrap">
        {text}
      </span>
    </Button>
  );
};
export default DarkButton;
