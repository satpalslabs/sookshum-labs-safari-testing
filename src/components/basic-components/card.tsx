
type props = {
  children: React.ReactNode;
  isInView: boolean;
  style: string;
};
const Card: React.FC<props> = ({ children, isInView = false, style }) => (
  <div
    className={`group p-4 pb-8 sm:p-[9px] sm:pb-[14px] lg:p-[14px] lg:pb-[23px] relative shadow-buttonInset bg-innerContainer rounded-[32px] sm:rounded-[20px] flex flex-col transition-all duration-1000 hover:bg-gradientOnHover border-[1.5px] cursor-pointer hover:border-borderPrimary ${
      isInView
        ? "border-viewportBorder  grayscale-0"
        : "border-transparent grayscale"
    } ${style}`}
  >
    {children}
  </div>
);

export default Card;
