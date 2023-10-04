/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, useEffect, useContext, createContext } from "react";
import { AnimationGroup } from "./types";

interface AppContextType {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedGroup: { index: number; animationTitle: string };
  setSelectedGroup: React.Dispatch<
    React.SetStateAction<{ index: number; animationTitle: string }>
  >;
  selectedVariation: string;
  setSelectedVariation: React.Dispatch<React.SetStateAction<string>>;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  isSideBarOpen: boolean;
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOptionsOpen: boolean;
  setIsOptionsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isGeneratedCodeWindowOpen: boolean;
  setIsGeneratedCodeWindowOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animationItemsList: AnimationGroup[];
  setAnimationItemsList: React.Dispatch<React.SetStateAction<AnimationGroup[]>>;
}

const AppContext = createContext<AppContextType>({
  selectedCategory: "Basic",
  setSelectedCategory: () => {},
  selectedGroup: { index: 0, animationTitle: "" },
  setSelectedGroup: () => {},
  selectedVariation: "",
  setSelectedVariation: () => {},
  errorMessage: "",
  setErrorMessage: () => {},
  isSideBarOpen: false,
  setIsSideBarOpen: () => {},
  isOptionsOpen: false,
  setIsOptionsOpen: () => {},
  isGeneratedCodeWindowOpen: false,
  setIsGeneratedCodeWindowOpen: () => {},
  animationItemsList: [],
  setAnimationItemsList: () => {},
});

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Basic");
  const [selectedGroup, setSelectedGroup] = useState<{
    index: number;
    animationTitle: string;
  }>({ index: 0, animationTitle: "" });
  const [selectedVariation, setSelectedVariation] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
  const [isGeneratedCodeWindowOpen, setIsGeneratedCodeWindowOpen] =
    useState<boolean>(false);
  const [animationItemsList, setAnimationItemsList] = useState<
    AnimationGroup[]
  >([]);

  useEffect(() => {
    document.body.style.overflow = isSideBarOpen ? "hidden" : "auto";

    // Clean up the effect when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSideBarOpen]);

  return (
    <AppContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        selectedGroup,
        setSelectedGroup,
        selectedVariation,
        setSelectedVariation,
        errorMessage,
        setErrorMessage,
        isSideBarOpen,
        setIsSideBarOpen,
        isOptionsOpen,
        setIsOptionsOpen,
        isGeneratedCodeWindowOpen,
        setIsGeneratedCodeWindowOpen,
        animationItemsList,
        setAnimationItemsList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
