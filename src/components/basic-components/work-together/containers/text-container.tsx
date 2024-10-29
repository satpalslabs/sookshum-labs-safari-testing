/**
 * This component contains the text container of work-together section.
 */

import Description from "@components/basic-components/description";
import H1 from "@components/basic-components/headings/H1";
import PrimaryButton from "@components/basic-components/primary-button";

const TextContainer: React.FC = () => (
  <div className="flex  xxl:max-w-[40%] xl:w-[50%] flex-col gap-[60px] md:gap-5 pl-[69px] grow md:pl-[51px] sm:px-[28px] sm:gap-4 h-fit py-[72px] xs:py-[28px] xs:px-6 3xs:px-5 w-[108%] xs:w-full">
    <div className="flex flex-col gap-[30px] md:gap-3 w-full">
      <div
        className={`font-poppins text-[72px] leading-[1.4] lg:text-[52px] sm:text-4xl xs:text-[28px] text-white font-semibold tracking-tight`}
      >
        Let's Work Together.
      </div>
      <Description
        children={null}
        text="Contact us today to collaborate and bring your vision to life with expert guidance and innovative solutions."
        classes={
          "text-lg w-[400px] !font-normal leading-[32px] lg:text-base lg:w-[300px]  xs:w-full"
        }
      />
    </div>
    <PrimaryButton
      icon={true}
      text="Request a quote"
      style="md:mt-[30px]"
      link="/contact-us"
    />
  </div>
);

export default TextContainer;
