import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalContext } from "../../context";

const GeneratedCodeWindow = () => {
  const { isGeneratedCodeWindowOpen, setIsGeneratedCodeWindowOpen } =
    useGlobalContext();

  const handleCloseGeneratedCodeWindow = () => {
    setIsGeneratedCodeWindowOpen(false);
  };

  return (
    <div
      className={`absolute left-1/2 top-1/2 h-[95%] w-[95%] -translate-y-1/2 bg-cyan-700 transition-all ${
        isGeneratedCodeWindowOpen ? "-translate-x-1/2" : "translate-x-full"
      }`}
    >
      <div className="flex w-full justify-end p-4">
        <button className="">
          <FontAwesomeIcon
            className="text-xl"
            icon="x"
            onClick={handleCloseGeneratedCodeWindow}
          />
        </button>
      </div>
    </div>
  );
};

export default GeneratedCodeWindow;
