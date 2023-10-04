import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalContext } from "../../context";

const OptionsToggle = () => {
  const { setIsOptionsOpen } = useGlobalContext();
  return (
    <div
      className="absolute left-5 top-5 z-10"
      onClick={() => setIsOptionsOpen(true)}
    >
      <div className="">
        <FontAwesomeIcon
          className={`cursor-pointer rounded-full bg-white p-2 text-2xl text-primary transition-all hover:scale-110 hover:animate-[rotate-center_0.4s_ease-in] md:text-2xl`}
          icon="gear"
        />
      </div>
    </div>
  );
};

export default OptionsToggle;
