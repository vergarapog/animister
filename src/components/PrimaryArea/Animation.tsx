import { useGlobalContext } from "../../context";

type Props = {
  index: number;
  itemId: string;
  animationTitle: string;
  dragging: boolean;
};

const Animation = ({ index, itemId, animationTitle, dragging }: Props) => {
  const { selectedGroup, setSelectedGroup } = useGlobalContext();

  const handleClick = () => {
    if (dragging) {
      return false;
    }
    setSelectedGroup({ index: index, animationTitle: animationTitle });
  };

  return (
    <div
      key={itemId}
      className={`min-w mx-2 flex h-32 min-w-[128px] cursor-pointer select-none items-center justify-center rounded-full  ${
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
