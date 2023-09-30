import { useGlobalContext } from "../../context";
import assertNever from "../../helpers/assertNever";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { useEffect } from "react";
import { remountKey, setClassname } from "../../reducers/animatedObjectReducer";

const AnimatedObject = () => {
  const {
    duration,
    objectType,
    timingFunction,
    delay,
    iterationCount,
    direction,
    fillMode,
  } = useAppSelector((state) => state.optionsReducer);

  const dispatch = useAppDispatch();

  const { selectedVariation } = useGlobalContext();

  const animationCSS = `${selectedVariation} ${duration}s ${timingFunction} ${delay}s ${iterationCount} ${direction} ${fillMode}`;

  useEffect(() => {
    dispatch(setClassname(animationCSS));
  }, [animationCSS, dispatch]);

  //force react to remount by key treating it as new instance , to replay the animation
  const { key } = useAppSelector((state) => state.animatedObjectReducer);

  useEffect(() => {
    dispatch(remountKey());
  }, [
    objectType,
    duration,
    timingFunction,
    delay,
    iterationCount,
    direction,
    fillMode,
    dispatch,
  ]);

  switch (objectType) {
    case "box":
      return (
        <div
          key={key}
          style={{ animation: animationCSS }}
          className={`absolute left-1/2 top-1/3 h-32 w-32  bg-primary`}
        ></div>
      );

    case "box light":
      return (
        <div
          key={key}
          style={{ animation: animationCSS }}
          className={`absolute left-1/2 top-1/3 h-32 w-32  bg-white`}
        ></div>
      );

    case "circle":
      return (
        <div
          key={key}
          style={{ animation: animationCSS }}
          className={`absolute left-1/2 top-1/3 h-32 w-32  rounded-full bg-primary`}
        ></div>
      );

    case "image":
      return (
        <div
          key={key}
          style={{ animation: animationCSS }}
          className={`absolute left-1/2 top-1/3 h-44 w-36 border-4 border-white`}
        >
          <img src="https://picsum.photos/id/11/200/245" alt="mountain skies" />
        </div>
      );
    case "button":
      return (
        <div
          key={key}
          style={{ animation: animationCSS }}
          className={`absolute left-1/2 top-1/3 rounded-full bg-primary px-4 py-3 text-2xl`}
        >
          <button>CSS Animations</button>
        </div>
      );
    case "text":
      return (
        <div
          key={key}
          style={{ animation: animationCSS }}
          className={`absolute left-1/2 top-1/3 rounded-full text-4xl font-bold text-primary`}
        >
          <button>CSS Animations</button>
        </div>
      );
    case "letter":
      return (
        <div
          key={key}
          style={{ animation: animationCSS }}
          className={`absolute left-1/2 top-1/3 text-9xl font-bold text-accent`}
        >
          <button>B</button>
        </div>
      );

    default:
      return assertNever(objectType);
  }
};

export default AnimatedObject;
