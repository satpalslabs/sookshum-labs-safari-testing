import { cn } from "@lib/utls";

type textType = {
  text: string;
  style: string;
};
const H4: React.FC<textType> = ({ text, style }) => (
  <h4
    className={cn(
      `font-poppins leading-[1.2] text-[26px] md:text-xl sm:text-sm text-h3_heading font-medium ${style}`
    )}
    dangerouslySetInnerHTML={{ __html: text }}
  ></h4>
);

export default H4;
