/**
 * This component contains a nav-buttons.
 */

const MenuButton = ({
  showLinks,
  setShowLinks,
}: {
  showLinks: boolean;
  setShowLinks: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <div
    className="hidden sm:flex sm:flex-col h-12 justify-center cursor-pointer"
    onClick={() => setShowLinks((prev: boolean) => !prev)}
  >
    <svg
      width="43"
      viewBox="0 0 43 13"
      fill="none"
      className={`transition-all h-3 -mt-2 ${
        showLinks ? "rotate-[45deg] -mt-1" : ""
      }`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.95841 10.6667C7.9689 10.6667 7.16675 11.2636 7.16675 12C7.16675 12.7364 7.9689 13.3333 8.95841 13.3333H34.0418C35.0313 13.3333 35.8334 12.7364 35.8334 12C35.8334 11.2636 35.0313 10.6667 34.0418 10.6667H8.95841Z"
        fill="#F8F8F8"
      />
    </svg>
    <svg
      className={`-mt-1 transition-all  h-3 ${
        showLinks ? "-rotate-[45deg] -mt-[12px] -ml-[7.5px]" : ""
      }`}
      width="43"
      viewBox="0 0 43 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.95841 10.6667C7.9689 10.6667 7.16675 11.2636 7.16675 12C7.16675 12.7364 7.9689 13.3333 8.95841 13.3333H34.0418C35.0313 13.3333 35.8334 12.7364 35.8334 12C35.8334 11.2636 35.0313 10.6667 34.0418 10.6667H8.95841Z"
        fill="#F8F8F8"
      />
    </svg>
  </div>
);

export default MenuButton;
