/**
 * This component contains group links.
 */


import data from "../data/index.json";
const { columns } = data;
import Link from "next/link";
import { ColumnKeyType } from "./top-section";

interface Link {
  url: string;
  label: string;
}

type SubContainer = {
  [key: string]: {
    links: Link[];
  };
} | null;

interface Column {
  label: string;
  links: Link[];
  sub_containers: SubContainer | null;
}

interface Columns {
  [key: string]: Column;
}

const column_data: Columns = columns;

const FooterLinks: React.FC<{ column: ColumnKeyType }> = ({ column }) => (
  <div>
    <div className="flex flex-col gap-4 lg:gap-2 text-sm sm:text-xs font-poppins font-normal xs:mx-auto">
      {column_data[column].links.map(
        (link: { label: string; url: string }, index: number) => (
          <Link
            href={link.url}
            key={index}
            target={link.url.includes("http") ? "_blank" : "_self"}
            className="hover:underline"
          >
            {link.label}
          </Link>
        )
      )}
    </div>
    {column_data[column].sub_containers && (
      <div>
        <div className="flex flex-col gap-4 lg:gap-2 text-sm sm:text-xs font-poppins font-normal xs:mx-auto">
          {column_data[column].label}
        </div>
        {Object.keys(column_data[column].sub_containers).length &&
          Object.keys(column_data[column].sub_containers).map(
            (sub_container: string, index: number) => (
              <div
                key={index}
                className="flex flex-col gap-4 lg:gap-2 w-fit col-span-4 pt-5 max-w-[229px] xs:mx-auto"
              >
                <div className="text-sm font-poppins font-semibold sm:text-xs">
                  {sub_container}
                </div>
                <div className="flex flex-col gap-4 lg:gap-2 text-sm sm:text-xs font-poppins font-normal xs:mx-auto">
                  {column_data[column].sub_containers &&
                    column_data[column].sub_containers[sub_container].links.map(
                      (link: { label: string; url: string }, index: number) => (
                        <Link
                          href={link.url}
                          target="_blank"
                          key={index}
                          className="hover:underline"
                        >
                          {link.label}
                        </Link>
                      )
                    )}
                </div>
              </div>
            )
          )}
      </div>
    )}
  </div>
);

export default FooterLinks;
