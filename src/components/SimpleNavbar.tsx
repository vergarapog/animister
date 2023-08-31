import { useGlobalContext } from "../context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SimpleNavbar = () => {
  const { setIsSideBarOpen } = useGlobalContext();

  return (
    <nav className={`bg-primary px-2 py-3 text-sm uppercase md:px-4 md:py-2`}>
      {/* <Auth /> */}
      {/* Desktop Version of Navbar*/}
      <div className={`flex flex-row items-center justify-between`}>
        <div className={`flex items-center space-x-5`}>
          <div
            className={`select-none rounded-full bg-white px-2 text-xl font-semibold text-black md:text-3xl `}
          >
            B
          </div>
        </div>
        <div onClick={() => setIsSideBarOpen(true)} className="self-center">
          <FontAwesomeIcon
            className={`cursor-pointer text-xl md:text-2xl`}
            icon="bars"
          />
        </div>
      </div>
    </nav>
  );
};

export default SimpleNavbar;
