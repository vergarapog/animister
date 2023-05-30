import React from "react";

type Props = {
  itemId: string;
};

const Animation = ({ itemId }: Props) => {
  return (
    <div
      className={`min-w flex h-32 min-w-[128px] select-none items-center justify-center rounded-full bg-primary`}
    >
      <div>Circle</div>
    </div>
  );
};

export default Animation;
