/**
 * This component contains a nav-links.
 */

import React from "react";
import NavLink from "./nav-link";
import NavLinkService from "./services";
import PrimaryButton from "@components/basic-components/primary-button";

const Nav = ({ showLinks, setShowLinks }: any) => {
  return (
    <div
      className={` sm:fixed overflow-auto sm:w-full z-10 transition-all sm:h-[calc(100vh-112px)] xs:h-[calc(100vh-88px)] text-secondaryText sm:top-[112px] xs:top-[88px] bottom-0  sm:left-0  sm:z-[9999] ${
        showLinks ? "" : "overflow-hidden sm:translate-x-[-100%] "
      }`}
    >
      <div
        className={`flex sm:h-full sm:relative sm:z-[85] sm:overflow-auto sm:flex-col sm:px-[31px] sm:pt-6 sm:rounded-b-[26px] sm:bg-layoutBackground gap-8 sm:gap-0 font-poppins font-600 text-base`}
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
        <NavLink
          setShowLinks={setShowLinks}
          showLinks={showLinks}
          text="About us"
          link="/about"
        />
        <PrimaryButton
          icon={true}
          text="Get In Touch"
          style="w-full hidden xs:flex text-center !h-[48px] mt-[22px] !text-sm rounded-[26px] sm:shrink-0 relative z-20"
          link="/contact-us"
        />
      </div>
    </div>
  );
};

export default Nav;
