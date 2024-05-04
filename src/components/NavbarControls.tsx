import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { clearFavorites } from "../reducers/favoritesReducer";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useEffect, useState } from "react";

const NavbarControls = () => {
  const dispatch = useAppDispatch();
  const [animateHeart, setAnimateHeart] = useState<boolean>(false);
  const favorites = useAppSelector(
    (state) => state.favoritesReducer.favoriteAnimations
  );

  const favoritesCount = favorites.reduce((accu, curr) => {
    return accu + curr.variations.length;
  }, 0);

  useEffect(() => {
    if (favoritesCount === 1) {
      setAnimateHeart(true);
      const animateHeartTimeout = setTimeout(() => {
        setAnimateHeart(false);
      }, 800);

      return () => clearTimeout(animateHeartTimeout);
    }
  }, [favoritesCount]);

  //check if in favorites page
  const inFavoritesPage = useMatch("/favorites");
  const inDownloadFavoritesPage = useMatch("/download");

  const navigate = useNavigate();

  const handleClearFavorites = () => {
    if (confirm("Are you sure you want to delete your favorites?")) {
      dispatch(clearFavorites());
    }
    if (inDownloadFavoritesPage) {
      navigate("/");
    }
  };

  return (
    <ul className="mx-2 flex space-x-0.5">
      <div className="mr-2 flex items-center space-x-1.5">
        <span>{favoritesCount}</span>
        <FontAwesomeIcon
          className={
            animateHeart
              ? `animate-[jello-horizontal_0.8s_ease_0s_infinite_normal_forwards]`
              : ""
          }
          icon="heart"
        />
      </div>
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
