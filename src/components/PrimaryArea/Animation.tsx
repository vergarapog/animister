import { useGlobalContext } from "../../context";

type Props = {
  index: number;
  itemId: string;
  animationTitle: string;
  dragging: boolean;
  firstVariationTitle: string;
};

const Animation = ({
  index,
  itemId,
  animationTitle,
  dragging,
  firstVariationTitle,
}: Props) => {
  const { selectedGroup, setSelectedGroup, setSelectedVariation } =
    useGlobalContext();

  const handleClick = () => {
    if (dragging) {
      return false;
    }
    setSelectedGroup({ index: index, animationTitle: animationTitle });
    setSelectedVariation(firstVariationTitle);
  };

  return (
    <div
      key={itemId}
      className={`mx-2 flex min-w-[90px] cursor-pointer  select-none items-center  justify-center whitespace-nowrap rounded-full px-2 py-1 text-center text-sm md:h-28 md:w-28  ${
        selectedGroup.animationTitle === animationTitle
          ? "bg-accent"
          : "bg-primary"
      }`}
      onClick={handleClick}
    >
      <div>{animationTitle}</div>
    </div>
  );
};

export default Animation;
