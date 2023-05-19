import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animationCategories } from "../constants";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { selectedCategory, setSelectedCategory, setIsSideBarOpen } =
    useGlobalContext();

  const handleClick = (title: string) => {
    setSelectedCategory(title);
    console.log("1", title, "2", selectedCategory);
  };

  return (
    <nav className={` p-3 px-4 text-sm uppercase`}>
      <div className={`flex items-center justify-between`}>
        <div className={`flex items-center space-x-5`}>
          <div
            className={`select-none rounded-full bg-white px-2 text-3xl font-semibold text-black`}
          >
            B
          </div>
          <div>
            <ul className="flex space-x-2 font-bold">
              {animationCategories.map((category) => {
                if (category.title === selectedCategory) {
                  return (
                    <li
                      className={`cursor-pointer select-none rounded bg-accent p-1 text-black`}
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
