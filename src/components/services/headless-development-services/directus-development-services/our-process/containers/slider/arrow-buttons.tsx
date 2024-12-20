/**
 * This component contains the Arrow buttons of slider.
 */
import { nextCard, prevCard } from "./slider";

const ArrowButtons = () => (
  <div className="absolute right-[6%] lg:right-[4%] -top-[40%] lg:-top-[44%] sm:right-4 xs:hidden">
    <div className="flex gap-5">
      <button
        className="slider-prev-arrow text-[#777E90]"
        onClick={() => {
          prevCard();
        }}
      >
        <svg
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.90906 0.265207C4.50324 -0.109399 3.87058 -0.0840962 3.49597 0.321722L0.265201 3.82168C-0.0883963 4.20474 -0.0884 4.79518 0.265194 5.17824L3.49597 8.67828C3.87057 9.08411 4.50323 9.10941 4.90905 8.73481C5.31487 8.36021 5.34018 7.72755 4.96558 7.32173L3.28397 5.49997L13 5.49997C13.5523 5.49997 14 5.05225 14 4.49997C14 3.94768 13.5523 3.49997 13 3.49997L3.284 3.49997L4.96557 1.67829C5.34018 1.27247 5.31487 0.639813 4.90906 0.265207Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <button
        className="slider-next-arrow text-white"
        onClick={() => {
          nextCard();
        }}
      >
        <svg
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.09094 0.265207C9.49676 -0.109399 10.1294 -0.0840962 10.504 0.321722L13.7348 3.82168C14.0884 4.20474 14.0884 4.79518 13.7348 5.17824L10.504 8.67828C10.1294 9.08411 9.49677 9.10941 9.09095 8.73481C8.68513 8.36021 8.65982 7.72755 9.03442 7.32173L10.716 5.49997L0.999999 5.49997C0.447714 5.49997 -7.64154e-07 5.05225 -7.86799e-07 4.49997C-8.09444e-07 3.94768 0.447714 3.49997 0.999999 3.49997L10.716 3.49997L9.03443 1.67829C8.65982 1.27247 8.68513 0.639813 9.09094 0.265207Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  </div>
);

export default ArrowButtons;
