import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch } from "../../hooks";
import { remountKey } from "../../reducers/animatedObjectReducer";
import { useGlobalContext } from "../../context";

// type Props = {}

const AnimationControls = () => {
  const dispatch = useAppDispatch();

  const handleReplayAnimation = () => {
    dispatch(remountKey());
  };

  const { setIsGeneratedCodeWindowOpen } = useGlobalContext();

  const handleOpenGeneratedCodeWindow = () => {
    setIsGeneratedCodeWindowOpen(true);
  };

  return (
    <div className="absolute right-10 top-6 flex space-x-4">
      <div>
        <FontAwesomeIcon
          className={`cursor-pointer rounded-full bg-white p-2 text-xl text-primary transition-all hover:scale-110 hover:animate-[rotate-center_0.4s_ease-in] md:text-xl`}
          icon="arrow-rotate-right"
          onClick={handleReplayAnimation}
        />
      </div>
      <div>
        <FontAwesomeIcon
          className={`cursor-pointer rounded-full bg-white p-2 text-xl text-primary transition-all hover:scale-125 md:text-xl`}
          icon="heart"
        />
      </div>
      <div>
        <FontAwesomeIcon
          className={`cursor-pointer rounded-full bg-white px-2 py-2 text-xl text-primary transition-all hover:scale-125 md:text-xl`}
          icon="code"
          onClick={handleOpenGeneratedCodeWindow}
        />
      </div>
    </div>
  );
};

export default AnimationControls;
