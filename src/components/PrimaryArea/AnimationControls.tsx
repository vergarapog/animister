import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { remountKey } from "../../reducers/animatedObjectReducer";
import { useGlobalContext } from "../../context";
import {
  toggleFavorite,
  removeFavorite,
} from "../../reducers/favoritesReducer";

// type Props = {}

const AnimationControls = () => {
  const favoriteAnimations = useAppSelector(
    (state) => state.favoritesReducer.favoriteAnimations
  );
  const { setIsGeneratedCodeWindowOpen, selectedGroup, selectedVariation } =
    useGlobalContext();

  // const isFavorite = favoriteAnimations.find((animation) => {
  //   return animation.animationTitle === selectedGroup.animationTitle;
  // });

  const dispatch = useAppDispatch();

  const handleReplayAnimation = () => {
    dispatch(remountKey());
  };

  const handleFavoriteAnimation = () => {
    // if (!isFavorite) {
    //   dispatch(
    //     toggleFavorite({
    //       animationTitle: selectedGroup.animationTitle,
    //       variatio: selectedVariation,
    //     })
    //   );
    // } else {
    // dispatch(removeFavorite(selectedGroup.animationTitle));
    // }
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
      <div>
        <FontAwesomeIcon
          className={`cursor-pointer rounded-full bg-white p-2 text-xl text-primary transition-all hover:scale-125 md:text-xl`}
          icon="heart"
          onClick={handleFavoriteAnimation}
        />
      </div>
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
