import "./App.css";
import Navbar from "./components/Navbar";
import styles from "./style";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

function App() {
  return (
    <div className="w-full font-montserrat">
      <div className={`${styles.flexCenter} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default App;
