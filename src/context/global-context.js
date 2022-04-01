import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const useGlobal = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [name, setName] = useState(null);
  const [mainFocus, setMainFocus] = useState(null);

  return (
    <GlobalContext.Provider value={{ name, setName, mainFocus, setMainFocus }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, useGlobal };
