import { cn } from "@lib/utls";

type props = {
  children: React.ReactNode;
  isInView: boolean;
  style: string;
};
const Card: React.FC<props> = ({ children, isInView = false, style }) => (
  <div
    className={cn(
      `relative w-full group  z-0 cursor-pointer overflow-hidden rounded-[32px] sm:rounded-[20px]   bg-viewportBorder transition-all hover:bg-gradient-to-br  hover:from-borderPrimary hover:via-transparent hover:to-borderPrimary duration-1000 ${
        isInView
          ? `bg-viewportBorder  grayscale-0 `
          : "bg-transparent grayscale"
      } ${style} !p-[1px]`
    )}
  >
    <div
      className={`rounded-[32px] sm:rounded-[20px]  ${style} !p-0 !w-full sm:!w-full !h-full !overflow-hidden  !bg-black `}
    >
      <div
        className={cn(
          `  h-full bg-innerContainer p-4 pb-8 sm:p-[9px] sm:pb-[14px] lg:p-[14px] lg:pb-[23px] relative shadow-buttonInset rounded-[32px] sm:rounded-[20px] flex flex-col ${style} !w-full`
        )}
      >
        {children}
      </div>
    </div>
    <div className="absolute z-20 bg-transparent transition-all duration-1000 top-0 left-0 w-full h-full group-hover:block group-hover:bg-gradientOnHover "></div>
  </div>
);

export default Card;
