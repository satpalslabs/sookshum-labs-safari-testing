
type props = { text: string; style: string };
const H5: React.FC<props> = ({ text, style }) => (
  <h5
    className={`font-poppins leading-[1.4] text-2xl md:text-base sm:text-sm text-h3_heading font-medium ${style}`}
  >
    <span dangerouslySetInnerHTML={{__html:text}} />
   </h5>
);

export default H5;
