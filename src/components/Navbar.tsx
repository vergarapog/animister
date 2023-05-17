import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animationCategories } from "../constants";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { selectedCategory, setSelectedCategory } = useGlobalContext();

  const handleClick = (title: string) => {
    setSelectedCategory(title);
    console.log("1", title, "2", selectedCategory);
  };

  return (
    <nav className={`p-3 px-4 text-sm uppercase text-white`}>
      <div className={`flex items-center justify-between`}>
        <div className={`flex items-center space-x-5`}>
          <div className={`text-3xl font-semibold`}>B</div>
          <div>
            <ul className="flex space-x-2 font-bold">
              {animationCategories.map((category) => {
                if (category.title === selectedCategory) {
                  return (
                    <li
                      className={`p=1 cursor-pointer select-none bg-accent p-1`}
                      key={category.id}
                      onClick={() => handleClick(category.title)}
                    >
                      {category.title}
                    </li>
                  );
                } else {
                  return (
                    <li
                      className={`cursor-pointer select-none p-1 transition-all hover:scale-110 hover:underline`}
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
        <div>
          <FontAwesomeIcon icon="bars" size="xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
