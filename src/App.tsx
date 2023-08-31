import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { initializeAnimations } from "./reducers/animationsReducer";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import About from "./pages/About";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faCircleXmark,
  faArrowRotateRight,
  faCode,
  faHeart,
  faX,
} from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faCircleXmark, faArrowRotateRight, faHeart, faCode, faX);

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeAnimations());
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden font-montserrat text-textoffwhite">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
