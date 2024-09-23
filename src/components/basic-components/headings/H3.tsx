

type textType = {
  text: string;
  style: string;
};
const H3: React.FC<textType> = ({ text, style }) => (
  <div
    className={`font-poppins leading-6 text-[36px] md:leading-5 md:text-2xl sm:text-xl text-white font-medium ${style}`}
  >
    {text}
  </div>
);

export default H3;
