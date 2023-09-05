import { useGlobalContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useGlobalContext();

  return (
    <aside
      className={`absolute z-50 bg-white  p-4 text-primarydark transition-all ${
        isSideBarOpen ? "fixed right-0" : "-right-52"
      } h-screen w-52`}
    >
      <div className=" flex h-full flex-col">
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
        <div className="my-32 flex flex-1 items-start justify-center ">
          <ul className="items flex flex-col space-y-5 text-2xl">
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
