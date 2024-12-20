// import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import Dropdown from "./dropdown";
import Link from "next/link";
const NavLinkService = ({
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
  const [hovered, setHovered] = useState<boolean>(false);
  const currentPath: string = usePathname();
  return (
    <div>
      <div
        className={`${
          hovered ? "opacity-100 duration-0" : "opacity-0 duration-[0.65s]"
        }  absolute bg-layoutBackground w-full h-full left-0 z-[-20] sm:hidden bottom-0  transition-all`}
      />

      <div
        // Temporary disable
        onMouseLeave={() => {
          setHovered(false);
        }}
        onMouseEnter={() => {
          setHovered(true);
        }}
        className={"sm:flex-col sm:gap-0 sm:w-full h-full"}
      >
        <Link
          className={`sm:hidden group relative h-full sm:px-10 sm:text-sm text-secondaryText  sm:items-center  sm:h-[72px] sm:justify-between sm:hover:shadow-buttonInset sm:hover:bg-innerContainer sm:hover:border border-solid  ${
            currentPath.includes(link.replaceAll("/", ""))
              ? "sm:bg-innerContainer font-semibold sm:shadow-buttonInset text-white "
              : ""
          } sm:rounded-[32px]  flex items-center gap-2 hover:text-white ${
            hovered && "text-white"
          } sm:shadow-none sm:border-none sm:bg-transparent sm:h-[52px] sm:px-4`}
          href={link}
          onClick={() => {
            if (showLinks) {
              setShowLinks(false);
            }
          }}
        >
          <Fragment>{text}</Fragment>
          <svg
            className={`w-3 h-2 group-hover:fill-white transition-transform ${
              hovered && "rotate-180"
            } sm:hidden`}
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
          <RightAngleArrow className="group-hover:stroke-white stroke-current hidden sm:block transition-all sm:group-hover:rotate-90" />
        </Link>
        <LinkForSmallScreens
          currentPath={currentPath}
          link={link}
          hovered={hovered}
          setHovered={setHovered}
          text={text}
          setShowLinks={setShowLinks}
        />
        <Dropdown
          active={hovered}
          setActive={setHovered}
          setShowLinks={setShowLinks}
        />
      </div>
    </div>
  );
};

export default NavLinkService;

const LinkForSmallScreens = ({
  currentPath,
  link,
  hovered,
  setHovered,
  text,
  setShowLinks,
}: {
  currentPath: string;
  link: string;
  hovered: boolean;
  setHovered: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  setShowLinks: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <div
    className={`sm:flex hidden group relative sm:text-sm sm:items-center sm:justify-between  ${
      currentPath.includes(link) ? "text-white" : ""
    } sm:rounded-[32px] flex items-center gap-2 hover:text-white ${
      hovered && "text-white"
    } sm:shadow-none sm:border-none sm:bg-transparent sm:h-[52px] sm:px-10 xs:px-4 sm:py-0`}
  >
    <Link
      href={link}
      onClick={() => {
        setShowLinks(false);
      }}
    >
      {text}
    </Link>
    {/* Temporary disabled */}

    <div
      onClick={() => {
        setHovered((pre) => !pre);
      }}
    >
      <RightAngleArrow
        className={`group-hover:stroke-white stroke-current hidden sm:block transition-all ${
          hovered && "rotate-90"
        }`}
      />
    </div>
  </div>
);

export function RightAngleArrow({ className }: { className: string }) {
  return (
    <svg
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.66846 1L7.66846 7L1.66846 13"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
