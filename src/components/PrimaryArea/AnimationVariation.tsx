import { useGlobalContext } from "../../context";
import { useAppDispatch } from "../../hooks";
import { setKeyframes } from "../../reducers/animatedObjectReducer";

type Props = {
  variationTitle: string;
  keyframes: string;
};

const AnimationVariation = ({ variationTitle, keyframes }: Props) => {
  const { selectedVariation, setSelectedVariation } = useGlobalContext();

  const dispatch = useAppDispatch();

  const handleClick = () => {
    setSelectedVariation(variationTitle);
    dispatch(setKeyframes(keyframes));
  };

  return (
    <div
      className={`cursor-pointer select-none whitespace-nowrap rounded p-1 text-center  text-sm text-primarydark  hover:text-accent md:p-2 md:text-sm ${
        selectedVariation === variationTitle
          ? "bg-accent text-white hover:text-gray-50"
          : ""
      }`}
      onClick={handleClick}
    >
      <div>{variationTitle}</div>
    </div>
  );
};

export default AnimationVariation;
