import { useGlobalContext } from "../context";

const Backdrop = () => {
  const {
    isSideBarOpen,
    isGeneratedCodeWindowOpen,
    setIsSideBarOpen,
    setIsGeneratedCodeWindowOpen,
  } = useGlobalContext();

  const closeSideBarAndGeneratedCodeWindow = () => {
    setIsSideBarOpen(false);
    setIsGeneratedCodeWindowOpen(false);
  };

  if (isSideBarOpen || isGeneratedCodeWindowOpen) {
    return (
      <div
        className="fixed left-0 top-0 h-screen w-screen bg-black opacity-40"
        onClick={closeSideBarAndGeneratedCodeWindow}
      ></div>
    );
  }

  return <></>;
};

export default Backdrop;
