import SimpleNavbar from "../components/SimpleNavbar";
import styles from "../style";
import PrimaryArea from "../components/PrimaryArea";
import { useAppSelector } from "../hooks";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Favorites = () => {
  const favorites = useAppSelector(
    (state) => state.favoritesReducer.favoriteAnimations
  );

  return (
    <div className="flex flex-col">
      <div className={`${styles.flexCenter} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <SimpleNavbar />
        </div>
      </div>
      <div className={`flex flex-grow justify-center`}>
        {favorites.length > 0 ? (
          <div className={`${styles.boxWidth} `}>
            <PrimaryArea />
          </div>
        ) : (
          <div className="flex h-64 items-center justify-center p-8 text-primarydark">
            <div className="space-y-7">
              <div className="text-center text-2xl">
                This space is waiting for your favorites. Add some by clicking
                the <FontAwesomeIcon icon="heart" /> icon :)
              </div>
              <div className="text-center text-2xl transition-all">
                Back to{" "}
                <Link to="/">
                  <span className="rounded bg-primary p-1 text-white transition-all hover:bg-accent">
                    Home
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
