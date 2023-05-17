/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, useContext, createContext } from "react";

interface AppContextType {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextType>({
  selectedCategory: "",
  setSelectedCategory: () => {},
  errorMessage: "",
  setErrorMessage: () => {},
});

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  return (
    <AppContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        errorMessage,
        setErrorMessage,
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
