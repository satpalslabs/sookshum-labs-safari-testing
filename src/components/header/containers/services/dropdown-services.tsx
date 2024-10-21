import Link from "next/link";

import { service } from "./dropdown";
import ServiceContent from "./dropdown-service-content";
import { RightAngleArrow } from ".";

const DropdownService = ({
  service,
  activeService,
  setActiveService,
  setActive,
  setShowLinks,
}: {
  service: service;
  activeService: service | null;
  setActiveService: React.Dispatch<React.SetStateAction<service | null>>;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLinks: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <div className="sm:flex sm:flex-col sm:gap-4 ">
    <Link
      className={`sm:hidden p-4 group relative pl-8 pr-[26px] text-sm flex items-center h-[72px] justify-between hover:shadow-buttonInset hover:bg-innerContainer border border-transparent border-solid hover:border-borderDarkButton rounded-[32px] gap-2 hover:text-white ${
        service?.label == activeService?.label
          ? "bg-innerContainer border-borderDarkButton text-white"
          : ""
      }`}
      href={service?.link ?? ""}
      onMouseOver={() => {
        setActiveService(service);
      }}
      onClick={() => {
        setActive(false);
      }}
    >
      <>{service?.label}</>
      <RightAngleArrow className="group-hover:stroke-white stroke-current block" />
    </Link>
    <SmallScreenDropdown
      service={service}
      activeService={activeService}
      setActive={setActive}
      setActiveService={setActiveService}
      setShowLinks={setShowLinks}
    />
  </div>
);

export default DropdownService;

// Dropdown services for small screen
const SmallScreenDropdown = ({
  service,
  activeService,
  setActive,
  setActiveService,
  setShowLinks,
}: {
  service: service;
  activeService: service | null;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLinks: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveService: React.Dispatch<React.SetStateAction<service | null>>;
}) => (
  <div
    className={` sm:flex sm:flex-col hidden p-4 group pl-8 pr-[26px] text-sm rounded-[32px] gap-6 hover:text-white ${
      service?.label == activeService?.label ? " text-white" : ""
    } xs:pl-2 pr-0`}
    onMouseOver={() => {
      setActiveService(service);
    }}
  >
    <div className="w-full flex justify-between">
      <Link
        href={service?.link ?? ""}
        onClick={() => {
          setActive(false);
          setShowLinks(false);
        }}
      >
        {service?.label}
      </Link>
      <div
        onClick={() => {
          if (activeService == service) {
            setActiveService(null);
          } else {
            setActiveService(service);
          }
        }}
      >
        <RightAngleArrow
          className={`group-hover:stroke-white stroke-current block transition-all ${
            activeService == service && "rotate-90"
          }`}
        />
      </div>
    </div>
    {activeService?.label == service?.label && (
      <ServiceContent activeService={activeService} setActive={setActive} setShowLinks={setShowLinks}/>
    )}
  </div>
);
