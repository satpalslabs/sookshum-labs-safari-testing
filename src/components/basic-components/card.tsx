type props = {
  children: React.ReactNode;
  isInView: boolean;
  style: string;
};
const Card: React.FC<props> = ({ children, isInView = false, style }) => (
  <div
    className={`relative w-full group h-full z-0 cursor-pointer overflow-hidden rounded-[32px] sm:rounded-[20px]  p-[1px] bg-viewportBorder transition-all hover:bg-gradient-to-br  hover:from-borderPrimary hover:via-transparent hover:to-borderPrimary duration-1000 ${
      isInView ? `bg-viewportBorder  grayscale-0 ` : "bg-transparent grayscale"
    }`}
  >
    <div className="w-full h-full overflow-hidden rounded-[32px] bg-black sm:rounded-[20px] ">
      <div
        className={`w-full h-full bg-innerContainer p-4 pb-8 sm:p-[9px] sm:pb-[14px] lg:p-[14px] lg:pb-[23px] relative shadow-buttonInset rounded-[32px] sm:rounded-[20px] flex flex-col ${style}`}
      >
        {children}
      </div>
    </div>
    <div className="absolute z-[999] bg-transparent transition-all duration-1000 top-0 left-0 w-full h-full group-hover:block group-hover:bg-gradientOnHover "></div>
  </div>
);

export default Card;
