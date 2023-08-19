import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// type Props = {}

const AnimationControls = () => {
  return (
    <div className="absolute right-10 top-6 flex space-x-4">
      <div>
        <FontAwesomeIcon
          className={`cursor-pointer rounded-full bg-white p-2 text-xl text-primary md:text-2xl`}
          icon="arrow-rotate-right"
        />
      </div>
      <div>
        <FontAwesomeIcon
          className={`cursor-pointer rounded-full bg-white p-2 text-xl text-primary md:text-2xl`}
          icon={["far", "heart"]}
        />
      </div>
      <div>
        <FontAwesomeIcon
          className={`cursor-pointer rounded-full bg-white p-2 text-xl text-primary md:text-2xl`}
          icon="code"
        />
      </div>
    </div>
  );
};

export default AnimationControls;
