/**
 * This file contains the Header section of Blog posts section.
 */

import DarkButton from "@components/basic-components/button";
import Description from "@components/basic-components/description";
import H2 from "@components/basic-components/headings/H2";

function Header() {
  return (
    <div className="flex flex-col gap-6 lg:gap-3 xs:gap-2 items-center w-[651px] lg:w-[500px] xs:w-full xs:px-4">
      <DarkButton style="!border-borderDarkButton" text="Blogs" />
      <H2>
        <div className="sm:text-wrap text-center leading-[34px]">
        See our recent{" "}
          <span className="italic font-light">Blog Posts.</span>
        </div>
      </H2>
      <div className="text-center">
         <Description children={null}
          text={
            "Explore our blog to discover the latest industry trends and and gain valuable insights from our team of experts."
          }
          classes={"text-lg !font-[300]" }
        />
      </div>
    </div>
  );
}

export default Header;
