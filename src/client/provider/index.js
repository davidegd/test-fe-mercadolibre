import React, { useState, createContext } from "react";

const AppProvider = ({ children }) => {
  const [state, setState] = useState({});
  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export const AppContext = createContext();
