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
  variationKeyframes: string;
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

  const isFavorite = favoriteAnimations.find((animation) => {
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
      className={`mx-2 flex min-w-[90px] cursor-pointer select-none items-center  justify-center  rounded-full px-1 py-1 text-center text-sm font-bold tracking-wide md:h-28 md:w-28  ${
        selectedGroup.animationTitle === animationTitle
          ? "bg-accent"
          : "bg-primary"
      }`}
      onClick={handleClick}
    >
      <div>{animationTitle}</div>
      {isFavorite && (
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

export default Animation;
