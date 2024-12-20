import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
const NavLink = ({
  text,
  link,
  showLinks,
  setShowLinks,
}: {
  text: string;
  link: string;
  showLinks: boolean;
  setShowLinks: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const currentPath: string = usePathname();
  return (
    <Link
      className={`sm:p-4 text-secondaryText  font-normal group sm:px-10  sm:text-sm sm:flex sm:items-center h-full sm:h-[72px] sm:justify-between sm:shadow-none sm:bg-transparent sm:border-none border-solid  ${
        (link == "/" ? currentPath == "/" : currentPath.includes(link))
          ? " text-white  sm:shadow-none font-semibold sm:bg-transparent sm:border-none border-solid  "
          : ""
      } sm:rounded-[32px] flex items-center gap-2 font-normal hover:text-white xs:shadow-none xs:border-none xs:bg-transparent xs:h-[52px] xs:px-4`}
      href={link}
      onClick={() => {
        if (showLinks) {
          setShowLinks(false);
        }
      }}
    >
      <Fragment>{text}</Fragment>
      {text == "Services" && (
        <svg
          className={`w-3 h-2 group-hover:fill-white transition-transform group-hover:rotate-180 sm:hidden`}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.58579 0.333344C9.47669 0.333344 9.92286 1.41049 9.29289 2.04045L5.70711 5.62624C5.31658 6.01676 4.68342 6.01676 4.29289 5.62624L0.707108 2.04045C0.0771428 1.41049 0.523309 0.333344 1.41421 0.333344H8.58579Z"
            fill="currentColor"
          />
        </svg>
      )}
      {text == "Services" && (
        <div className="hidden group-hover:flex justify-between items-center absolute z-50 w-full max-w-[1920px] bg-black font-poppins text-gray-400 mx-auto top-[100%] left-0 px-[81px] py-8 lg:px-10 lg:py-[34px] md:px-[30px] xs:!px-5"></div>
      )}
    </Link>
  );
};

export default NavLink;
