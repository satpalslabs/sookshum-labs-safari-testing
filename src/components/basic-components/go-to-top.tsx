"use client";
import React, { useEffect, useState } from "react";

const GoTopButton = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    setShowGoTop(window.scrollY > 600);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  }, []);

  return (
    <div
      className={`transition-all cursor-pointer duration-300 z-[99999] fixed p-3 rounded-full bg-innerContainer bottom-[120px] lg:bottom-[110px] sm:bottom-[100px] xs:bottom-[90px] border border-viewportBorder shadow-darkButton hover:shadow-buttonInset hover:bg-buttonGradient right-[15px]   ${
        showGoTop ? " opacity-100" : "opacity-0"
      }`}
      onClick={handleScrollUp}
    >
      <div className="w-full flex items-center justify-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 15L12 9L6 15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
export default GoTopButton;
