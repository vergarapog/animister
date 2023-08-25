import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalContext } from "../../context";
import { useAppSelector } from "../../hooks";
import { useState } from "react";

const GeneratedCodeWindow = () => {
  const { className, keyframes } = useAppSelector(
    (state) => state.animatedObjectReducer
  );
  const { isGeneratedCodeWindowOpen, setIsGeneratedCodeWindowOpen } =
    useGlobalContext();

  const handleCloseGeneratedCodeWindow = () => {
    setIsGeneratedCodeWindowOpen(false);
  };

  const animationName = className.split(" ")[0];
  const classNameText = `.${animationName} {
    -webkit-animation: ${className}
    animation: ${className}
  }`;

  const [isClassNameCopied, setIsClassNameCopied] = useState<boolean>(false);
  const [isKeyframesCopied, setIsKeyframesCopied] = useState<boolean>(false);

  const copyToClipboardClassName = () => {
    navigator.clipboard.writeText(classNameText);
    setIsClassNameCopied(true);

    setTimeout(() => {
      setIsClassNameCopied(false);
    }, 2000);
  };

  const copyToClipboardKeyframes = () => {
    navigator.clipboard.writeText(keyframes);
    setIsKeyframesCopied(true);

    setTimeout(() => {
      setIsKeyframesCopied(false);
    }, 2000);
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
      <div className="space-y-8 p-10 pt-0">
        <div className="space-y-4">
          <pre className="h-32  overflow-y-scroll bg-gray-100 p-5">
            {classNameText}
          </pre>
          <button
            className="bg-primary px-2 py-1 text-sm uppercase tracking-wide text-white"
            onClick={copyToClipboardClassName}
          >
            {isClassNameCopied ? "Class Copied!" : "Copy Class"}
          </button>
        </div>
        <div className="space-y-4">
          <pre className="h-64 overflow-y-scroll bg-gray-100 p-5">
            {keyframes}
          </pre>
          <button
            className="bg-primary px-2 py-1 text-sm uppercase tracking-wide text-white"
            onClick={copyToClipboardKeyframes}
          >
            {isKeyframesCopied ? "Keyframes copied!" : "Copy Keyframes"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneratedCodeWindow;
