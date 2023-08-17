import { useGlobalContext } from "../context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { animationCategories } from "../constants";

const Navbar = () => {
  const { selectedCategory, setSelectedCategory, setIsSideBarOpen } =
    useGlobalContext();
  const handleClick = (title: string) => {
    setSelectedCategory(title);
  };

  return (
    <nav className={`px-4 py-2 text-sm uppercase`}>
      {/* <Auth /> */}
      <div className={`flex flex-col items-center justify-between md:flex-row`}>
        <div className={`flex items-center space-x-5`}>
          <div
            className={`select-none rounded-full bg-white px-2 font-semibold text-black md:text-3xl`}
          >
            B
          </div>
          <div>
            <ul className="flex space-x-2  font-bold">
              {animationCategories.map((category) => {
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
                      className={`cursor-pointer select-none p-1 underline-offset-4 transition-all hover:scale-110 `}
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
        </div>
        <div onClick={() => setIsSideBarOpen(true)}>
          <FontAwesomeIcon
            className={`cursor-pointer text-xl md:text-2xl`}
            icon="bars"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
