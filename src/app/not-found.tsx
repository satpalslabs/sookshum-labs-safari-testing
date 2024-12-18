import Description from "@components/basic-components/description";
import GradientText from "@components/basic-components/gradient-text";
import OuterComponent from "@components/basic-components/outer-component";
import PrimaryButton from "@components/basic-components/primary-button";
import Image from "next/image";

export default function NotFound() {
  return (
    <OuterComponent>
      <div className="flex flex-col gap-[54px] sm:gap-6 xs:gap-8 items-center w-full text-center -mt-[35px] lg:mt-[-52px]  sm:-mt-3 xs:-mt-1">
        <Image
          alt="image"
          width="2200"
          height="2200"
          src="/not-found.png"
          className="w-[600px] lg:w-[513px] sm:w-[357px] xs:w-[265px] h-auto"
          blurDataURL="URL"
          placeholder="blur"
        />
        <div className="flex flex-col gap-3">
          <GradientText classes="" text="404 Page Not Found!" />
          <Description
            text=""
            classes="!text-xl lg:!text-lg sm:!text-base xs:!text-xs !text-white"
          >
            We’re sorry, the page you requested could not be found.
            <br />
            Please go back to the homepage!
          </Description>
        </div>
        <PrimaryButton icon={true} link="/" style="" text="Back To Home" />
      </div>
    </OuterComponent>
  );
}
