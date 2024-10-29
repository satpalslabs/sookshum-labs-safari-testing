import Description from "@components/basic-components/description";
import H5 from "@components/basic-components/headings/H5";

import { serviceType } from ".";
import Card from "../../../basic-components/card";
import Image from "next/image";

function Service({
  service,
  isInView,
}: {
  service: serviceType;
  isInView: boolean;
}) {
  return (
    <Card style="mt-[73px]" isInView={isInView}>
      <div className="  md:flex-1 pb-8 xxl:pb-16 xs:pb-5 flex items-center justify-center">
        <Image
          height={400}
          width={400}
          className="h-[165px] lg:h-[132px] xxl:-mt-[15%] sm:h-[108px] xs:-mt-[16%] lg:-mt-[20%] w-auto object-cover -mt-[15%]"
          alt=""
          src={service.path}
        />
      </div>
      <div className=" flex flex-col px-4 md:px-2 sm:px-[6px] grow h-fit gap-[0.5rem] sm:h-auto sm:gap-[0.5rem]">
        <H5 text={service.count} style="!leading-[1.4]" />
        <Description
          children={null}
          text={service.about}
          classes="!font-normal"
        />
      </div>
    </Card>
  );
}

export default Service;
