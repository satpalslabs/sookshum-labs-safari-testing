/**
 * This component contains a logo.
 */

import Link from "next/link";
const Logo: React.FC = () => (
  <Link href="/" className="relative z-20">
    <img
      className="w-[154px] h-full xs:w-[128px]"
      src="/header/Top-Nav-logo.svg"
      height={100}
      width={100}
      alt="Logo"
    />
  </Link>
);
export default Logo;
