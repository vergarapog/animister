import { Link, useMatch } from "react-router-dom";
import { useGlobalContext } from "../context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavbarControls from "./NavbarControls";

const SimpleNavbar = () => {
  const { setIsSideBarOpen } = useGlobalContext();

  const inAboutPage = useMatch("/about");

  return (
    <nav className={`bg-primary px-2 py-3 text-sm uppercase md:px-4 md:py-2`}>
      {/* <Auth /> */}
      {/* Desktop Version of Navbar*/}
      <div className={`flex flex-row items-center justify-between`}>
        <div className={`flex items-center space-x-5`}>
          <Link to="/">
            <div
              className={`select-none rounded-full bg-white px-2 text-xl font-semibold text-black md:text-3xl `}
            >
              B
            </div>
          </Link>
        </div>
        <div className="flex items-center">
          {inAboutPage ? (
            <></>
          ) : (
            <div className="h-8">
              <NavbarControls />
            </div>
          )}
          <div onClick={() => setIsSideBarOpen(true)} className="">
            <FontAwesomeIcon
              className={`cursor-pointer text-xl transition-all hover:scale-y-[1.3] md:text-2xl`}
              icon="bars"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SimpleNavbar;
