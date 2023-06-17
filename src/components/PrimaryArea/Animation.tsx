import React from "react";

type Props = {
  itemId: string;
  upperTitle: string;
};

const Animation = ({ itemId, upperTitle }: Props) => {
  return (
    <div
      className={`min-w flex h-32 min-w-[128px] cursor-pointer select-none items-center justify-center rounded-full bg-primary`}
    >
      <div>{upperTitle}</div>
    </div>
  );
};

export default Animation;
