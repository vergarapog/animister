import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { remountKey } from "../../reducers/animatedObjectReducer";
import { useGlobalContext } from "../../context";
import { toggleFavorite } from "../../reducers/favoritesReducer";
import { useMatch } from "react-router-dom";
import { useState } from "react";
import { nonDraggableTypes } from "../../constants";

const AnimationControls = () => {
  const favoriteAnimations = useAppSelector((state) => {
    return state.favoritesReducer.favoriteAnimations;
  });

  const { keyframes } = useAppSelector((state) => {
    return state.animatedObjectReducer;
  });

  const { objectType } = useAppSelector((state) => {
    return state.optionsReducer;
  });

  const {
    setIsGeneratedCodeWindowOpen,
    selectedGroup,
    selectedVariation,
    isDraggable,
    setIsDraggable,
  } = useGlobalContext();

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
        variation: { variationTitle: selectedVariation, keyframes: keyframes },
      })
    );
  };

  const handleOpenGeneratedCodeWindow = () => {
    setIsGeneratedCodeWindowOpen(true);
  };

  const [isToggleVibrate, setIsToggleVibrate] = useState<boolean>(false);

  const handleDraggableToggle = () => {
    if (nonDraggableTypes.includes(objectType)) {
      setIsToggleVibrate(true);
      setTimeout(() => {
        setIsToggleVibrate(false);
      }, 500);
    } else {
      setIsDraggable((prev) => !prev);
    }
  };

  return (
    <div className="absolute right-7 top-6 flex space-x-4">
      <div>
        <FontAwesomeIcon
          className={`cursor-pointer rounded-full px-2 py-2 text-xl transition-all hover:scale-125 md:text-xl ${
            isDraggable ? "bg-green-500 text-white " : "bg-accent text-white"
          } ${
            isToggleVibrate
              ? "animate-[vibrate-3_1s_ease-in-out_infinite] bg-red-500"
              : ""
          }`}
          icon={isDraggable ? "arrows-up-down-left-right" : "lock"}
          onClick={handleDraggableToggle}
        />
      </div>

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
