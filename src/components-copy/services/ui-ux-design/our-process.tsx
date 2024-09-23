import SectionHeader from "@components/basic-components/section-header";
import Image from "next/image";
import React from "react";

const OurProcess = () => {
  return (
    <header className="px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[60px] flex flex-col gap-[80px] md:gap-[60px] sm:gap-12  items-center bg-black overflow-hidden max-w-[1920px] mx-auto">
      <SectionHeader
        buttonText="Our Process"
        description="We integrate a business-driven and user-centered UX approach in our product design, ensuring that both business goals and user needs are met effectively."
        style="w-[794px] md:w-[650px] "
      >
        <div className="w-full md:w-[700px] lg:leading-[63px] sm:leading-[54px] xs:leading-[32px] xs:w-full text-wrap text-center">
          Our <span className="italic font-light">UI/UX design </span> aligns
          perfectly with your business goals.
        </div>
      </SectionHeader>
      <section>
        <ImageContainer />
      </section>
    </header>
  );
};

export default OurProcess;

const ImageContainer: React.FC = () => (
  <div>
    <Image
      width={1800}
      height={490}
      className="w-full xxl:min-w-full xxl:h-fit h-[490px] lg:h-[356px] sm:hidden"
      src="/services/ui-ux-design/our-process/desktop.png"
      alt=""
    />
    <Image
      width={1000}
      height={1000}
      className="hidden sm:block w-full h-[658px] xs:hidden"
      src="/services/ui-ux-design/our-process/tab.png"
      alt=""
    />
    <Image
      width={1000}
      height={1500}
      className="hidden xs:block w-full h-[1111px]"
      src="/services/ui-ux-design/our-process/mobile.png"
      alt=""
    />
  </div>
);
