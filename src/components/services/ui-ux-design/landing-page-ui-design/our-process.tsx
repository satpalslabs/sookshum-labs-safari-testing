import OuterFlexComponent from "@components/basic-components/main-flex-container";
import OuterComponent from "@components/basic-components/outer-component";
import SectionHeader from "@components/basic-components/section-header";
import Image from "next/image";

const OurProcess = () => {
  return (
    <OuterComponent>
      <OuterFlexComponent>
        <SectionHeader
          id="our-process"
          buttonText="Our Process"
          description="We integrate a business-driven and user-centered UX approach in our product design, ensuring that both business goals and user needs are met effectively."
          style="w-[80%] md:w-[750px] sm:w-[650px] "
        >
          <div className="w-full lg:leading-[63px] sm:leading-[54px] xs:leading-[32px] xs:w-full text-wrap text-center leading-[1.4] capitalize">
            Landing page design process that covers your unique business goals
          </div>
        </SectionHeader>
        <ImageContainer />
      </OuterFlexComponent>
    </OuterComponent>
  );
};

export default OurProcess;

const ImageContainer: React.FC = () => (
  <div>
    <Image
      blurDataURL="URL"
      placeholder="blur"
      width={1800}
      height={490}
      className="w-full xxl:min-w-full xxl:h-fit h-[490px] lg:hidden"
      src="/services/ui-ux-design/landing-page-ui-design/desktop.png"
      alt=""
    />
    <Image
      blurDataURL="URL"
      placeholder="blur"
      width={1800}
      height={490}
      className="h-[356px] hidden lg:block sm:hidden"
      src="/services/ui-ux-design/landing-page-ui-design/lg.png"
      alt=""
    />
    <Image
      blurDataURL="URL"
      placeholder="blur"
      width={1000}
      height={1000}
      className="hidden sm:block w-full h-[658px] xs:hidden"
      src="/services/ui-ux-design/landing-page-ui-design/tab.png"
      alt=""
    />
    <Image
      blurDataURL="URL"
      placeholder="blur"
      width={1000}
      height={1500}
      className="hidden xs:block w-full h-[1111px] 3xs:h-[850px] object-contain"
      src="/services/ui-ux-design/landing-page-ui-design/mobile.png"
      alt=""
    />
  </div>
);
