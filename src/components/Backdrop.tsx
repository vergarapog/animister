import { useGlobalContext } from "../context";

const Backdrop = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useGlobalContext();

  if (isSideBarOpen) {
    return (
      <div
        className="fixed left-0 top-0 h-screen w-screen bg-black opacity-40"
        onClick={() => setIsSideBarOpen(false)}
      ></div>
    );
  }

  return <></>;
};

export default Backdrop;
