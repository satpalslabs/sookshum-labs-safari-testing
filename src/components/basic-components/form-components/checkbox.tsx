"use client";
/**
 * This component contains the Button.
 */



type props = {
  children: React.ReactNode;
  style: string;
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  setError:React.Dispatch<React.SetStateAction<any>>;
  keyName: string;
};

const CustomCheckBox: React.FC<props> = (props) => {
  return (
    <div className="inline-flex items-start">
      <label
        className={`flex items-center w-fit cursor-pointer relative ${props.style}`}
        htmlFor="checkbox"
      >
        <input
          type="checkbox"
          checked={props.value}
          className={`peer h-6 w-6 sm:w-5 sm:h-5 cursor-pointer transition-all appearance-none rounded hover:shadow-md border border-borderDarkButton [backdrop-filter:blur(100px)] border-solid !bg-darkButton shadow-buttonInset group-hover:!bg-buttonGradient ${
            props.value && "!bg-primary !border-primary"
          }`}
          id="checkbox"
          onChange={() => {
            props.setValue((prev: any) => ({
              ...prev,
              [props.keyName]: !props.value,
            }));
            props.setError((prev:any)=>({
              ...prev,
              [props.keyName]: ""
            }))
          }}
        />
        <span
          className={`absolute text-white opacity-0 ${
            props.value && "opacity-100"
          } top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      <label
        className="cursor-pointer ml-2 text-slate-600 text-sm xs:text-xs tracking-tight w-full xs:ml-1"
        htmlFor="checkbox"
      >
        {props.children}
      </label>
    </div>
  );
};
export default CustomCheckBox;
