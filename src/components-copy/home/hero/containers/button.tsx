/**
 * This component contains the Buttons used in index file.
 */

import type React from "react";

const Buttons: React.FC = () => (
  <button
    className={`mt-[23px] py-[12px] w-fit px-8 md:px-[20px]  border-borderDarkButton [backdrop-filter:blur(100px)] sm:py-2 sm:px-3 flex gap-2 items-center rounded-full border-solid border bg-darkButton shadow-buttonInset text-center flex-nowrap`}
  >
    <span className="w-[6px] h-[6px] rounded-full bg-greenDot"></span>
    <span className="text-[16px] md:text-sm sm:text-[11px] font-medium font-poppins text-light flex-nowrap">Open For Projects</span>
  </button>
);

export default Buttons;
