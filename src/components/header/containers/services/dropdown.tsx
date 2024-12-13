import { useEffect, useRef, useState } from "react";
import data from "../../data/services.json";
import H6 from "@components/basic-components/headings/H6";
import Image from "next/image";
import DropdownService from "./dropdown-services";
import ServiceContent from "./dropdown-service-content";
import { usePathname } from "next/navigation";

export type service = {
  label: string;
  link: string;
  content: {
    technologies: cardContent[];
  };
} | null;
export type cardContent = {
  logo: string;
  title: string;
  about: string;
  link: string;
};

const Dropdown = ({
  active,
  setActive,
  setShowLinks,
}: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLinks: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [activeService, setActiveService] = useState<service | null>(null);
  const [display, setDisplay] = useState<string>(active ? "" : "none");
  const currentPath: string = usePathname();
  useEffect(() => {
    let activeLinkService = data.services.find((i) =>
      currentPath.includes(i.link)
    );
    activeLinkService = activeLinkService ?? data.services[0];
    setActiveService(activeLinkService);
  }, []);

  useEffect(() => {
    if (active) {
      setDisplay("");
    } else {
      // hide dropdown after animation completed
      const timer = setTimeout(() => setDisplay("none"), 300);
      return () => clearTimeout(timer);
    }
  }, [active]);
  return (
    <div
      style={{
        maxHeight: active ? "1500px" : "0px", // Set max height for transition
        opacity: active ? 1 : 0, // Control opacity transition
        display: display,
        transition: active
          ? "opacity 0.3s ease, max-height 0s ease 0s" // First, fade in opacity, then expand height
          : "max-height 0.3s ease, opacity 0.3s ease 0.3s", // First, reduce height, then fade out opacity
        overflow: "hidden", // Prevent content overflow when collapsed
      }}
      className={`absolute z-50 w-full max-w-[1920px] mt-3 mx-auto bottom-0 translate-y-full sm:translate-y-0 sm:relative left-0 sm:-top-4 sm:pt-0 sm:pl-6 sm:pr-4 xs:pl-4 `}
    >
      <div className=" flex sm:flex-col gap-[105px] lg:gap-5 sm:gap-[48px] z-50 w-full bg-layoutBackground sm:bg-transparent border border-t-0 border-borderDarkButton sm:border-none rounded-b-[32px]  font-poppins text-dropdown_text top-[70px] left-0 px-[81px] py-8 lg:px-10 lg:py-[34px] sm:!px-0 sm:py-0">
        <div className="flex flex-col gap-2 grow ">
          {data.services.map((item: service, index: number) => (
            <DropdownService
              key={index}
              service={item}
              activeService={activeService}
              setActiveService={setActiveService}
              setActive={setActive}
              setShowLinks={setShowLinks}
            />
          ))}
        </div>
        <DetailServiceContentSection
          activeService={activeService}
          setActive={setActive}
          setShowLinks={setShowLinks}
        />
      </div>
    </div>
  );
};

export default Dropdown;

// Detail service content section for desktop view
const DetailServiceContentSection = ({
  activeService,
  setActive,
  setShowLinks,
}: {
  activeService: service;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLinks: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [play, setPlay] = useState(false);
  return (
    <div className="sm:hidden flex sm:flex-col gap-[105px] lg:gap-4 sm:gap-[14px] w-[63.79%] sm:w-[46.7%] ">
      <ServiceContent
        activeService={activeService}
        setActive={setActive}
        setShowLinks={setShowLinks}
      />
      <div
        className="flex flex-col h-fit w-fit sm:w-full bg-innerContainer border border-solid border-borderDarkButton shadow-buttonInset rounded-[32px] cursor-pointer p-4 gap-2"
        onClick={() => {
          window.open("/contact-us", "_self");
        }}
      >
        <div
          className="h-[180px] w-[316px] lg:w-[232px] lg:h-[190px] relative rounded-[20px] overflow-hidden sm:w-full"
          onMouseEnter={() => {
            setPlay(true);
            ref.current?.play();
          }}
          onMouseLeave={() => {
            setPlay(false);
          }}
        >
          <video
            autoPlay={play}
            muted
            loop={play}
            ref={ref}
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          >
            <source src={"/header/let-connect.webm"} type="video/webm" />
          </video>
        </div>
        <H6
          text={"Let’s Create a Project?"}
          classes="font-normal text-[18px] w-full text-white"
        />
      </div>
    </div>
  );
};
