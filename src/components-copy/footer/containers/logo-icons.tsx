/**
 * This component contains logo icons.
 */
import React from "react";
import Link from "next/link";
import data from "../data/index.json";
const { logos } = data;
type logo = {
  image_source: string;
  alternative_text: string;
  link:string;
  type: string;
};
const LogoIcons: React.FC = () => (
  <div className="flex gap-[10px] justify-end items-center sm:gap-[4px]">
    {logos.map((logo: logo, index: number) => (
      <div key={index}>
        <Link href={logo.link} target="_blank">
          <img
            className={`w-[37px] sm:w-[25px] xs:h-[30px] xs:w-[30px] sm:h-6 h-9 `}
            width={200}
            height={200}
            src={logo.image_source}
            alt={logo.alternative_text}
          />
        </Link>
      </div>
    ))}
  </div>
);

export default LogoIcons;
