import { useGlobalContext } from "../../context";

type Props = {
  itemId: string;
  upperTitle: string;
};

const Animation = ({ itemId, upperTitle }: Props) => {
  const { selectedGroup, setSelectedGroup } = useGlobalContext();

  return (
    <div
      key={itemId}
      className={`min-w flex h-32 min-w-[128px] cursor-pointer select-none items-center justify-center rounded-full  ${
        selectedGroup === upperTitle ? "bg-accent" : "bg-primary"
      }`}
      onClick={() => setSelectedGroup(upperTitle)}
    >
      <div>{upperTitle}</div>
    </div>
  );
};

export default Animation;
