import { useGlobalContext } from "../../context";

type Props = {
  variationTitle: string;
};

const AnimationVariation = ({ variationTitle }: Props) => {
  const { selectedVariation, setSelectedVariation } = useGlobalContext();

  const handleClick = () => {
    setSelectedVariation(variationTitle);
  };

  return (
    <div
      className={`cursor-pointer select-none rounded p-4 text-center text-primarydark hover:bg-accent hover:text-white ${
        selectedVariation === variationTitle ? "bg-accent text-white" : ""
      }`}
      onClick={handleClick}
    >
      <div>{variationTitle}</div>
    </div>
  );
};

export default AnimationVariation;
