import { useGlobalContext } from "../../context";

type Props = {
  itemId: string;
  animationTitle: string;
  dragging: boolean;
};

const Animation = ({ itemId, animationTitle, dragging }: Props) => {
  const { selectedGroup, setSelectedGroup } = useGlobalContext();

  const handleClick = () => {
    if (dragging) {
      return false;
    }
    setSelectedGroup(animationTitle);
  };

  return (
    <div
      key={itemId}
      className={`min-w mx-2 flex h-32 min-w-[128px] cursor-pointer select-none items-center justify-center rounded-full  ${
        selectedGroup === animationTitle ? "bg-accent" : "bg-primary"
      }`}
      onClick={handleClick}
    >
      <div>{animationTitle}</div>
    </div>
  );
};

export default Animation;
