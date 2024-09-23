/**
 * This component contains Footer group links.
 */


import LogoSection from "./logo-section";
import data from "../data/index.json";
const { columns } = data;
import FooterLinks from "./links";
export type DataKey = typeof columns;
export type ColumnKeyType = keyof DataKey;

const TopSection:React.FC=()=>(
    <div className="flex w-full justify-between xl:pt-[60px] flex-wrap xs:flex-col xs:gap-5 xs:text-center">
      <LogoSection />
      {Object.keys(columns).map((column: string, index: number) => (
        <div
          key={index}
          className="flex flex-col gap-4 w-fit lg:gap-[10px] max-w-[229px] xs:mx-auto"
        >
          <div
            key={index}
            className="text-sm font-poppins font-semibold sm:text-xs xs:w-full"
          >
            {column}
          </div>
          <FooterLinks column={column as ColumnKeyType} />
        </div>
      ))}
    </div>
  );
export default TopSection;
