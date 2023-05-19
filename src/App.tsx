import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import styles from "./style";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faX);

function App() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="flex h-screen flex-col font-montserrat text-textoffwhite">
        <Sidebar />
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
