import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalContext } from "../../context";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setKeyframes } from "../../reducers/animatedObjectReducer";

type Props = {
  index: number;
  itemId: string;
  animationTitle: string;
  dragging: boolean;
  firstVariationTitle: string;
  variationKeyframes: string | undefined;
};

const Animation = ({
  index,
  itemId,
  animationTitle,
  dragging,
  firstVariationTitle,
  variationKeyframes,
}: Props) => {
  const favoriteAnimations = useAppSelector(
    (state) => state.favoritesReducer.favoriteAnimations
  );
  const { selectedGroup, setSelectedGroup, setSelectedVariation } =
    useGlobalContext();

  const dispatch = useAppDispatch();

  //this gets the whole animationGroup object, so you can count the variation array length to display the number of favorites in the group
  //the returned thruthy/falsy value (object | undefined ) is used to display via shortcircuit the heart icon at line 56
  const selectedAnimationGroupObject = favoriteAnimations.find((animation) => {
    return animation.animationTitle === animationTitle;
  });

  const handleClick = () => {
    if (dragging) {
      return false;
    }
    setSelectedGroup({ index: index, animationTitle: animationTitle });
    setSelectedVariation(firstVariationTitle);
    dispatch(setKeyframes(variationKeyframes));
  };

  return (
    <div
      key={itemId}
      className={`relative mx-2 flex min-w-[90px] cursor-pointer select-none  items-center justify-center rounded-full px-1 py-1 text-center text-sm font-bold tracking-wide md:h-28 md:w-28  ${
        selectedGroup.animationTitle === animationTitle
          ? "bg-accent"
          : "bg-primary"
      }`}
      onClick={handleClick}
    >
      {selectedAnimationGroupObject && (
        <div className={`absolute left-1/2 top-6 -translate-x-1/2`}>
          {selectedAnimationGroupObject.variations.length}{" "}
          <FontAwesomeIcon icon="heart" />
        </div>
      )}
      <div>
        <div>{animationTitle}</div>
      </div>
    </div>
  );
};

export default Animation;
