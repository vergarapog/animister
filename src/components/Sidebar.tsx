import { useGlobalContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
const Sidebar = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useGlobalContext();

  //the useRef and useEffect is for ignoring scroll of background when mouse is inside the sidebar
  const sidebarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const disableScroll = (e: WheelEvent) => {
      e.preventDefault();
    };

    const sidebarElement = sidebarRef.current;

    if (isSideBarOpen) {
      sidebarElement?.addEventListener("wheel", disableScroll);
    } else {
      sidebarElement?.removeEventListener("wheel", disableScroll);
    }

    return () => {
      sidebarElement?.removeEventListener("wheel", disableScroll);
    };
  }, [isSideBarOpen]);

  return (
    <aside
      ref={sidebarRef}
      className={`absolute z-50 bg-white p-7 text-primarydark transition-all ${
        isSideBarOpen ? "fixed right-0" : "-right-80"
      } h-screen w-80`}
    >
      <div className="flex h-full flex-col border border-primarydark border-opacity-50 p-5">
        <div
          className={`flex justify-end`}
          onClick={() => setIsSideBarOpen(false)}
        >
          <button>
            <FontAwesomeIcon
              className=" px-2 py-1.5 text-xl text-primary transition-all  hover:bg-primarydark hover:text-white"
              icon="x"
              size="xl"
            />
          </button>
        </div>
        <div className="my-12 self-center">
          <Link to="/" onClick={() => setIsSideBarOpen(false)}>
            <button className="btn btn-primary btn-ghost btn-shine">B</button>{" "}
          </Link>
        </div>
        <div className="flex flex-1 items-start justify-center p-8">
          <ul className="items flex flex-col space-y-6 text-center text-2xl">
            <li>
              <Link
                to="/"
                className="cursor-pointer rounded px-4 py-2  transition-all hover:line-through"
                onClick={() => setIsSideBarOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/howto"
                className="cursor-pointer rounded px-4 py-2  transition-all hover:line-through"
                onClick={() => setIsSideBarOpen(false)}
              >
                How To
              </Link>
            </li>
            <li>
              <Link
                to="/favorites"
                className="cursor-pointer rounded px-4 py-2  transition-all hover:line-through"
                onClick={() => setIsSideBarOpen(false)}
              >
                Favorites
              </Link>
            </li>
          </ul>
        </div>
        <div className="self-center">made with {"<3"}</div>
      </div>
    </aside>
  );
};

export default Sidebar;
