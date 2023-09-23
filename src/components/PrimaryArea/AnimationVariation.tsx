import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalContext } from "../../context";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setKeyframes } from "../../reducers/animatedObjectReducer";

type Props = {
  variationTitle: string;
  keyframes: string;
};

const AnimationVariation = ({ variationTitle, keyframes }: Props) => {
  const favoriteAnimations = useAppSelector(
    (state) => state.favoritesReducer.favoriteAnimations
  );
  const { selectedGroup, selectedVariation, setSelectedVariation } =
    useGlobalContext();

  const checkIfVariationFavorite = () => {
    const selectedGroupVariations = favoriteAnimations.find((animation) => {
      return animation.animationTitle === selectedGroup.animationTitle;
    });
    if (selectedGroupVariations) {
      return selectedGroupVariations.variations.find(
        (variation) => variation.variationTitle === variationTitle
      );
    } else {
      return false;
    }
  };

  const isVariationFavorite = checkIfVariationFavorite();

  const dispatch = useAppDispatch();

  const handleClick = () => {
    setSelectedVariation(variationTitle);
    dispatch(setKeyframes(keyframes));
  };

  return (
    <div
      className={`cursor-pointer select-none whitespace-nowrap rounded p-1 text-center  text-sm text-primarydark  hover:text-accent md:p-2 md:text-sm ${
        selectedVariation === variationTitle
          ? "bg-accent font-bold text-white hover:text-gray-50"
          : ""
      }`}
      onClick={handleClick}
    >
      <div>{variationTitle}</div>
      {isVariationFavorite && (
        <div>
          <FontAwesomeIcon
            className={`cursor-pointer rounded-full bg-white p-2 text-xl text-primary transition-all hover:scale-125 md:text-xl`}
            icon="heart"
          />
        </div>
      )}
    </div>
  );
};

export default AnimationVariation;
