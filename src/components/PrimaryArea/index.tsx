// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { useEffect, useState } from "react";
import Animation from "./Animation";
import { useAppSelector } from "../../hooks";
import { useGlobalContext } from "../../context";
import { AnimationGroup } from "../../types";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore, need to ignore because react-horizontal-scrolling library doesnt have updated types
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import "./hideScrollbar.css";
import useDrag from "./useDrag";
import AnimationVariation from "./AnimationVariation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type scrollVisibilityApiType = any;

const PrimaryArea = () => {
  const [animationItems, setAnimationItems] = useState<AnimationGroup[]>([]);

  const allAnimations = useAppSelector((state) => state.animations.animations);
  const { selectedCategory, setSelectedGroup } = useGlobalContext();

  useEffect(() => {
    const getObjectByTitle = (selectedCategory: string) => {
      return allAnimations.find(
        (animation) => animation.title === selectedCategory
      );
    };

    const animationByCategory = getObjectByTitle(selectedCategory);
    if (animationByCategory) {
      setAnimationItems(animationByCategory.groups);
      setSelectedGroup(animationByCategory.groups[0].upperTitle);
    } else {
      setAnimationItems([]);
    }
  }, [allAnimations, selectedCategory, setSelectedGroup]);

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
          dragging ? "cursor-grabbing" : "cursor-pointer"
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
            {animationItems.map(({ upperTitle }) => (
              <Animation
                itemId={upperTitle} // NOTE: itemId is required for track items
                key={upperTitle}
                upperTitle={upperTitle}
                dragging={dragging}
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any,
//need to ignore because react-horizontal-scrolling library doesnt have updated types
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
