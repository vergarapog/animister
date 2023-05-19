import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import styles from "./style";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "./context";

library.add(faBars, faCircleXmark);

function App() {
  const { setIsSideBarOpen } = useGlobalContext();

  return (
    <div className="relative w-full overflow-x-hidden font-montserrat text-textoffwhite">
      <Sidebar />
      <div className="flex h-screen flex-col bg-red-300">
        <div className={`${styles.flexCenter} bg-primary`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`flex-grow`}></div>
      </div>
    </div>
  );
}

export default App;
