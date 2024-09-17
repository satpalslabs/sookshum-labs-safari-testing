"use client";

import type React from "react";

type props = {
  text: string;
  style: string;
  value: string;
  type: string;
  prefix: string;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  setError: React.Dispatch<React.SetStateAction<any>>;
  keyName: string;
};

const CustomInput: React.FC<props> = (props) => {
  return (
    <input
      className={`py-6 w-fit  text-white text-base px-8 md:px-[20px] border-borderDarkButton [backdrop-filter:blur(100px)] sm:py-4 sm:px-5 rounded-[32px] border-solid border bg-darkButton shadow-buttonInset ${props.style} normal-case text-[16px] md:text-sm sm:text-[11px] font-normal font-poppins overflow-hidden focus:outline-none focus:border-[#ffffff2d]`}
      placeholder={props.text}
      required
      prefix={props.prefix}
      value={props.prefix + props.value.replaceAll(props.prefix, "")}
      onChange={(e) => {
        // Remove prefix from input value first
        let valueWithoutPrefix = e.target.value.replaceAll(props.prefix, "");
        // Apply validation based on props.type
        if (
          props.type == "email" ||
          (props.type == "string" && !/[1-9]+/g.test(valueWithoutPrefix)) ||
          (props.type != "string" &&
            !/[a-z]+/g.test(valueWithoutPrefix) &&
            valueWithoutPrefix.includes(props.prefix.trim()) == false)
        ) {
          props.setValue((prev: any) => ({
            ...prev,
            [props.keyName]: valueWithoutPrefix.replaceAll(props.prefix, ""),
          }));
        }

        // Clear the error
        props.setError((prev: any) => ({
          ...prev,
          [props.keyName]: "",
        }));
      }}
    />
  );
};
export default CustomInput;
