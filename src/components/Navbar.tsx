import { useAppSelector } from "../hooks";
import { useGlobalContext } from "../context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Auth from "./Auth";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [movieList, setMovieList] = useState([]);

  const moviesCollectionRef = collection(db, "movies");

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const data = await getDocs(moviesCollectionRef);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    getMovieList();
  }, []);

  const animations = useAppSelector((state) => state.animations.animations);
  const { selectedCategory, setSelectedCategory, setIsSideBarOpen } =
    useGlobalContext();
  const handleClick = (title: string) => {
    setSelectedCategory(title);
    console.log("1", title, "2", selectedCategory);
  };

  return (
    <nav className={`px-4 py-2 text-sm uppercase`}>
      {/* <Auth /> */}
      <div className={`flex items-center justify-between`}>
        <div className={`flex items-center space-x-5`}>
          <div
            className={`select-none rounded-full bg-white px-2 text-3xl font-semibold text-black`}
          >
            B
          </div>
          <div>
            <ul className="flex space-x-2 font-bold">
              {animations.map((category) => {
                if (category.title === selectedCategory) {
                  return (
                    <li
                      className={`cursor-pointer select-none rounded bg-accent p-1 `}
                      key={category.id}
                      onClick={() => handleClick(category.title)}
                    >
                      {category.title}
                    </li>
                  );
                } else {
                  return (
                    <li
                      className={`cursor-pointer select-none p-1 underline-offset-4 transition-all hover:scale-110 hover:underline`}
                      key={category.id}
                      onClick={() => handleClick(category.title)}
                    >
                      {category.title}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          {/* <div>
            <ul className="flex space-x-2 font-bold">
              {animations.map((category) => {
                if (category.title === selectedCategory) {
                  return (
                    <li
                      className={`cursor-pointer select-none rounded bg-accent p-1 `}
                      key={category.id}
                      onClick={() => handleClick(category.title)}
                    >
                      {category.title}
                    </li>
                  );
                } else {
                  return (
                    <li
                      className={`cursor-pointer select-none p-1 underline-offset-4 transition-all hover:scale-110 hover:underline`}
                      key={category.id}
                      onClick={() => handleClick(category.title)}
                    >
                      {category.title}
                    </li>
                  );
                }
              })}
            </ul>
          </div> */}
        </div>
        <div onClick={() => setIsSideBarOpen(true)}>
          <FontAwesomeIcon
            className={`cursor-pointer`}
            icon="bars"
            size="2xl"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
