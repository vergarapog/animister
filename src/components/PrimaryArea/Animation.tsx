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
      className={`relative mx-2 flex min-w-[100px] cursor-pointer select-none flex-row-reverse items-center justify-center whitespace-nowrap rounded-full px-2 py-2 text-center text-xs font-bold tracking-wide transition-all duration-100 md:h-28 md:w-28 md:whitespace-normal  md:px-1 md:py-1  ${
        selectedGroup.animationTitle === animationTitle
          ? "bg-accent hover:bg-accent"
          : "bg-primary hover:bg-[#4293a7]"
      }`}
      onClick={handleClick}
    >
      {selectedAnimationGroupObject && (
        <div
          className={`ml-2 md:absolute md:left-1/2 md:top-6 md:ml-0 md:-translate-x-1/2`}
        >
          {selectedAnimationGroupObject.variations.length}{" "}
          <FontAwesomeIcon icon="heart" className="" />
        </div>
      )}
      <div>
        <div className="uppercase">{animationTitle}</div>
      </div>
    </div>
  );
};

export default Animation;
