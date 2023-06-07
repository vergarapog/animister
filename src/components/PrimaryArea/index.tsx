// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from "react";
import Animation from "./Animation";

// const {
//   ScrollMenu,
//   VisibilityContext,
//   // eslint-disable-next-line @typescript-eslint/no-var-requires
// } = require("react-horizontal-scrolling-menu");

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import "./hideScrollbar.css";

import useDrag from "./useDrag";
import AnimationVariation from "./AnimationVariation";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

const PrimaryArea = () => {
  const [items, setItems] = React.useState(getItems);

  // NOTE: for drag by mouse
  const { dragStart, dragStop, dragMove, dragging } = useDrag();
  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: React.MouseEvent) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  return (
    <main className={`flex h-full flex-col pt-2`}>
      <section
        onMouseLeave={dragStop}
        className={`${
          dragging ? "cursor-grabbing" : "cursor-grab"
        } border-b-[1.5px] pb-2`}
      >
        <ScrollMenu
          onWheel={onWheel}
          onMouseDown={() => dragStart}
          onMouseUp={() => dragStop}
          onMouseMove={handleDrag}
        >
          <div
            className={`flex space-x-4 overflow-x-scroll p-2 scrollbar-hide`}
          >
            {items.map(({ id }) => (
              <Animation
                itemId={id}
                key={id} // NOTE: itemId is required for track items
              />
            ))}
          </div>
        </ScrollMenu>
      </section>
      <section className={`p-2`}>
        <div className={`grid  grid-cols-3 gap-3`}>
          <AnimationVariation />
          <AnimationVariation />
          <AnimationVariation />
          <AnimationVariation />
          <AnimationVariation />
          <AnimationVariation />
          <AnimationVariation />
          <AnimationVariation />
          <AnimationVariation />
          <AnimationVariation />
          <AnimationVariation />
          <AnimationVariation />
        </div>
      </section>
      <section className={`grow bg-gray-200`}></section>
    </main>
  );
};

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

export default PrimaryArea;
