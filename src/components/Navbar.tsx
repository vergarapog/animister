import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animationCategories } from "../constants";

const Navbar = () => {
  return (
    <nav className={`text-white px-4 text-md uppercase p-4`}>
      <div className={`flex justify-between items-center`}>
        <div className={`flex space-x-5 items-center`}>
          <div className={`font-bold text-3xl`}>A</div>
          <div>
            <ul className="flex space-x-4 font-bold">
              {animationCategories.map((category) => {
                return <li key={category.id}>{category.title}</li>;
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
