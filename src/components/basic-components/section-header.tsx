import { ReactNode } from "react";
import DarkButton from "./button";
import H2 from "./headings/H2";
import Description from "./description";

const SectionHeader: React.FC<any> = ({
  buttonText,
  id = "",
  description,
  children,
  style,
}) => (
  <div
    className={`flex flex-col gap-6 lg:gap-[15px] xs:gap-2 items-center text-center w-[661px] lg:w-[500px] xs:w-full xs:px-4 3xs:px-0 xs:!text-wrap ${style}`}
  >
    <DarkButton style="" text={buttonText} id={id} />
    <H2>
      <div className="hero-text">{children}</div>
    </H2>
    <Description
      text={""}
      classes={
        "!text-lg lg:!text-sm sm:!text-[13px] xs:!text-[12px] !leading-[1.4] !text-secondary !font-[300]"
      }
    >
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </Description>
  </div>
);

export default SectionHeader;
