import { useGlobalContext } from "../../context";
import assertNever from "../../helpers/assertNever";
import { useAppSelector } from "../../hooks";
import { useState, useEffect } from "react";

const AnimatedObject = () => {
  const { objectType, duration } = useAppSelector(
    (state) => state.optionsReducer
  );

  const { selectedVariation } = useGlobalContext();

  const animationCSS = `${selectedVariation} ${duration}s ease forwards`;

  //force react to remount by key treating it as new instance , to replay the animation
  const [key, setKey] = useState(0);
  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [objectType, duration]);

  switch (objectType) {
    case "box":
      return (
        <div
          key={key}
          style={{ animation: animationCSS }}
          className={`- absolute left-1/2 top-1/2 h-32 w-32  bg-primary`}
        ></div>
      );

    case "circle":
      return (
        <div
          key={key}
          style={{ animation: animationCSS }}
          className={`- absolute left-1/2 top-1/2 h-32 w-32  rounded-full bg-primary`}
        ></div>
      );

    default:
      return assertNever(objectType);
  }
};

export default AnimatedObject;
