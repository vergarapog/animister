import { useGlobalContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useGlobalContext();

  return (
    <aside
      className={`absolute p-4 transition-all ${
        isSideBarOpen ? "fixed right-0" : "-right-52"
      } h-screen w-52 bg-accent`}
    >
      <div
        className={`flex justify-end`}
        onClick={() => setIsSideBarOpen(false)}
      >
        <div>
          <FontAwesomeIcon icon="circle-xmark" size="2xl" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
