"use client";

import { formatPhoneNumberIntl } from "react-phone-number-input";

type props = {
  text: string;
  style: string;
  value: string;
  type: string;
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
      value={props.value}
      onChange={(e) => {
        // Remove prefix from input value first
        let value = e.target.value;
        // Apply validation based on props.type
        if (
          props.type == "email" ||
          (props.type == "string" && !/[1-9]+/g.test(value)) ||
          (props.type != "string" && !/[a-z]+/g.test(value))
        ) {
          if (
            props.type == "number" &&
            props.keyName == "phone-no" &&
            value.length > 5
          ) {
            value = formatPhoneNumberIntl(value);
          }
          props.setValue((prev: any) => ({
            ...prev,
            [props.keyName]: value,
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
