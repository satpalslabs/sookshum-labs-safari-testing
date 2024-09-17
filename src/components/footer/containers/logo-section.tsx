/**
 * This component contains a logo section
 */

import Link from "next/link";
import type React from "react";
import Description from "@components/basic-components/description";
import PrimaryButton from "@components/basic-components/primary-buttom";
import DarkButton from "@components/basic-components/button";
const LogoSection: React.FC = () => (
  <div className="flex grow gap-5 flex-col max-w-[354px] col-span-5 h-fit lg:max-w-[300px]  xs:mx-auto">
    <Link href="/">
      {/* Website Logo */}
      <img
        className="w-[186px] h-full xs:w-[128px] xs:mx-auto"
        src="/header/Top-Nav-logo.svg"
        height={200}
        width={200}
        alt="Logo"
      />
    </Link>
    <Description
      children={null}
      text="We deliver excellence through our innovative solutions and exceptionally reliable service."
      classes="font-light"
    />
    <section className="flex items-center gap-4 lg:gap-[10px] grow xs:mx-auto">
      {/* Buttons */}
      <PrimaryButton
        icon={true}
        text="Request a quote"
        style=""
        link="/contact"
      />
      {/* Temporary disable */}
      {/* <DarkButton
        style="!h-[55px] lg:!h-[48px] lg:!px-5 lg:!text-[13px] !w-fit !border-borderDarkButton"
        text="Refer Us"
      /> */}
    </section>
  </div>
);
export default LogoSection;
