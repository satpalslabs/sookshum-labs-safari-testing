import { ReactNode } from "react";
import DarkButton from "./button";
import H2 from "./headings/H2";
import Description from "./description";

type props = {
  buttonText: string;
  description: string;
  children?: ReactNode;
  style: string;
};
const SectionHeader: React.FC<props> = ({
  buttonText,
  description,
  children,
  style,
}) => (
  <div
    className={`flex flex-col gap-6 lg:gap-3 xs:gap-2 items-center text-center w-[661px] lg:w-[500px] xs:w-full xs:px-4 3xs:px-0 xs:!text-wrap ${style}`}
  >
    <DarkButton style="" text={buttonText} />
    <H2>{children}</H2>
    <Description
      children={null}
      text={description}
      classes={"text-lg !font-[300]"}
    />
  </div>
);

export default SectionHeader;
