import { useGlobalContext } from "../../context";

type Props = {
  itemId: string;
  upperTitle: string;
  dragging: boolean;
};

const Animation = ({ itemId, upperTitle, dragging }: Props) => {
  const { selectedGroup, setSelectedGroup } = useGlobalContext();

  const handleClick = () => {
    if (dragging) {
      return false;
    }
    setSelectedGroup(upperTitle);
  };

  return (
    <div
      key={itemId}
      className={`min-w flex h-32 min-w-[128px] cursor-pointer select-none items-center justify-center rounded-full  ${
        selectedGroup === upperTitle ? "bg-accent" : "bg-primary"
      }`}
      onClick={handleClick}
    >
      <div>{upperTitle}</div>
    </div>
  );
};

export default Animation;
