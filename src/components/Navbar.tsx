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
    <nav className={`px-2 py-3 text-sm uppercase md:px-4 md:py-2`}>
      {/* <Auth /> */}
      {/* Desktop Version of Navbar*/}
      <div
        className={`hidden flex-col justify-between md:flex md:flex-row md:items-center`}
      >
        <div className={`flex items-center space-x-5`}>
          <div
            className={`select-none rounded-full bg-white px-2 text-xl font-semibold text-black md:text-3xl `}
          >
            B
          </div>
          <div className=" overflow-x-scroll font-bold scrollbar-hide">
            <ul className="flex space-x-2 ">
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
        <div onClick={() => setIsSideBarOpen(true)} className="self-center">
          <FontAwesomeIcon
            className={`cursor-pointer text-xl transition-all hover:scale-y-[1.3] md:text-2xl`}
            icon="bars"
          />
        </div>
      </div>
      {/* Mobile Version of Navbar*/}
      <div
        className={`flex flex-col justify-between space-y-3 md:hidden md:flex-row md:items-center`}
      >
        <div className={`flex w-full items-center justify-between`}>
          <div
            className={`select-none rounded-full bg-white px-2 text-xl font-semibold text-black md:text-3xl `}
          >
            B
          </div>

          <div onClick={() => setIsSideBarOpen(true)} className="self-center">
            <FontAwesomeIcon
              className={`cursor-pointer text-xl transition-all hover:scale-y-[1.3] md:text-2xl`}
              icon="bars"
            />
          </div>
        </div>
        <div className=" overflow-x-scroll font-bold scrollbar-hide">
          <ul className="flex space-x-2 ">
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
    </nav>
  );
};

export default Navbar;
