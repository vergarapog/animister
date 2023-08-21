import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch } from "../../hooks";
import { remountKey } from "../../reducers/animatedObjectReducer";

// type Props = {}

const AnimationControls = () => {
  const dispatch = useAppDispatch();

  const handleReplayAnimation = () => {
    dispatch(remountKey());
  };

  return (
    <div className="absolute right-10 top-6 flex space-x-4">
      <div>
        <FontAwesomeIcon
          className={`cursor-pointer rounded-full bg-white p-2 text-xl text-primary md:text-xl`}
          icon="arrow-rotate-right"
          onClick={handleReplayAnimation}
        />
      </div>
      <div>
        <FontAwesomeIcon
          className={`cursor-pointer rounded-full bg-white p-2 text-xl text-primary md:text-xl`}
          icon="heart"
        />
      </div>
      <div>
        <FontAwesomeIcon
          className={`cursor-pointer rounded-full bg-white p-2 text-xl text-primary md:text-xl`}
          icon="code"
        />
      </div>
    </div>
  );
};

export default AnimationControls;
