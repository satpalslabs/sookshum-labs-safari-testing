

type textType = {
  text: string | undefined;
  classes: string;
};
const H6: React.FC<textType> = ({ text, classes }) => (
  <div
    className={`font-poppins text-[19px] md:leading-5 md:text-base sm:text-sm text-light font-medium ${classes}`}
  >
    {text}
  </div>
);

export default H6;
