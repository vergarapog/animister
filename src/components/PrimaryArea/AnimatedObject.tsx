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
          className={`absolute left-1/2 top-1/4 h-32 w-32 bg-primary`}
        ></div>
      );

    case "box light":
      return (
        <div
          key={key}
          style={{ animation: animationCSS }}
          className={`absolute left-1/2 top-1/4 h-32 w-32  bg-white`}
        ></div>
      );

    case "circle":
      return (
        <div
          key={key}
          style={{ animation: animationCSS }}
          className={`absolute left-1/2 top-1/4 h-32 w-32  rounded-full bg-primary`}
        ></div>
      );

    case "image":
      return (
        <div
          key={key}
          style={{ animation: animationCSS }}
          className={`absolute left-1/2 top-1/4  border-8 border-white`}
        >
          <img src="/images/option-image.jpg" alt="mountain skies" />
        </div>
      );
    case "button":
      return (
        <div
          key={key}
          style={{ animation: animationCSS }}
          className={`absolute left-1/2 top-1/4 rounded-full bg-primary px-4 py-3 text-2xl`}
        >
          <button>CSS Animations</button>
        </div>
      );
    case "text":
      return (
        <div
          key={key}
          style={{ animation: animationCSS }}
          className={`absolute left-1/2 top-1/4 rounded-full text-4xl font-bold text-primary`}
        >
          <button>CSS Animations</button>
        </div>
      );
    case "letter":
      return (
        <div
          key={key}
          style={{ animation: animationCSS }}
          className={`absolute left-1/2 top-1/4 text-9xl font-bold text-white`}
        >
          <button>B</button>
        </div>
      );

    case "bg gradient horizontal":
      return (
        <div
          key={key}
          style={{ animation: animationCSS }}
          className={`h-full w-full bg-gradient-to-r from-rose-400 to-orange-300`}
        ></div>
      );

    case "bg gradient vertical":
      return (
        <div
          key={key}
          style={{ animation: animationCSS }}
          className={`h-full w-full bg-gradient-to-t from-rose-400 to-orange-300`}
        ></div>
      );

    case "bg gradient diagonal":
      return (
        <div
          key={key}
          style={{ animation: animationCSS }}
          className={`h-full w-full bg-gradient-to-bl from-rose-400 to-orange-300`}
        ></div>
      );

    case "bg flat color":
      return (
        <div
          key={key}
          style={{ animation: animationCSS }}
          className={`h-full w-full bg-primary`}
        ></div>
      );
    case "bg image":
      return (
        <div
          key={key}
          style={{ animation: animationCSS }}
          className={`absolute left-[30%] top-1/4  border-8 border-white`}
        >
          <img
            src="https://picsum.photos/id/10/600/400"
            alt="mountain and pine trees"
          />
        </div>
      );
    case "cover image":
      return (
        <div
          key={key}
          style={{ animation: animationCSS }}
          className={`h-full w-full`}
        >
          <img
            className="h-full w-full"
            src="https://picsum.photos/id/10/1280/720"
            alt="mountain and pine trees"
          />
        </div>
      );

    case "3D Card":
      return (
        <div key={key} className={`card-container`}>
          <div className="the-card" style={{ animation: animationCSS }}>
            <div className="the-front">front</div>
            <div className="the-back">back</div>
          </div>
        </div>
      );

    case "3D Cube":
      return (
        <div key={key} className={`cube-container`}>
          <div className="cube-area" style={{ animation: animationCSS }}>
            <div className="cube cube-front">1</div>
            <div className="cube cube-right">5</div>
            <div className="cube cube-back">3</div>
            <div className="cube cube-left">6</div>
            <div className="cube cube-top">2</div>
            <div className="cube cube-bottom">4</div>
          </div>
        </div>
      );

    default:
      return assertNever(objectType);
  }
};

export default AnimatedObject;
