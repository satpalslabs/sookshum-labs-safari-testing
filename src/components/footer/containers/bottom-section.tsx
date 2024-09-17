/**
 * This component contains a bottom section of footer with logo icons.
 */

import Link from "next/link";
import LogoIcons from "./logo-icons";

const BottomSection: React.FC = () => (
  <div className="flex justify-between w-full pb-5 items-center xs:flex-col-reverse xs:gap-5">
    <div className="grow text-left text-sm font-poppins text-customWhite font-normal leading-[22px] sm:text-[10px] xs:text-center">
      © 2024 Sookshum Labs Technologies Private Limited. All Rights Reserved
      <span className="ml-4 xs:w-full xs:text-center">
        <Link href="/privacy-policy" className="underline text-[16px] sm:text-sm xs:text-sm">
          Privacy-policy
        </Link>
      </span>
    </div>
    <LogoIcons />
  </div>
);

export default BottomSection;
