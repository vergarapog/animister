import assertNever from "../../helpers/assertNever";

type Props = {
  objectType: "box" | "circle";
  animationCSS: string;
};

const AnimatedObject = ({ objectType, animationCSS }: Props) => {
  switch (objectType) {
    case "box":
      return (
        <div
          style={{ animation: animationCSS }}
          className={`- absolute left-1/2 top-1/2 h-32 w-32  bg-primary`}
        ></div>
      );

    case "circle":
      return (
        <div
          style={{ animation: animationCSS }}
          className={`- absolute left-1/2 top-1/2 h-32 w-32  rounded-full bg-primary`}
        ></div>
      );

    default:
      return assertNever(objectType);
  }
};

export default AnimatedObject;
