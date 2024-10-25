
type props = { text: string; style: string };
const H1: React.FC<props> = ({ text, style }) => {
  return (
    <h1
      className={`font-poppins text-[72px] leading-[1.4] lg:text-[52px] sm:text-4xl xs:text-[28px] text-white font-semibold tracking-tight ${style}`}
    >
      {text}
    </h1>
  );
};

export default H1;
