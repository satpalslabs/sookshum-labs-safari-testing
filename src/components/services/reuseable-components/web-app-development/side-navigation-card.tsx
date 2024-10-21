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
      <div
        className={`!py-[12px] w-fit !px-8 md:!px-[20px] !border-borderDarkButton [backdrop-filter:blur(100px)] !text-light sm:!py-2 sm:!px-3 flex gap-2 items-center !rounded-full !border-solid border !bg-darkButton !shadow-buttonInset text-center flex-nowrap group-hover:!bg-buttonGradient !normal-case !text-[16px] md:!text-sm sm:!text-[11px] ${
          props.ind == props.active ? " !text-primary" : ""
        } md:px-8 md:py-[8px] sm:px-[20px] sm:py-[8px] xs:w-[56px] xs:h-[34px] xs:!p-0 xs:text-center xs:justify-center xs:items-center shrink-0`}
        style={{
          backdropFilter: "blur(100px)",
          boxShadow: "2px 4px 16px 0px #F8F8F80F inset",
        }}
      >
        <span className=" font-medium font-poppins flex-nowrap">
          {`${props.ind + 1}.`}
        </span>
      </div>
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
