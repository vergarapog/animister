/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, useContext, createContext } from "react";

interface AppContextType {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  isSideBarOpen: boolean;
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType>({
  selectedCategory: "Basic",
  setSelectedCategory: () => {},
  errorMessage: "",
  setErrorMessage: () => {},
  isSideBarOpen: false,
  setIsSideBarOpen: () => {},
});

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Basic");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        errorMessage,
        setErrorMessage,
        isSideBarOpen,
        setIsSideBarOpen,
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
