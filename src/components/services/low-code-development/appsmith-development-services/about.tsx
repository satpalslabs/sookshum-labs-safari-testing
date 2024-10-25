import Description from "@components/basic-components/description";
import H1 from "@components/basic-components/headings/H1";
import H5 from "@components/basic-components/headings/H5";
import OuterComponent from "@components/basic-components/outer-component";
import React from "react";

const About: React.FC = () => {
  const integrades = [
    "/services/low-code-development/appsmith-development-services/about/Airtable.png",
    "/services/low-code-development/appsmith-development-services/about/sql.png",
    "/services/low-code-development/appsmith-development-services/about/g-sheet.png",
    "/services/low-code-development/appsmith-development-services/about/mongo.png",
  ];
  return (
    <div id="about">
      <OuterComponent>
        <div className="flex flex-row xs:flex-col gap-5 h-[642px] lg:h-[504px]">
          <div className="w-[55.5%] lg:w-[51%] sm:w-[68%] xs:w-full shrink-0 flex flex-col gap-5 ">
            <H1
              style="!font-[600] xxl:!text-[54px] w-[80%] lg:w-full !text-[48px] !tracking-normal lg:!text-[42px] sm:!text-[36px] xs:!text-[28px] !leading-[1.3]"
              text="Appsmith Platform Overview"
            />
            <div className="flex flex-col gap-[90px] lg:gap-[66px]">
              <Description classes="" text="">
                <div className="unreset text-[24px] lg:text-base font-normal leading-[1.3] xxl:w-[80%] text-white sm:tracking-tight">
                  <p className="!m-0">
                    The intuitive drag-and-drop interface allows users to easily
                    assemble components. You can build your app by using UI
                    components and widgets, positioning them on the flexible
                    grid-style canvas.
                  </p>
                  <p className="">
                    Additionally, you can write custom JavaScript for data
                    transformation and implement bespoke business logic.
                  </p>
                </div>
              </Description>
              <div className="flex flex-col gap-5">
                <Description classes="" text="">
                  <div className="text-[24px] lg:text-base leading-[1.3] font-semibold text-white">
                    Integrates with
                  </div>
                </Description>
                <div className="flex gap-3 items-center">
                  {integrades.map((item: string, ind: number) => (
                    <div
                      className="w-[80px] h-[80px] lg:h-[59px] lg:w-[59px] sm:w-[56px] sm:h-[56px] flex items-center justify-center shrink-0 rounded-full bg-[#282828] circle p-[3px] border-[3px] SliderCircle "
                      key={ind}
                      style={{
                        boxShadow: " 0px 0px 9.14px 0px #F8F8F840 inset",
                        backdropFilter: "blur(163.14285278320312px",
                        WebkitBackdropFilter: "blur(17.3487px)",
                      }}
                    >
                      <img
                        className="h-[44px] lg:h-[29px] shadow-darkButton"
                        src={item}
                      />
                    </div>
                  ))}
                  <Description
                    children={null}
                    classes="!text-white !text-[20px] sm:!text-base"
                    text={"and more..."}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-gradient-to-r from-black to-transparent">
            <img
              src="/services/low-code-development/appsmith-development-services/about/about-bg.png"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </OuterComponent>
    </div>
  );
};

export default About;
