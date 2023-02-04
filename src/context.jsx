import { createContext, useContext, useState } from "react";

// Custom Hook
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = (props) => {
  const [name, setName] = useState("Dev");
  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
