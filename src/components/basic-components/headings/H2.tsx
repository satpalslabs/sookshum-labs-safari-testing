type props = {
  children: React.ReactNode;
};
const H2: React.FC<props> = ({ children }) => (
  <h2 className="!font-poppins text-5xl leading-[1.4] lg:text-[42px] sm:text-4xl xs:text-[28px] text-white font-medium text-nowrap 3xs:text-wrap">
    {children}
  </h2>
);

export default H2;
