import Image from "next/image";
import H6 from "@components/basic-components/headings/H6";
import { cardContent, service } from "./dropdown";
import Link from "next/link";

const ServiceContent = ({
  activeService,
  setActive,
  setShowLinks,
}: {
  activeService: service | null;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLinks: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <div className="flex flex-col grow sm:grow-0 items-start gap-[14px] sm:w-full sm:pl-2">
    {activeService?.content.technologies.map(
      (cardContent: cardContent, index: number) => (
        <Link
          href={cardContent.link}
          className="flex items-center transition-all duration-500 sm:items-start bg-innerContainer sm:bg-transparent border sm:border-none border-solid border-transparent shadow-buttonInset  hover:bg-borderDarkButton hover:border-borderDarkButton sm:shadow-none w-full rounded-[32px] gap-4 p-4 sm:p-0"
          key={index}
          onClick={() => {
            setActive(false);
            setShowLinks(false);
          }}
        >
          <div className="sm:hidden h-[60px] w-[60px] relative rounded-2xl overflow-hidden">
            <Image
              fill
              sizes=""
              alt="image"
              src={cardContent.logo}
              blurDataURL="URL"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <H6
              text={cardContent.title}
              classes="font-normal text-[18px] !text-white"
            />
          </div>
        </Link>
      )
    )}
  </div>
);

export default ServiceContent;
