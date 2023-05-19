import { useGlobalContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useGlobalContext();
  return (
    <aside
      className={`absolute p-6 transition-all ${
        isSideBarOpen ? "fixed right-0" : "-right-52"
      } h-screen w-52 bg-accent`}
    >
      <div className={`flex justify-between`}>
        <h1>Sidebar</h1>
        <div>
          <FontAwesomeIcon
            icon="x"
            size="xl"
            onClick={() => setIsSideBarOpen(false)}
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
