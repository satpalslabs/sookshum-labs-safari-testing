"use client";

import type React from "react";

type props = {
  text: string;
  style: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  keyName: string;
};

const TextArea: React.FC<props> = (props) => {
  return (
    <textarea
      className={`py-6 w-fit min-h-[150px] focus:border-[#ffffff3c] text-white text-base px-8 md:px-[20px] border-borderDarkButton [backdrop-filter:blur(100px)] sm:py-4 sm:px-5 rounded-[32px] border-solid border bg-darkButton shadow-buttonInset ${props.style} normal-case text-[16px] md:text-sm sm:text-[11px] font-normal font-poppins overflow-hidden focus:outline-none`}
      placeholder={props.text}
      required
      value={props.value}
      onChange={(e) =>
        props.setValue((prev: any) => ({
          ...prev,
          [props.keyName]: e.target.value,
        }))
      }
    />
  );
};
export default TextArea;
