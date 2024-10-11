import DarkButton from "@components/basic-components/button";
import H6 from "@components/basic-components/headings/H6";
import { Button } from "@mui/material";

const SideNavigation: React.FC<{
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  ind: number;
  title: string;
  style: string;
}> = (props) => (
  <Button
    className={`flex !text-primary text-opacity-5 flex-col gap-[10px] lg:gap-[10px] w-full sm:w-fit shrink-0 ${props.style} !normal-case`}
  >
    <div
      className="flex gap-[27px] font-poppins text-white items-center w-full lg:gap-[17px] sm:gap-[10px] shrink-0 xs:gap-[17px] cursor-pointer"
      onClick={() => {
        props.setActive(props.ind);
      }}
    >
      <DarkButton
        text={`0${props.ind + 1}`}
        style={`${
          props.ind == props.active ? " !text-primary" : ""
        } md:!px-8 md:!py-[8px] sm:!px-[20px] sm:!py-[8px] xs:!w-[56px] xs:!h-[34px] xs:!p-0 xs:text-center xs:justify-center xs:items-center shrink-0`}
      />
      <div className="flex gap-[57px] shrink-0 lg:gap-[26px] items-center xs:flex-col xs:items-start xs:gap-1 xs:grow">
        <H6
          text={props.title}
          classes="text-white text-base leading-[1.6] xs:pr-5 !font-poppins tracking-tight"
        />
      </div>
    </div>
    <div
      className={`h-[1px] mx-auto shrink-0 ${
        props.ind != props.active ? "w-0" : "w-full"
      } transition-all bg-gradient-to-r from-[#AAAAAA1A] via-[#FFFFFF] to-[#9999991A]`}
    ></div>
  </Button>
);

export default SideNavigation;
