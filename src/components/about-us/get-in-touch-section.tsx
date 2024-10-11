"use client";
import DarkButton from "@components/basic-components/button";
const Card = dynamic(() => import("@components/basic-components/card"));
import H2 from "@components/basic-components/headings/H2";
import OuterComponent from "@components/basic-components/outer-component";
import PrimaryButton from "@components/basic-components/primary-button";
import dynamic from "next/dynamic";
export type dataItem = {
  id: string;
  description: string;
};

const BottomSection: React.FC = () => (
  <OuterComponent>
    <div className="h-fit w-full">
      <div className="grid grid-cols-2 xs:grid-cols-1 gap-5 w-full">
        <Card isInView={true} style={"pb-0 grow"}>
          <div className="p-8 lg:p-4 flex flex-col gap-[97px] sm:gap-[40px] grow">
            <div className="grow">
              <H2>
                <div className="text-wrap text-[52px] lg:text-[32px] sm:text-[22px] sm:leading-[1.4] w-[80%] lg:w-full tracking-tight font-poppins !font-[600]">
                  Want to join our team? Send us your CV.
                </div>
              </H2>
            </div>
            <div className="flex justify-between">
              <PrimaryButton
                icon={true}
                style="!bg-customBlue"
                text="Send us CV"
                link={
                  "https://careers.sookshum-labs.com/forms/0c46d2e5681ac05b1b7932659bdd9f9a2015de74fe8bb6319b00c5b1fdcb1bba"
                }
              />
              <a href="https://careers.sookshum-labs.com/jobs" target="_blank">
                <DarkButton
                  style="group-hover:!bg-none h-full sm:!px-5"
                  text="Careers"
                />
              </a>
            </div>
          </div>
        </Card>
        <Card isInView={true} style={"pb-0 "}>
          <div className="p-8 lg:p-4 flex flex-col gap-[97px] sm:gap-[40px] grow">
            <H2>
              <div className="text-wrap text-[52px] lg:text-[32px] sm:text-[22px] sm:leading-[1.4] w-[80%] lg:w-full tracking-tight font-poppins !font-[600]">
                Want to create amazing products together?
              </div>
            </H2>
            <PrimaryButton
              icon={true}
              style=""
              text="Get in touch"
              link="/contact-us"
            />
          </div>
        </Card>
      </div>
    </div>
  </OuterComponent>
);

export default BottomSection;
