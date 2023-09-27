import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { remountKey } from "../../reducers/animatedObjectReducer";
import { useGlobalContext } from "../../context";
import { toggleFavorite } from "../../reducers/favoritesReducer";
import { useMatch } from "react-router-dom";

const AnimationControls = () => {
  const favoriteAnimations = useAppSelector((state) => {
    return state.favoritesReducer.favoriteAnimations;
  });
  const { setIsGeneratedCodeWindowOpen, selectedGroup, selectedVariation } =
    useGlobalContext();

  const dispatch = useAppDispatch();

  const selectedAnimationGroupObject = favoriteAnimations.find((animation) => {
    return animation.animationTitle === selectedGroup.animationTitle;
  });

  const arrayOfVariations = selectedAnimationGroupObject?.variations.map(
    (variation) => {
      return variation.variationTitle;
    }
  );

  const isFavoritesPage = useMatch("/favorites");

  const handleReplayAnimation = () => {
    dispatch(remountKey());
  };

  const handleFavoriteAnimation = () => {
    dispatch(
      toggleFavorite({
        animationTitle: selectedGroup.animationTitle,
        variationTitle: selectedVariation,
      })
    );
  };

  const handleOpenGeneratedCodeWindow = () => {
    setIsGeneratedCodeWindowOpen(true);
  };

  return (
    <div className="absolute right-10 top-6 flex space-x-4">
      <div>
        <FontAwesomeIcon
          className={`cursor-pointer rounded-full bg-white p-2 text-xl text-primary transition-all hover:scale-110 hover:animate-[rotate-center_0.4s_ease-in] md:text-xl`}
          icon="arrow-rotate-right"
          onClick={handleReplayAnimation}
        />
      </div>
      {!isFavoritesPage && (
        <div>
          <FontAwesomeIcon
            className={`cursor-pointer rounded-full ${
              arrayOfVariations?.includes(selectedVariation)
                ? "bg-primary text-accent"
                : "bg-white text-primary"
            } p-2 text-xl  transition-all hover:scale-125 md:text-xl`}
            icon="heart"
            onClick={handleFavoriteAnimation}
          />
        </div>
      )}
      <div>
        <FontAwesomeIcon
          className={`cursor-pointer rounded-full bg-white px-2 py-2 text-xl text-primary transition-all hover:scale-125 md:text-xl`}
          icon="code"
          onClick={handleOpenGeneratedCodeWindow}
        />
      </div>
    </div>
  );
};

export default AnimationControls;
