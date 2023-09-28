import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useMatch } from "react-router-dom";

const NavbarControls = () => {
  //check if in favorites page
  const inFavoritesPage = useMatch("/favorites");

  return (
    <ul className="mx-2 flex space-x-0.5">
      <li>
        <Link to={inFavoritesPage ? "/" : "/favorites"}>
          <FontAwesomeIcon
            className={`cursor-pointer rounded ${
              inFavoritesPage ? "bg-accent" : "bg-[#4293a7]"
            } p-2 transition-all hover:scale-110 hover:bg-accent`}
            icon="filter"
          />
        </Link>
      </li>
      <li>
        <FontAwesomeIcon
          className="cursor-pointer rounded bg-[#4293a7] p-2 transition-all hover:scale-110 hover:bg-accent"
          icon="trash"
        />
      </li>
      <li>
        <FontAwesomeIcon
          className="cursor-pointer rounded bg-[#4293a7] p-2 transition-all hover:scale-110 hover:bg-accent"
          icon="download"
        />
      </li>
    </ul>
  );
};

export default NavbarControls;
