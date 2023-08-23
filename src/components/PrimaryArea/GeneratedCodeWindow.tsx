import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalContext } from "../../context";
import { useAppSelector } from "../../hooks";

const GeneratedCodeWindow = () => {
  const { className, keyframes } = useAppSelector(
    (state) => state.animatedObjectReducer
  );
  const { isGeneratedCodeWindowOpen, setIsGeneratedCodeWindowOpen } =
    useGlobalContext();

  const handleCloseGeneratedCodeWindow = () => {
    setIsGeneratedCodeWindowOpen(false);
  };

  return (
    <div
      className={`absolute left-1/2 top-1/2 z-40 h-[95%] w-[95%] -translate-y-1/2 bg-white text-primarydark transition-all duration-500 ${
        isGeneratedCodeWindowOpen ? "-translate-x-1/2" : "translate-x-full"
      }`}
    >
      <div className="flex w-full justify-end ">
        <button className="">
          <FontAwesomeIcon
            className="p-5 text-xl text-primary"
            icon="x"
            onClick={handleCloseGeneratedCodeWindow}
          />
        </button>
      </div>
      <div className="p-5">
        <div>{className}</div>
        <div>
          <pre className="h-64 overflow-y-scroll">{keyframes}</pre>
        </div>
      </div>
    </div>
  );
};

export default GeneratedCodeWindow;
