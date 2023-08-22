// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { useEffect, useState, useRef, useCallback, useMemo } from "react";

import Animation from "./Animation";
import AnimatedObject from "./AnimatedObject";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { useGlobalContext } from "../../context";
import { AnimationGroup } from "../../types";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore, need to ignore because react-horizontal-scrolling library doesnt have updated types
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import "./hideScrollbar.css";
import useDrag from "./useDrag";
import AnimationVariation from "./AnimationVariation";
import Options from "./Options";

import AnimationControls from "./AnimationControls";
import GeneratedCodeWindow from "./GeneratedCodeWindow";
import { setKeyframes } from "../../reducers/animatedObjectReducer";

//need to enable any because react-horizontal-scrolling library doesnt have updated types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type scrollVisibilityApiType = any;

const PrimaryArea = () => {
  const allAnimations = useAppSelector(
    (state) => state.animationsReducer.animations
  );

  const dispatch = useAppDispatch();

  const {
    selectedCategory,
    selectedGroup,
    setSelectedGroup,
    setSelectedVariation,
  } = useGlobalContext();

  const [animationItems, setAnimationItems] = useState<AnimationGroup[]>([]);

  const getListByCategory = useCallback(
    (selectedCategory: string) => {
      return allAnimations.find(
        (animation) => animation.categoryTitle === selectedCategory
      );
    },
    [allAnimations]
  );

  const animationsByCategory = useMemo(() => {
    return getListByCategory(selectedCategory);
  }, [selectedCategory, getListByCategory]);

  useEffect(() => {
    if (animationsByCategory) {
      setAnimationItems(animationsByCategory.groups);
      setSelectedGroup({
        index: 0,
        animationTitle: animationsByCategory.groups[0].animationTitle,
      });
      setSelectedVariation(
        animationsByCategory.groups[0].variations[0].variationTitle
      );
      dispatch(
        setKeyframes(animationsByCategory.groups[0].variations[0].keyframes)
      );
    } else {
      setAnimationItems([]);
    }
  }, [
    animationsByCategory,
    selectedCategory,
    setSelectedGroup,
    setSelectedVariation,
    getListByCategory,
    dispatch,
  ]);

  //for re-scroll to first animation group on category change
  const apiRef = useRef({} as scrollVisibilityApiType);
  useEffect(() => {
    apiRef.current?.scrollToItem?.(
      apiRef.current?.getItemElementById(animationItems[0]?.animationTitle)
    );
  }, [animationItems]);

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
          apiRef={apiRef}
          className={`flex space-x-4 overflow-x-scroll p-2 scrollbar-hide`}
        >
          {animationItems.length !== 0 ? (
            animationItems.map(({ animationTitle, variations }, index) => (
              <Animation
                index={index}
                itemId={animationTitle} // NOTE: itemId is required for track items
                key={animationTitle}
                animationTitle={animationTitle}
                dragging={dragging}
                firstVariationTitle={variations[0].variationTitle}
              />
            ))
          ) : (
            <LoadingSkeletonsAnimationGroup numOfSkeletons={10} />
          )}
        </ScrollMenu>
      </section>
      <section className={`p-2`}>
        <div
          className={`flex space-x-2 overflow-x-scroll scrollbar-hide md:grid  md:grid-cols-4  md:space-x-0 lg:grid-cols-6 `}
        >
          {animationItems.length !== 0 ? (
            animationItems[selectedGroup.index]?.variations?.map(
              ({ variationTitle, keyframes }) => {
                return (
                  <AnimationVariation
                    key={variationTitle}
                    variationTitle={variationTitle}
                    keyframes={keyframes}
                  />
                );
              }
            )
          ) : (
            <LoadingSkeletonsVariation numOfSkeletons={18} />
          )}
        </div>
      </section>

      <section className={`relative grow bg-gray-200`}>
        <Options />
        <AnimatedObject />
        <AnimationControls />
        <GeneratedCodeWindow />
      </section>
    </main>
  );
};

type LoadingSkeletonsAnimationGroupProps = {
  numOfSkeletons: number;
};

const LoadingSkeletonsAnimationGroup = ({
  numOfSkeletons,
}: LoadingSkeletonsAnimationGroupProps) => {
  return (
    <div className="flex">
      {[...Array(numOfSkeletons)].map((_, index) => {
        const animationDelay = index * 0.15 + "s"; // Calculate the animation delay for each skeleton
        return (
          <div
            key={index}
            style={{ animationDelay }}
            className="min-w mx-2 flex h-32 min-w-[128px] animate-pulse cursor-pointer select-none items-center justify-center rounded-full bg-primary"
          >
            <div className="h-5 w-3/4 animate-pulse rounded-md bg-gray-300 opacity-50"></div>
          </div>
        );
      })}
    </div>
  );
};

type LoadingSkeletonsVariationProps = {
  numOfSkeletons: number;
};

const LoadingSkeletonsVariation = ({
  numOfSkeletons,
}: LoadingSkeletonsVariationProps) => {
  return (
    <>
      {[...Array(numOfSkeletons)].map((_, index) => {
        const animationDelay = index * 0.15 + "s"; // Calculate the animation delay for each skeleton
        return (
          <div
            key={index}
            style={{ animationDelay }}
            // className="min-w mx-2 flex h-32 min-w-[128px] animate-pulse cursor-pointer select-none items-center justify-center rounded-full bg-primary"
            className="flex animate-pulse items-center justify-center rounded bg-gray-200 p-6"
          >
            {/* <div className="h-5 w-3/4 animate-pulse rounded-md bg-gray-200 opacity-50 "></div> */}
          </div>
        );
      })}
    </>
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
