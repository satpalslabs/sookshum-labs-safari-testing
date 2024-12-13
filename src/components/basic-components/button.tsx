"use client";
import { cn } from "@lib/utls";
/**
 * This component contains the Button.
 */

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const DarkButton: React.FC<any> = ({ text, style, id = "" }) => {
  const router = useRouter();
  return (
    <Button
      className={cn(
        `!py-[12px] z-40 relative w-fit !px-8 md:!px-[20px] !border-borderDarkButton [backdrop-filter:blur(100px)] !text-secondary sm:!py-2 sm:!px-3 flex gap-2 items-center !rounded-full !border-solid border !bg-darkButton !shadow-buttonInset text-center flex-nowrap group-hover:!bg-buttonGradient !normal-case !text-[16px] md:!text-sm sm:!text-[11px] ${style}`
      )}
      style={{
        backdropFilter: "blur(100px)",
        WebkitBackdropFilter: "blur(100px)",
        boxShadow: "2px 4px 16px 0px #F8F8F80F inset",
      }}
      id={id}
      onClick={() => {
        router.push(`#${id}`);
      }}
    >
      <span className=" font-medium font-poppins flex-nowrap">{text}</span>
    </Button>
  );
};
export default DarkButton;
