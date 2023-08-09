import assertNever from "../../helpers/assertNever";
import { useAppSelector } from "../../hooks";
import { useState, useEffect } from "react";

type Props = {
  animationCSS: string;
};

const AnimatedObject = ({ animationCSS }: Props) => {
  const objectType = useAppSelector((state) => state.optionsReducer.objectType);

  //force react to remount by key treatint it as new instance , to replay the animation
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [objectType]);

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
