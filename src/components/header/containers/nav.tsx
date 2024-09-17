/**
 * This component contains a nav-links.
 */

import PrimaryButton from "@components/basic-components/primary-buttom";
import type React from "react";
import dynamic from "next/dynamic";
import NavLinkService from "./services";
const NavLink = dynamic(() => import("./nav-link"));

const Nav = ({
  showLinks,
  setShowLinks,
}: {
  showLinks: boolean;
  setShowLinks: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={
        showLinks
          ? "sm:fixed overflow-auto z-10 sm:h-[calc(100vh-116px)] text-lightText sm:top-[112px] xs:top-[88px] bottom-0 sm:w-full  sm:left-0  sm:z-[9999]"
          : "sm:h-0 overflow-hidden"
      }
    >
      <div
        className={`flex sm:h-fit sm:overflow-auto sm:flex-col sm:px-[31px] sm:py-6 sm:rounded-b-[26px] sm:bg-layoutBackground gap-8 sm:gap-0 font-[Poppins] font-600 text-base`}
      >
        <NavLink
          setShowLinks={setShowLinks}
          showLinks={showLinks}
          text="Home"
          link="/"
        />
        <NavLinkService
          setShowLinks={setShowLinks}
          showLinks={showLinks}
          text="Services"
          link="/services"
        />
        {/* Temporary disabled */}
        {/* <NavLink
          setShowLinks={setShowLinks}
          showLinks={showLinks}
          text="Work"
          link="/work"
        /> */}
        <NavLink
          setShowLinks={setShowLinks}
          showLinks={showLinks}
          text="About us"
          link="/about"
        />
        {/* Temporary disabled */}
        {/* <NavLink
          setShowLinks={setShowLinks}
          showLinks={showLinks}
          text="Blog"
          link="/blog"
        /> */}
        <PrimaryButton
          icon={true}
          text="Get in touch"
          style="w-full hidden xs:flex text-center !h-[48px] mt-[22px] !text-sm rounded-[26px] sm:shrink-0 relative z-20"
          link="/contact"
        />
      </div>
    </div>
  );
};

export default Nav;
