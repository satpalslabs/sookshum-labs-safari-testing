import React from "react";

const LocationIcon: React.FC<{ style: string }> = (props) => (
  <svg
    width="20"
    height="19"
    viewBox="0 0 20 19"
    fill="none"
    className={props.style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.3307 10.1454C16.2739 10.724 18.3307 12.0456 18.3307 13.5833C18.3307 15.6544 14.5998 17.3333 9.9974 17.3333C5.39502 17.3333 1.66406 15.6544 1.66406 13.5833C1.66406 12.0456 3.72089 10.724 6.66406 10.1454M9.9974 13.1667V6.5M9.9974 6.5C11.3781 6.5 12.4974 5.38071 12.4974 4C12.4974 2.61929 11.3781 1.5 9.9974 1.5C8.61668 1.5 7.4974 2.61929 7.4974 4C7.4974 5.38071 8.61668 6.5 9.9974 6.5Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

export default LocationIcon;
