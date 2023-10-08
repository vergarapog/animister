import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { initializeAnimations } from "./reducers/animationsReducer";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import About from "./pages/About";
import Favorites from "./pages/Favorites";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faArrowRotateRight,
  faCode,
  faHeart,
  faX,
  faFilter,
  faTrash,
  faDownload,
  faGear,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import Backdrop from "./components/Backdrop";
import DownloadFavorites from "./pages/DownloadFavorites";

library.add(
  faBars,
  faArrowRotateRight,
  faHeart,
  faCode,
  faX,
  faFilter,
  faTrash,
  faDownload,
  faGear,
  faEyeSlash
);

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeAnimations());
  }, [dispatch]);

  return (
    <div className="relative h-screen w-full overflow-x-hidden font-montserrat text-textoffwhite">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/download" element={<DownloadFavorites />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Backdrop />
    </div>
  );
}

export default App;
