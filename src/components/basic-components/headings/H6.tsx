import { cn } from "@lib/utls";

type textType = {
  text: string | undefined;
  classes: string;
};
const H6: React.FC<textType> = ({ text, classes }) => (
  <div
    className={cn(
      `font-poppins text-[19px] leading-[1.4] md:text-base sm:text-sm text-h3_heading font-medium ${classes}`
    )}
    dangerouslySetInnerHTML={{ __html: text ?? "" }}
  ></div>
);

export default H6;
