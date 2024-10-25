import H1 from "@components/basic-components/headings/H1";
import H5 from "@components/basic-components/headings/H5";
import OuterComponent from "@components/basic-components/outer-component";
import React from "react";

const WhoWeAre: React.FC = () => {
  return (
    <div id="who-we-are">
      <OuterComponent>
        <div className="flex flex-col gap-3 xxl:pb-[90px] pb-[136px] lg:pb-0">
          <H1
            style="!font-[600] !text-[48px] lg:!text-[42px] sm:!text-[36px] xs:!text-[28px] !leading-[1.3]"
            text="Professionally designed and developed WordPress websites for growth and scale."
          />
          <H5
            style="!text-white !font-[400] !leading-[1.3] unreset"
            text={
              "<p>With numerous WordPress websites launched for organizations of all sizes, we have developed deep expertise in WordPress. We excel in creating complex builds for high-traffic and mission-critical applications, as well as brochure sites for small and medium-sized businesses. Our proven project planning and discovery processes ensure that we deliver projects on time and within budget, regardless of their scale.</p><p>In addition to building complex WordPress sites, we provide ongoing management and troubleshooting services. Whether you're facing an urgent issue or need someone to bring a new idea to life, our team of WordPress experts is here to assist you.</p> "
            }
          />
        </div>
      </OuterComponent>
    </div>
  );
};

export default WhoWeAre;
