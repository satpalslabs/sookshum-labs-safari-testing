/**
 * This component contains a logo.
 */

import Image from "next/image";
import Link from "next/link";
const Logo: React.FC = () => (
  <Link href="/" className="relative z-20">
    <Image
      height={60}
      width={200}
      className="w-[154px] h-full xs:w-[128px]"
      src="/header/Top-Nav-logo.svg"
      alt="Logo"
      blurDataURL="URL"
      placeholder="blur"
    />
  </Link>
);
export default Logo;
