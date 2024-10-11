"use client";
/**
 * This component contains the header section.
 */

import { useState } from "react";
import dynamic from "next/dynamic";

// header's sub-sections
const Nav = dynamic(() => import("./containers/nav"));
const Logo = dynamic(() => import("./containers/logo"));
const MenuButton = dynamic(() => import("./containers/menu-button"));
import PrimaryButton from "@components/basic-components/primary-button";

const Header: React.FC = () => {
  const [showLinks, setShowLinks] = useState<boolean>(false);
  return (
    <header
      className={`relative h-fit flex justify-between items-center w-full max-w-[1920px] bg-transparent z-50 font-poppins text-gray-400 mx-auto px-[80px] py-8 lg:px-10 lg:py-[34px] md:px-[40px] xs:!px-5 xs:py-[20px] ${
        showLinks && "sm:fixed sm:bg-black"
      } `}
    >
      <Logo />
      <Nav showLinks={showLinks} setShowLinks={setShowLinks} />
      <section className="flex items-center gap-4">
        <PrimaryButton
          icon={true}
          text="Get in touch"
          style="xs:hidden relative z-20"
          link="/contact-us"
        />
        <MenuButton showLinks={showLinks} setShowLinks={setShowLinks} />
      </section>
    </header>
  );
};

export default Header;
