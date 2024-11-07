
type description = {
  text: string | null | undefined;
  children: null | React.ReactNode;
  classes: string;
};

const Description: React.FC<description> = ({ text, children, classes }) => (
  <div
    className={`font-poppins grow text-base leading-6 md:leading-5 md:text-sm sm:text-[13px] font-normal text-secondary ${classes}`}
  >
    {children ? children : text}
  </div>
);

export default Description;
