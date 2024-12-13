type gradientText = {
  text: string;
  classes: string;
};

const GradientText: React.FC<gradientText> = ({ text, classes }) => (
  <h1
    className={`hero-text bg-clip-text text-transparent text-[86px] 2xs:text-[30px] sm:text-[48px] lg:text-[57px] lg:leading-[72px] font-poppins font-[600] leading-[111px] 2xs:leading-[46px] sm:leading-[76px] lg:leading-[92px]w-full tracking-tight relative ${classes}`}
  >
    <span dangerouslySetInnerHTML={{ __html: text }} />
  </h1>
);

export default GradientText;
