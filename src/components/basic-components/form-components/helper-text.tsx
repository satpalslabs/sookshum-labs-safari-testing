"use client";



type props = {
  text: string;
  style: string;
};

const HelperText: React.FC<props> = ({ text, style }) => {
  return (
    <span className={`text-secondary font-poppins font-normal sm:text-sm xs:text-xs ${style} `}>
      {text}
    </span>
  );
};
export default HelperText;
