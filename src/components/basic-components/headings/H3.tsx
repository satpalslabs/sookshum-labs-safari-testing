import { cn } from "@lib/utls";

type textType = {
  text: string;
  style: string;
};
const H3: React.FC<textType> = ({ text, style }) => (
  <h3
    className={cn(
      `font-poppins leading-[1.2] text-[36px] md:leading-5 md:text-2xl sm:text-xl text-h3_heading font-medium ${style}`
    )}
  >
    {text}
  </h3>
);

export default H3;
