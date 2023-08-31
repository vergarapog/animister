import { useGlobalContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useGlobalContext();

  return (
    <aside
      className={`absolute z-50 p-4 transition-all ${
        isSideBarOpen ? "fixed right-0" : "-right-52"
      } h-screen w-52 bg-accent`}
    >
      <div className="flex h-full flex-col">
        <div
          className={`flex justify-end`}
          onClick={() => setIsSideBarOpen(false)}
        >
          <div>
            <FontAwesomeIcon
              className={`cursor-pointer`}
              icon="circle-xmark"
              size="2xl"
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <ul className="flex flex-col space-y-5 text-2xl">
            <Link to="/" className="cursor-pointer">
              Home
            </Link>
            <Link to="/about" className="cursor-pointer">
              About
            </Link>
          </ul>
        </div>
        <div>made with {"<3"}</div>
      </div>
    </aside>
  );
};

export default Sidebar;
