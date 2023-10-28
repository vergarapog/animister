import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalContext } from "../../context";
import { useAppSelector } from "../../hooks";
import { useEffect, useState } from "react";

const GeneratedCodeWindow = () => {
  const { className, keyframes } = useAppSelector(
    (state) => state.animatedObjectReducer
  );
  const { isGeneratedCodeWindowOpen, setIsGeneratedCodeWindowOpen } =
    useGlobalContext();

  const handleCloseGeneratedCodeWindow = () => {
    setIsGeneratedCodeWindowOpen(false);
  };

  const [syntaxOption, setSyntaxOption] = useState<string>("css_syntax");

  const handleSyntaxOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSyntaxOption(e.target.value);
  };

  const [classNameText, setClassNameText] = useState<string>("");

  useEffect(() => {
    if (syntaxOption === "css_syntax") {
      const animationName = className.split(" ")[0];
      setClassNameText(`.${animationName} {
    -webkit-animation: ${className}
    animation: ${className}
  }`);
    } else {
      const tailwindText = className.split(" ").join("_");
      setClassNameText(`animate-[${tailwindText}]`);
    }
  }, [syntaxOption, className]);

  const [isClassNameCopied, setIsClassNameCopied] = useState<boolean>(false);
  const [isKeyframesCopied, setIsKeyframesCopied] = useState<boolean>(false);

  const copyToClipboardClassName = () => {
    navigator.clipboard.writeText(classNameText);
    setIsClassNameCopied(true);

    setTimeout(() => {
      setIsClassNameCopied(false);
    }, 1500);
  };

  const copyToClipboardKeyframes = () => {
    navigator.clipboard.writeText(keyframes);
    setIsKeyframesCopied(true);

    setTimeout(() => {
      setIsKeyframesCopied(false);
    }, 1500);
  };

  return (
    <div
      className={`absolute left-1/2 top-1/2 z-50 h-[95%] w-[95%] -translate-y-1/2 bg-white text-primarydark transition-all duration-500  ${
        isGeneratedCodeWindowOpen ? "-translate-x-1/2" : "translate-x-full"
      }`}
    >
      <div className="flex w-full justify-end ">
        <button className="p-5">
          <FontAwesomeIcon
            className=" px-2 py-1.5 text-xl text-primary transition-all  hover:bg-primarydark hover:text-white"
            icon="x"
            onClick={handleCloseGeneratedCodeWindow}
          />
        </button>
      </div>
      <div className="flex space-x-4 px-10 pb-5">
        <div className="space-x-1">
          <input
            type="radio"
            id="css_syntax"
            name="syntaxOption"
            value="css_syntax"
            checked={syntaxOption === "css_syntax"}
            className="cursor-pointer"
            onChange={handleSyntaxOptionChange}
          />
          <label htmlFor="css_syntax" className="cursor-pointer">
            CSS Syntax
          </label>
        </div>
        <div className="space-x-1">
          <input
            type="radio"
            id="tailwind_syntax"
            name="syntaxOption"
            value="tailwind_syntax"
            checked={syntaxOption === "tailwind_syntax"}
            className="cursor-pointer"
            onChange={handleSyntaxOptionChange}
          />
          <label htmlFor="tailwind_syntax" className="cursor-pointer">
            Tailwind Syntax
          </label>
        </div>
      </div>
      <div className="space-y-8 p-10 pt-0">
        <div className="space-y-4">
          <pre className="h-32 overflow-y-scroll bg-gray-100 p-5 text-xs md:text-base">
            {classNameText}
          </pre>
          <button
            className={` px-2 py-1 text-sm uppercase tracking-wide text-white transition-all ${
              isClassNameCopied ? "scale-105 bg-green-400 " : "bg-primary"
            }`}
            onClick={copyToClipboardClassName}
          >
            {isClassNameCopied ? "Class Copied!" : "Copy Class"}
          </button>
        </div>
        <div className="space-y-4">
          <pre className="h-64 overflow-y-scroll bg-gray-100 p-5 text-xs md:text-base">
            {keyframes}
          </pre>
          <button
            className={` px-2 py-1 text-sm uppercase tracking-wide text-white transition-all ${
              isKeyframesCopied ? "scale-105 bg-green-400 " : "bg-primary"
            }`}
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
