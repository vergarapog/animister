import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useMatch } from "react-router-dom";
import { clearFavorites } from "../reducers/favoritesReducer";
import { useAppDispatch } from "../hooks";

const NavbarControls = () => {
  const dispatch = useAppDispatch();

  //check if in favorites page
  const inFavoritesPage = useMatch("/favorites");
  const inDownloadFavoritesPage = useMatch("/download");

  const handleClearFavorites = () => {
    if (confirm("Are you sure you want to delete your favorites?")) {
      dispatch(clearFavorites());
    }
  };

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
      <li onClick={handleClearFavorites}>
        <FontAwesomeIcon
          className="cursor-pointer rounded bg-[#4293a7] p-2 transition-all hover:scale-110 hover:bg-accent"
          icon="trash"
        />
      </li>
      <li>
        <Link to={inDownloadFavoritesPage ? "/" : "/download"}>
          <FontAwesomeIcon
            className={`cursor-pointer rounded ${
              inDownloadFavoritesPage ? "bg-accent" : "bg-[#4293a7]"
            } p-2 transition-all hover:scale-110 hover:bg-accent`}
            icon="download"
          />
        </Link>
      </li>
    </ul>
  );
};

export default NavbarControls;
