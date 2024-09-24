/**
 * This component contains logo icons.
 */

import Link from "next/link";
import data from "../data/index.json";
import Image from "next/image";
const { logos } = data;
type logo = {
  image_source: string;
  alternative_text: string;
  link: string;
  type: string;
};
const LogoIcons: React.FC = () => (
  <div className="flex gap-[10px] justify-end items-center sm:gap-[4px]">
    {logos.map((logo: logo, index: number) => (
      <div key={index}>
        <Link href={logo.link} target="_blank">
          <Image
            className={`w-[37px] sm:w-[25px] xs:h-[30px] xs:w-[30px] sm:h-6 h-9 `}
            width={76}
            height={76}
            src={logo.image_source}
            alt={logo.alternative_text}
            blurDataURL="URL"
            placeholder="blur"
            loading="lazy" // Lazy load the image
            priority={false}
          />
        </Link>
      </div>
    ))}
  </div>
);

export default LogoIcons;
